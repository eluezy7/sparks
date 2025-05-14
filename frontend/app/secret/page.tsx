import React,{FC} from "react";
import YouTubeEmbed from "../../components/YouTubeEmbed";


const Secret: FC = () => {
    return (
         <div>
            <div>
                <br/>
                <h1 style={{fontSize:"50px",width:"fit-content", margin: "0 auto"}}><b>シークレット　ムービー　ブース</b></h1>
                <br/><br/>
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