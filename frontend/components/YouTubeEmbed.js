// components/YouTubeEmbed.js
import React from "react";

export default function YouTubeEmbed({ videoId }) {
  return (
    <div style={{
        position: "relative",
        width: "480px",      // 小さめの幅
        height: "270px",     // 16:9 比率で自動計算
        overflow: "hidden",
    }}>
      <iframe
        width="480"
        height="270"
        src={`https://www.youtube.com/embed/${videoId}`}   // ← ここを embed 用 URL に！
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
