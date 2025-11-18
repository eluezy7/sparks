// socket-server/server.js
const { Server } = require("socket.io");
const http = require("http");
const players = {}; // socket.id → { role: '1P' | '2P' }


const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("接続:", socket.id);

  const currentPlayers = Object.values(players).map(p => p.role);
  const role = currentPlayers.includes('1P') ? '2P' : '1P';
  players[socket.id] = { role };

  socket.emit('roleAssigned', role);
  console.log(`[接続ログ] ${socket.id} assigned as ${role}`);



  socket.on("開始", (data1) => {
    console.log("受信:", data1);
    //socket.emit("更新", data1, data2);
    io.emit("更新",data1);
  });

  socket.on("disconnect", () => {
    console.log("切断:", socket.id);
    console.log(`[Player切断] ${socket.id} (${players[socket.id]?.role}) disconnected`);
    delete players[socket.id];

  });
});

server.listen(3000, () => {
  console.log("Socket.io起動中（port 3000）");
});