const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000

const CookieByUserId = (id)=>{
    return jwt.sign({id}, 'net', {expiresIn: maxAge})
}
const CookieByUsername = (username)=>{
    return jwt.sign({username}, 'net', {expiresIn: maxAge})
}

module.exports = { CookieByUserId, CookieByUsername, maxAge }