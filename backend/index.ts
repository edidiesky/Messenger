import express, {Express} from "express";
import path from "path";

import cors from "cors";
import cookieParser from 'cookie-parser'
// import bcrypt from 'bcryptjs'
// import crypto from 'crypto'
import dotenv from "dotenv";

dotenv.config();

import { createServer } from 'node:http'
import { Server } from "socket.io";


const app: Express = express();
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000"
  }
});


import { errorHandler, NotFound } from "./middleware/error-handler";

app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())

import Auth from './routes/authRoute'
import userAuth from './routes/userRoute'
import userConversation from './routes/conversationRoute'
import userMessage from './routes/messageRoute'


app.use('/api/v1/auth', Auth)
app.use('/api/v1/user', userAuth)
app.use('/api/v1/conversation', userConversation)
app.use('/api/v1/message', userMessage)


// // Middlewares
app.use(NotFound);
app.use(errorHandler);

// function that check sif the userId is included in the users array else it add the user id and scoket Id

const users = [] as any
const addUserId = (userId?:string, socketId?:string)=> {
  // check if the object: {yserId, socketId} is being found in the usres array
  // if not found add it to the users array
  !users?.some((user?:any)=> user?.userId === userId) && users.push({userId, socketId})
}

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });

  // io.emit('message','Connected form the backend')
  socket.on('addUserId', (id) => addUserId(id, socket?.id))
});

server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
