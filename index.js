const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRoutes = require('./routes/user')
const blogRoutes = require('./routes/blog')

app.use(morgan('tiny'))
app.use(express.json())
mongoose.connect("mongodb+srv://blog:blog@blog.horkdp2.mongodb.net/").then
(console.log('Mongoose Connected')).catch((err)=>console.log(err))

app.get('/', (req, res) => {
    res.send(new Date())
})

app.use('/user', userRoutes)
app.use('/blog', blogRoutes)

app.listen(3000, () => {
    console.log('App is running on port 3000')
})