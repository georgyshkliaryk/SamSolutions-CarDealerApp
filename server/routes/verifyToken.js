// const jwt = require("jsonwebtoken");
// const config = require('config');

// module.exports = function auth(req, res, next) {
//     const SecretKey = config.get("SecretKey");
//     const token = req.header("auth-token");
//     if (!token) return res.status(401).send("Access denied!");

//     try {
//         const verified = jwt.verify(token, SecretKey);
//         req.user = verified;
//         next();
//     }catch(err) {
//         res.status(400).send("Invalid token");
//     }
// }