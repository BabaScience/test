const express = require('express')




// app

const app = express()

const PORT = "3000"




app.get('/', (req, res) => {
	res.send('hello world!')

})







// listening on port

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}`)
})
