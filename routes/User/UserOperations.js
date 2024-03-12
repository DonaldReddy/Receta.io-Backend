import bcrypt from 'bcrypt'
import { User } from '../../database/schemas/User.js'


async function userSignUp(email, password) {
    try {
        const user = await User.findOne({ email: email })
        if (user != null)
            return { status: false, error: "Email already in use" }

        const hash = await bcrypt.hash(password, 10);
        await User.insertMany({ email: email, password: hash })
        return { status: true }
    }
    catch (error) {
        console.log(error.message);
        return { status: false, error: error.message };
    }
}

async function userLogin(email, password) {
    try {
        const user = await User.findOne({ email: email })
        if (user == null)
            return { status: false, error: "User doesn't exist" }
        if (await bcrypt.compare(password, user.password))
            return { status: true }
        return { status: false, error: "Wrong Password" };
    }
    catch (error) {
        console.log(error.message);
        return { status: false, error: error.message };
    }
}

export { userSignUp, userLogin }
