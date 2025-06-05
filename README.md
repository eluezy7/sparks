<h1><b>Laravel × Next.js Full-Stack App</b></h1>

Laravel × Next.js によるモダンなフルスタックアプリ構成です。Docker Compose を使用して、インフラを含めた開発環境を一発で構築可能です。将来的な拡張や本番環境へのデプロイを見据えた、実務でも通用するベースを目指しました。

🔥 プロジェクト概要

フロントエンド: Next.js (React)

バックエンド: Laravel 12

コンテナ: Docker & Docker Compose

データベース: MySQL (Docker ボリューム)


🚀 起動手順

# 1. リポジトリをクローン
<code>git clone https://github.com/eluezy7/local.git sparks
cd sparks
</code>


※初回のみDockerfileのコメントアウトを
削除してください<br>
<code>###RUN composer install<br>
　↓<br>
RUN composer install
</code>

# 2. Docker Compose でビルド＆起動


<code>docker compose up --build</code>

フロントエンド: http://localhost:3000

バックエンドAPI: http://localhost:8000/api/

🛠 技術スタック

レイヤー

技術

フロントエンド

Next.js (React, type script)

バックエンド

Laravel 12 (PHP 8.x)

インフラ

Docker, Docker Compose

nginx　(追加済)

DB

MySQL (Docker ボリューム)

管理ツール

Git, GitHub

🎯 主な機能

Next.js と Laravel 間の API 連携サンプル (GET/POST)<br>
[GET 200 OK] 確認済み

Docker Compose によるワンクリック起動

環境変数による柔軟なホスト・ポート設定

📁 ディレクトリ構成
<code>
/ (ルート)
├─ frontend/      # Next.js ソースコード
|   └─ Dockerfile(frontend)
├─ backend/       # Laravel ソースコード
|   └─ Dockerfile(backend)
├─ docker-compose.yml
└─ README.md      # このファイル
</code>
💡 Tips

.env.example を参考に .env を作成してください。

▼ 技術選定理由<br>

・Laravel + Docker<br>
　安定したWeb API基盤を構築しつつ、将来的にはゲームサーバーとしての拡張も視野に入れています。そのため、柔軟性と拡張性に優れた Laravel を選定しました。Docker を併用することで開発環境の統一・再現性を担保しています。

・Next.js + TypeScript<br>
　Next.jsは最新のフロントエンド技術を取り入れたフレームワークであり、TypeScriptと併用することで型の安全性と保守性を高めることができます。開発効率とユーザー体験の向上を両立できるため、採用いたしました。

・Nginx<br>
　Nginxを追加しました。


📝 ライセンス

This project is licensed under the MIT License.

MIT © eluezy7
