class UserController {
    login(req, res){
        console.log('Login Success')

        return res.status(200).json({message: "login succes"})
    }

    get(req, res){
        return res.status(200).json({message: "Get profile success"})
    }
}

module.exports = new UserController()