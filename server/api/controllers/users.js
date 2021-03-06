const userModel = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    create: (req, res, next) => {
        userModel.create({
            name: req.body.name, email: req.body.email,
            password: req.body.password
        }, (err, result) => {
            if (err) next(err);
            else res.json({message: "user added", data: null});
        });
    },
    authenticate: (req, res, next) => {
        userModel.findOne({email: req.body.email}, (err, userInfo) => {
            if (err) next(err);
            else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {
                        expires: '1h'
                    });
                    res.json({message: 'user found', data: {token}})
                } else {
                    res.json({message: 'user not found', data: null})
                }
            }
        })
    }
}