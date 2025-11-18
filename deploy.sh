#!/usr/bin/env bash
# ─────────────────────────────────────────────
# deploy.sh (GitHub Actions からもローカルからも実行可)
# ─────────────────────────────────────────────
set -euxo pipefail

# （必要なら）プロジェクトのルートに移動
# cd /path/to/your/project

# 1. コンテナ停止＋ボリューム削除
docker-compose down -v

# 2. リモートリポジトリから最新を pull
#    BRANCH 環境変数でブランチ名指定（未設定なら main）
#git pull origin "${BRANCH:-develop}"

# ── 以下、必要に応じて有効化 ─────────────────

# 3. PHP／Laravel の依存パッケージ更新
# docker-compose exec app composer install --no-interaction --optimize-autoloader

# 4. JavaScript／フロントの依存パッケージ更新
# docker-compose exec front yarn install  # or npm install

# 5. DB マイグレーション（本番なら --force を付ける）
# docker-compose exec app php artisan migrate --force

# 6. キャッシュクリア
#docker-compose exec app php artisan config:clear
#docker-compose exec app php artisan cache:clear
#docker-compose exec app php artisan view:clear

# ─────────────────────────────────────────────

# 7. 再ビルド＆起動
docker-compose up -d --build


echo "✅ デプロイ完了！"
