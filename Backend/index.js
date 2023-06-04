const express = require('express')
const connectToMongo=require('./db')

connectToMongo();

const app = express()
const port = 5000

//routes
app.use('/',require('./routes/auth'))

app.listen(port, () => {
  console.log(`iBlog listening on port ${port}`)
})