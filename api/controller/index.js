const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/authentication')
const routes = express.Router()
//Import all model's objects
const {users, products} = require('../model')
//User's router
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/users/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id', (req, res)=>{
    users.delete(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

//products router
routes.get('/products', (req, res) => {
    products.getProducts(req, res)
})
// Get a single product route
routes.get('/products/:id', (req, res) => {
    products.getProduct(req, res)
})
// Add a product route
routes.post('/add-product', bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
})
// Update a single route route
routes.put('/products/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
})
routes.get('/products', (req, res) => {
    products.getProducts(req, res)
})
// Get a single product route
routes.get('/products/:id', (req, res) => {
    products.getProduct(req, res)
})
// Add a product route
routes.post('/add-product', bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
})
// Update a single route route
routes.put('/products/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
})
routes.patch('/products/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
})
// Delete a product route
routes.delete('/products/:id', (req, res) => {
    products.deleteProduct(req, res)
})
// Delete a product route
routes.delete('/products/:id', (req, res) => {
    products.deleteProduct(req, res)
})
module.exports = {
    express,
    routes,
    verifyAToken
}

