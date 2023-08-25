<template>
    <div>
        <table class="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Product URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.Category }}</td>
                <td><img :src="product.prodUrl" alt="product"></td>
                   <!-- SVG icon button for editing -->
                   <td>
                    <!-- SVG icon button for editing -->
                    <UpdateProduct :product="product" @productUpdated="fetchProducts" />
                  
                    <!-- SVG icon button for deleting -->
                    <button @click="deleteProduct(product.prodID)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <!-- Icon path data -->
                      </svg>
                    </button>
                 
                   <!-- SVG icon button for deleting -->
          <!-- <button @click="deleteProduct(product.prodID)">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
          </button> -->
                </td>
              </tr>
            </tbody>
          </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { fullStackEOMPUrl } from "@/store";
  
  export default {
    props: {
      product: Object, 
    },
    data() {
      return {
        updatedProduct: { ...this.product },
      };
    },
    methods: {
      async updateProduct() {
        try {
          const response = await axios.patch(
            `${fullStackEOMPUrl}product/id${this.updatedProduct.prodID}`,
            this.updatedProduct
          );
  
          if (response.status === 200) {
            this.$emit("productUpdated"); 
            alert("Product updated successfully");
          }
        } catch (error) {
          console.error("Error updating product:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  