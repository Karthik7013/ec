let users = [{
    _id: "1",
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
    let name = req.body.name;
    let password = req.body.password;
    let findUser = users.findIndex((e) => e.name === name);
    if (!findUser) {
        if (users[findUser].password === password) {
            res.send(users[findUser]);
        } else {
            res.send({ message: "incorrect password" });
        }
    } else {
        res.send({ message: "user not found !" });
    }
}

const userRegister = async (req, res) => {
    let { name, password, email, phno } = req.body;
    let newUser = {
        name,
        phno,
        password,
        email,
        cart: [],
        whishList: [],
        orders: []
    };
    users.push(newUser);
    res.json({ message: "user added", users });
}













export { userLogin, userRegister }