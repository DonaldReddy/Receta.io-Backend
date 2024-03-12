import express from 'express'
import { userLogin, userSignUp } from './UserOperations.js'

const router = express.Router()

router.post("/log-in", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const response = await userLogin(email, password);
    res.send(JSON.stringify(response));
})

router.post("/sign-up", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const response = await userSignUp(email, password);
    res.send(JSON.stringify(response));
})

export default router;