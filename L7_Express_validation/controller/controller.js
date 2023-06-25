exports.userRegister = (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = {
            name,
            email,
            password
        }
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
}

exports.userLogin = (req, res) => {
    try {
        const {email, password } = req.body;
        const user = {
            email,
            password
        }
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
}