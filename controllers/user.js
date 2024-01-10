let users = [{
    name: "karthik",
    password: "1234",
    email: "abc@gmail.com",
    phno: "7013140693",
    cart: [{}],
    whishList: [{}]
}];


const userLogin = (req, res) => {
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

const addToCart = (req, res) => {
    let id = req.params;

}





const addUser = (req, res) => {
    let { name, password, email, phno } = req.body;
    let newUser = {
        name: name,
        password: password,
        email: email,
        phno: phno,
        cart: [{}],
    };
    users.push(newUser);
    res.send({ message: "user added", users });
}




export { userLogin, addUser, addToCart }