import dotenv from "dotenv"
dotenv.config()
import app from "../src/app.js"
import dbConnect from "./db/dbConnect.js"

const PORT = process.env.PORT || 3241 
dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`your server are running at this ${PORT}`)
    })
})
   .catch((error) => {
        console.error("❌ Something went wrong in index.js file, DB connection failure:", error.message);
        process.exit(1);
    });
