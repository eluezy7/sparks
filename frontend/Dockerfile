FROM node:20-alpine

WORKDIR /app

# ① 先に package*.json だけコピーして依存をインストール
COPY package*.json ./
RUN npm install

# ② 残りのソースコードをコピー
COPY . .

EXPOSE 3000

# ③ Next.js を 0.0.0.0:3000 で起動するように -H を追加
CMD ["npx", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]

