// import { Server } from "socket.io";
// const socketServer = new Server();


// const { saveMessage, getUserById } = new ChatService();
// export const onlineUsers = {};



// // this.socketServer.use((socket, next) => {
// //   const isVerified = verifyToken(socket.handshake.query);
// //   if (!isVerified) {
// //     socket._error({ error: "Unauthorized" });
// //     socket.disconnect(true);
// //     return false;
// //   }
// //   if (typeof isVerified === "object") {
// //     socket.handshake.auth = isVerified;
// //     next();
// //   }
// // });


// socketServer.on("connection", async (socket) => {
//   console.info(`New Socket Connection ${socket.id}`);
//   const user = socket.handshake.auth;
//   console.log(socket.handshake.auth);


//   onlineUsers[user.id] = {
//     authenticated: true,
//     socketId: socket.id,
//     socket
//   };
//   console.table(onlineUsers);

//   socket.on("message", (payload) => {
//     payload.from = user.id;
//     saveMessage(payload);
//     const toSocket = onlineUsers[payload.to]?.socketId;
//     socket.to(toSocket).emit("message", payload);

//     getUserById(payload.to).then((toUser) => {
//       sendNotification("Message", payload.message, toUser?.fcmToken ?? '')
//     })
//   });

//   socket.on("disconnect", (payload) => {
//     console.log(`Socket : ${socket.id} disconnected.`);
//     delete onlineUsers[user.id];
//     console.table(onlineUsers);
//   });
// });
