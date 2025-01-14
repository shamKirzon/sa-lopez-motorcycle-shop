import express from 'express'
import cors from 'cors'
import loginRoute from './src/routes/loginRoute.js';

const app = express(); 

app.use(cors())
app.use(express.json())

app.use("/api", loginRoute)


export default app; 

