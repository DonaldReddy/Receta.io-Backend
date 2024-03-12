import app from './app.js'
import dbConnect from './database/dbConnect.js'


dbConnect().then(() => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log("server runnning");
    })
})