import { User } from "../modal/UserModal.js"
import bcrypt from "bcrypt"
let users = [
    {
        name: 'karthik',
        phno: "701312094",
        password: '1234',
        email: 'abc@gmail.com',
        cart: [],
        whishList: [],
        orders: []
    }
];


const userLogin = async (req, res) => {
    try {
        let { email, password } = req.body;
        let foundUser = await User.find({ email: email });
        if (foundUser[0]) {
            const passwordMatch = await bcrypt.compare(password, foundUser[0].password);
            if (passwordMatch) {
                let {_id} = foundUser[0];
                res.status(200).json({ status: true,userId:_id })
            } else {
                res.status(401).json({ status: false })
            }
        } else {
            res.status(501).json({ message: "user not found " })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const userRegister = async (req, res) => {
    let saltRounds = 10;
    try {
        let { name, phno, password, email } = req.body
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        let newUser = await User.create({
            name,
            phno,
            password: hashedPassword,
            email
        })
        res.status(200).json({ message: "User Registered Succesfully", user: req.body })
    } catch (error) {
        res.status(500).json({ error })
    }
}













export { userLogin, userRegister }