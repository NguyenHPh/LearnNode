const express = require('express') // Thư viện express
const dotenv = require('dotenv') // Thư viện giúp lấy ra các biến môi trường
const morgan = require('morgan')
const { get } = require('express/lib/response')
const cors = require('cors')
const Router = require('./src/router/index')
dotenv.config()

const app = express() // Chạy thư viện express

app.use(morgan('combined'))
app.use(express.json())
Router(app)


// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }))

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
}) // Tạo 1 server


// Test restful API
app.get('/getDataFromBackend',(req, res) => {
    return res.status(200).json({message: "Get Data Success"})
}) // Lay du lieu


app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(username, password)

    return res.status(200).json({message: "Login Success"})
}) // gui du lieu 

app.put('/updateUsernameAndPassword', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log("Username and password is updated")

    return res.status(200).json({
        message: "Username and password is updated"
    })
}) // Thay doi toan bo document (Nhung phan du lieu nao khong duoc cap nhat se bi xoa di)

app.patch('/updateUsername', (req, res) => {
    const username = req.body.username

    console.log("username is updated")

    return res.status(200).json({message: "username is updated"})
}) // Thay doi 1 phan document (Nhung phan du lieu nao khong duoc cap nhat se duoc giu nguyen)

app.delete('/delete', (req, res) => {
    const username = req.body.username

    console.log("User is deleted")

    return res.status(200).json({message: "User is deleted"})
}) // delete document
