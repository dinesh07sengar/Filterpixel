const express = require('express')
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json())




app.listen(4800, async () => {
    try {
        connect();
        console.log("Your server is running at http://localhost:4800")

    } catch (error) {
        console.log(error)

    }

})