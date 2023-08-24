const Users = require('./user')
const Products = require('./product')

//Export all objects
module.exports = {
    users: new Users(),
    products: new Products()  
}
 