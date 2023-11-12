import express from "express";
import path from "path";

import cors from "cors";
import cookieParser from 'cookie-parser'
// import bcrypt from 'bcryptjs'
// import crypto from 'crypto'
import dotenv from "dotenv";

dotenv.config();

import { createServer } from 'node:http'
import { Server } from "socket.io";


const app = express();
const server = createServer(app);
const io = new Server({
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

io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
