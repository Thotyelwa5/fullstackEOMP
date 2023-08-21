const db = require("../config/index");

class Products {
    constructor() {      
    }

    // Insert Product to Database
    insertProduct(data, callback) {
        const { prodName, quantity, amount, Category, prodUrl } = data;
        const values = [prodName, quantity, amount, Category, prodUrl];
        
        const query = `
            INSERT INTO Products (prodName, quantity, amount, Category, prodUrl)
            SET ?;
        `;
        
        db.query(query, values, (err, results) => {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                callback(null, "Product added successfully.");
            }
        });
    }

    // Update Product in Database
    updateProductById(id, data, callback) {
        const { prodName, quantity, amount, Category, prodUrl } = data;

        const query = `
            UPDATE Products
            SET prodName = ?, quantity = ?, amount = ?, Category = ?, prodUrl = ?
            WHERE prodID = ?;
        `;
        
        db.query(query, [prodName, quantity, amount, Category, prodUrl, id], (err, results) => {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                callback(null, "Product updated successfully.");
            }
        });
    }

    // Delete Product from Database
    deleteProductById(id, callback) {
        const query = `
            DELETE FROM Products
            WHERE prodID = ?;
        `;
        
        db.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                callback(null, "Product deleted successfully.");
            }
        });
    }
}

module.exports = Products;
