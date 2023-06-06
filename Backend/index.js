const express = require('express')
const connectToMongo=require('./db')

connectToMongo();

const app = express()
const port = 5000
app.use(express.json());
//routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/blog',require('./routes/blog'))

app.listen(port, () => {
  console.log(`iBlog listening on port ${port}`)
})