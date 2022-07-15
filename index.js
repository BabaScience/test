const express = require('express')




// app

const app = express()

const PORT = "8080"




app.get('/', (req, res) => {
	res.send('hello world! -  quick test. modified')

})







// listening on port

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}`)
})
