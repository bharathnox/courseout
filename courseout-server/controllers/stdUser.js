const stdUser = require('../model/stdUser')

async function handlestdUserSignup(req, res) {
    const { name, email, password } = req.body;
    await stdUser.create({
        name,
        email,
        password,
    });
    return res.render("home");
}

module.exports = {
    handlestdUserSignup,
}