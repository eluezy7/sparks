import React,{FC} from "react";
import YouTubeEmbed from "../components/YouTubeEmbed";


const Secret: FC = () => {
    return (
         <div>
                <header className="w-full bg-white shadow-md p-4 flex items-center fixed top-0 left-0 w-full z-50" >
                    {/* 左側アイコン */}
                    <div className="flex items-center">
                        <span className="text-xl font-semibold ">Mytube</span>
                    </div>
                    {/* 検索バー風UI */}
                    <div className="flex items-center w-5/6 justify-center ">
                        <div className="relative max-w-md mx-4">
                        {/* 左の検索アイコン */}
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </div>
                        {/* 入力フィールド。右側にボタン分だけ余白を空ける */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-104 border border-gray-300 rounded-full pl-10 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {/* 右のアクションボタン */}
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full hover:bg-gray-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </button>
                        </div>
                            <button
                                className="hover:bg-gray-100 " 
                             >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
                            </button>
                        
                    </div>
                    <div className="flex item-center">
                        <button  className="hover:bg-gray-100 ">
                            <div className="hover:bg-gray-400 bg-gray-200 pr-2 mr-2 rounded-full">    
                                ＋ 作成
                            </div>
                        </button>
                        <div className="mt-1">
                            <button
                                className="hover:bg-gray-100 " 
                             >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                            </button>
                        </div>
                        <div className="mt-1">
                                 {/*<img
                                        src="https://sparks-dev.online/images/neko.png"      // フロントからはこのまま
                                        width={40}
                                        height={40}
                                        alt="User Avatar"
                                        className="rounded-full ml-2"
                                    />*/}
                        </div>
                    </div>
                </header>
            <div className="h-38">
                
            </div>
            <div style={{display:"flex",width: "fit-content", margin: "0 auto"}}>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="tibzpJugRrQ" />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="QBvWrVNjdeI" />
                </div>
            </div>
            <div style={{display:"flex",width: "fit-content", margin: "0 auto"}}>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="EOvNwulsShU" />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="HfYPphWvqi0" />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="P8b9OKcn6Tc" />
                </div>
            </div>
            <div style={{display:"flex",width: "fit-content", margin: "0 auto"}}>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="NPIXMIYQYZU" />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="PhNvZXzlj2U" />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}}>
                    <YouTubeEmbed videoId="FscrHh3RscE" />
                </div>
            </div>           
        </div>
    );
};

export default Secret;