import express from 'express'
import cors from 'cors'
import loginRoute from './src/routes/loginRoute.js';
import signupRoute from './src/routes/signupRoute.js';

const app = express(); 

app.use(cors())
app.use(express.json())

app.use("/api", loginRoute)
app.use("/api", signupRoute)


export default app; 

