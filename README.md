Laravel × Next.js Full-Stack App

Docker Compose で一発起動できるフルスタック構成のポートフォリオ

🔥 プロジェクト概要

フロントエンド: Next.js (React, Turbopack)

バックエンド: Laravel 12

コンテナ: Docker & Docker Compose

データベース: MySQL (Docker ボリューム)


🚀 起動手順

# 1. リポジトリをクローン
git clone https://github.com/eluezy7/local.git my-portfolio
cd my-portfolio

# 2. Docker Compose でビルド＆起動
docker compose up --build

フロントエンド: http://localhost:3000

バックエンドAPI: http://localhost:8000/api

🛠 技術スタック

レイヤー

技術

フロントエンド

Next.js (React, Turbopack)

バックエンド

Laravel 12 (PHP 8.x)

インフラ

Docker, Docker Compose

DB

MySQL (Docker ボリューム)

管理ツール

Git, GitHub

🎯 主な機能

[予定]Next.js と Laravel 間の API 連携サンプル (GET/POST)

Docker Compose によるワンクリック起動

環境変数による柔軟なホスト・ポート設定

📁 ディレクトリ構成

/ (ルート)
├─ frontend/      # Next.js ソースコード
├─ backend/       # Laravel ソースコード
├─ docker-compose.yml
├─ Dockerfile     # frontend 用
└─ README.md      # このファイル

💡 Tips

.env.example を参考に .env を作成してください。

マイグレーションはバックエンドコンテナ内で自動実行されます。

📝 ライセンス

MIT © eluezy7
