<template>
    <div>
      <h2>Add Product</h2>
      <input v-model="newProduct.prodName" placeholder="Product Name" />
      <input v-model="newProduct.quantity" placeholder="Quantity" type="number" />
      <input v-model="newProduct.amount" placeholder="Amount" type="number" step="0.01" />
      <input v-model="newProduct.Category" placeholder="Category" />
      <input v-model="newProduct.prodUrl" placeholder="Product URL" />
      <button @click="addProduct">Add Product</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        newProduct: {
          prodName: "",
          quantity: 0,
          amount: 0,
          Category: "",
          prodUrl: "",
        },
      };
    },
    methods: {
        async addProduct() {
      try {
        const response = await axios.post('https://fullstackeomp1.onrender.com/add-product', this.newProduct);
        alert(response.data.msg); 
        this.newProduct = {
          prodName: "",
          quantity: 0,
          amount: 0,
          Category: "",
          prodUrl: "",
        };
        this.fetchProducts();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
      resetForm() {
        // Reset the form after successful add
        this.newProduct.prodName = "";
        this.newProduct.quantity = 0;
        this.newProduct.amount = 0;
        this.newProduct.Category = "";
        this.newProduct.prodUrl = "";
      },
      populateForm(product) {
      this.newProduct.prodName = product.prodName;
      this.newProduct.quantity = product.quantity;
      this.newProduct.amount = product.amount;
      this.newProduct.Category = product.Category;
      this.newProduct.prodUrl = product.prodUrl;
    },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  