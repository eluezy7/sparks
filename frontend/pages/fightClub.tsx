import React,{FC, use} from "react";
import { useState } from "react";
import { useEffect } from "react";
import { io ,Socket} from "socket.io-client";
import { useRef } from "react";
import { useRouter } from 'next/navigation'
 

const fightClub: FC = () => {
    const [board, setBoard] = useState(["","","",
                                        "","","",
                                        "","",""]);
    const [currentPlayer, setCurrentPlayer] = useState("〇");
    const [showPopup, setShowPopup] = useState(false);
    const [drowPopup, setDrowPopup] = useState(false);
    const [lastPlayer, setLastPlayer] = useState("");
    const [message1P, setMessage1P] = useState<string>("");
    const [message2P, setMessage2P] = useState<string>("");
    const [roomView,setRoomView] = useState<number>(0);

    const [teban,setTeban] = useState<string>("1P");

    const router = useRouter()

    const color1P = "text-red-500";
    const color2P = "text-blue-300";

    const [userName1P,setUserName1P] = useState<string>("1P:No Data");
    const [userName2P,setUserName2P] = useState<string>("2P:No Data");

    const [date,setDate] = useState<string>("");

    const [inputName, setInputName] = useState("");
    const [isEntered, setIsEntered] = useState(false);

    let [chatCounter,setChatCounter] = useState<number>(0);

    const [rolePlayer,setRolePlayer] = useState<String>();
    const [shouldBroadcast, setShouldBroadcast] = useState(false);
    

    const [messages, setMessages] = useState([
        { name: "", text: "", color: "" ,player: ""}
    ]);

    const socketRef = useRef<Socket | null>(null);


    const handleEnterRoom = () => {

            
            if(rolePlayer === "1P"){
                const name1=`1P:${inputName || "Anonymas"}`;
                setUserName1P(name1);
                setIsEntered(true);
                const message1="1P入室しました";
                setMessages([{name:name1, text: message1, color: color1P, player: "1P"}]);
                setShouldBroadcast(true);
                setRoomView(1);
                handleCounter();
            }else{       
                const name2=`2P:${inputName || "Anonymas"}`;
                setUserName2P(name2);
                setIsEntered(true);
                const message="2P入室しました";
                setMessages([{name:name2, text: message, color: color2P, player: "2P"}]);
                setShouldBroadcast(true);
                setRoomView(1);
                handleCounter();
            }
            
    };

    const handleClick = (index: number) => {
        if (board[index]) return; // すでに埋まってるなら無視
        if(teban != rolePlayer)return;
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setLastPlayer(currentPlayer); // 勝利判定用に記録
        setCurrentPlayer(currentPlayer === "〇" ? "✕" : "〇");
        if(teban === "1P"){
            setTeban("2P");
        }else{
            setTeban("1P");
        }
        setShouldBroadcast(true);
        
    };


     const hidePopup=()=>{
        setShowPopup(false);
        setDrowPopup(false);
        setBoard(["","","","","","","","",""]);
        
    }

   useEffect(() => {
         console.log("boardが更新された:", board);
    }, [board]);


    useEffect(() => {
        
        if (shouldBroadcast && socketRef.current) {
            socketRef.current.emit("開始", {messages, board,currentPlayer,lastPlayer,teban});
            console.log("ブロードキャスト開始",board);
        }    
    }, [shouldBroadcast,board]);
    
    useEffect(()=>{
            if (lastPlayer && checkWin(lastPlayer)) {
                    setShowPopup(true);
                }else if(checkDrow(lastPlayer)){ 
                    setDrowPopup(true);
                }
    },[board]);
    
    useEffect(() => {   
      
         
            const socket = io("http://localhost:3000"); // Socket.ioサーバーのURL
            socketRef.current = socket;


            socket.on("connect", () => {
                console.log("接続:", socket.id);
                socket.on("roleAssigned", (role) => {
                    console.log("ロール:", role);
                    setRolePlayer(role);   
                });
            });
        
       

            socket.on("更新", (data1) => {
                /*
                if (!rolePlayer) {
                    console.warn("rolePlayer未設定のため更新スキップ");
                    return;
                }
                    */
                console.log("更新：",data1);
                const latestMessage = data1.messages[data1.messages.length - 1];
                // 相手の名前をセット
                if (latestMessage.player === "1P") {
                
                setUserName1P(latestMessage.name);
                } else if (latestMessage.player === "2P") {
                
                setUserName2P(latestMessage.name);
                }

                setMessages(data1.messages);
                
                setLastPlayer(data1.lastPlayer);
                setBoard(data1.board);
                setCurrentPlayer(data1.currentPlayer);
                setTeban(data1.teban);
               
                
                if (data1.lastPlayer && checkWin(data1.lastPlayer)) {
                    setShowPopup(true);
                }else if(checkDrow(data1.lastPlayer)){ 
                    setDrowPopup(true);
                }
                             
                setShouldBroadcast(false);
            });
         

        return () => {
           socket.disconnect();
        }; 
        
    }, []);

    function checkWin(player:string) {
        const wins = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        return wins.some(pattern =>
            pattern.every(index => board[index] === player)
        );

        
    }

    function checkDrow(player:string){
        const drows = [
            [0,1,2,3,4,5,6,7,8]
        ];
        return drows.some(pattern => 
            pattern.every(index => board[index] != "")
        );
    }

    const handleSetRoom = ()=>{
        setRoomView(0);
        setUserName1P("");
    }
    
   const handlePush=()=>{

            const newMessage = {
                name: userName1P,
                text: message1P,
                color: color1P,
                player: "1P"
            };

            const newMessage2 = {
                name: userName2P,
                text: message2P,
                color: color2P,
                player: "2P"
            };

        if(rolePlayer === "1P"){
            setMessages(prev => {
                const newMessages = [...prev, newMessage];
                return newMessages.length > 20 ? newMessages.slice(-20) : newMessages;
            }); // ←履歴追加！
            setShouldBroadcast(true);
            setMessage1P("");
            

        }else{
             setMessages(prev => {
                const newMessages2 = [...prev, newMessage2];
                return newMessages2.length > 20 ? newMessages2.slice(-20) : newMessages2;
            }); // ←履歴追加！
            setShouldBroadcast(true);
            setMessage2P("");
        }
       
        handleCounter();
        
        

        
        
   }

   const handleCounter=()=>{
        setChatCounter(chatCounter + 1);
   }

    const handleDbPush = async () => {
                console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
                console.log("submit開始");
                const res = await fetch(
                //'http://localhost:8000/api/auth/register',
                `${process.env.NEXT_PUBLIC_API_URL}/api/post/create`,
                {
                    method: 'POST',
                
                    headers: { 
                    'Content-Type': 'application/json' ,
                    'Accept': 'application/json'
                    },
                    body: JSON.stringify({ date }),
                    credentials: 'include',
                    
                }
                )

                console.log("res.status:", res.status) // 👈 ステータス番号（401? 422? 500?）
                const data = await res.json()
                if (res.ok) {
                    setDate("");
                    console.log("res.ok:", res.ok) // 👈 falseになる原因を探る
                }else {
                    console.error("通信失敗:", data);
                }
        }

    return(
        <div>
            
            <div className="flex w-[1600px] ">
                <div className="w-[800px] ml-16">
                    <div className="text-[40px] h-[100px]"><b>【ガチンコ】〇✕　ファイトクラブ✊✊✊</b></div>
                    
                        <div id="board">
                            <div className="flex flex-col">
                                {[0, 1, 2].map(row => (
                                <div key={row} className="flex">
                                    {[0, 1, 2].map(col => {
                                    const index = row * 3 + col;
                                    return (
                                        <div
                                        key={index}
                                        className="cell border w-[220px] h-[220px] text-[200px] flex items-center justify-center"
                                        onClick={() => handleClick(index)}
                                        >
                                        {board[index]}
                                        </div>
                                    );
                                    })}
                                </div>
                                ))}
                            </div>
                        </div>
                </div>
                    {showPopup && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                            
                            <div className="bg-white p-10 rounded-lg shadow-lg text-[40px] text-center">🎉 勝利！{lastPlayer}さん！<br/>
                                <button className="text-[20px] bg-gray-500 w-[60px] rounded-lg border text-white" onClick={()=>hidePopup()}>OK</button>
                            </div>
                            
                        </div>
                    )}
                    {drowPopup && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                            
                            <div className="bg-white p-10 rounded-lg shadow-lg text-[40px] text-center">✊引き分け！！！！✊<br/>
                                <button className="text-[20px] bg-gray-500 w-[60px] rounded-lg border text-white" onClick={()=>hidePopup()}>OK</button>
                            </div>
                            
                        </div>
                    )}
                <div className="w-[600px] fixed top-0 relative">
                    <div className="h-[100px] text-[40px] border-b border-black"><b>ROOM</b><br/>
                        <div className="flex">

                            {roomView === 0 && (
                                <div className="text-[20px]">
                                名前：
                                    <input type="text" id="username" name="username" placeholder="名前を入力" className="text-[20px] top-0 border" 
                                        value={inputName}
                                        onChange={(e) => setInputName(e.target.value)}>
                                    </input>
                                <button className="border rounded-lg bg-gray-500 text-[20px] w-[80px] text-white" 
                                    onClick={()=>handleEnterRoom()}>入室
                                </button>
                            </div>
                            )}

                            {roomView === 1 && (
                                <div className="text-[20px]">
                                    <b>
                                        <div className="flex">
                                                入室者： {userName1P}　　　{userName2P}  
                                                <button className="border rounded-lg text-white w-[80px] bg-gray-500" onClick={()=>handleSetRoom()}>退室</button>    
                                        </div>
                                    </b>
                                </div>
                                
                            )}
                        </div>
                    </div>
                    {isEntered && messages.slice(-20).map((msg, index) => (
                        <div key={index} className={`text-[20px}] ${msg.color}`}>
                            <b>{msg.name}＞{msg.text}</b>
                        </div>
                    ))}

                    
                        <div className="flex absolute top-[600px] w-[700px]">
                                <label className="text-[20px] w-[65px]">発言：</label>
                                <input
                                    className="border text-[20px] w-[500px]"
                                    type="text"
                                    placeholder="発言を入力してね"
                                    value={rolePlayer === "1P" ? message1P : message2P}
                                    onChange={(e) => {
                                            if (rolePlayer === "1P") {
                                                setMessage1P(e.target.value);
                                            } else if (rolePlayer === "2P") {
                                                setMessage2P(e.target.value);
                                            }
                                    }}
                                    onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                            handlePush();
                                        }
                                    }}     
                                />
                                <button className="border rounded-lg bg-gray-500 text-[20px] w-[80px] text-white" onClick={()=>handlePush()}>発言</button>  
                        </div>
                        
                </div>                 
            </div>
            <br/><br/><br/>
            <div className="top-[800px] ">
                    <label className="text-[20px] w-[65px] ">お祈り日時：</label>
                        <input
                            className="border text-[20px] w-[500px]"
                            type="text"
                            placeholder="呼び出し日時を入力してね！"
                            value={date}
                            onChange={(e) => {
                                    setDate(e.target.value);
                            }}
                            
                        />
                        <button className="border rounded-lg bg-gray-500 text-[20px] w-[80px] text-white" onClick={(e) => handleDbPush()}>お祈り</button>  
            </div>
        </div>
    );
}

export default fightClub;