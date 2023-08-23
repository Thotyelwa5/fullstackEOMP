<template>
  <div>
    <!-- Input section for adding products -->
    <div>
      <h2>Add Product</h2>
      <input v-model="newProduct.prodName" placeholder="Product Name" />
      <input v-model="newProduct.quantity" placeholder="Quantity" type="number" />
      <input v-model="newProduct.amount" placeholder="Amount" type="number" step="0.01" />
      <input v-model="newProduct.Category" placeholder="Category" />
      <input v-model="newProduct.prodUrl" placeholder="Product URL" />
      <button @click="addProduct">Add Product</button>
    </div>

    <!-- Table displaying existing products -->
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
          <td><img :src="product.prodUrl" alt=""></td>
          <td>
            <button @click="editProduct(product)">Edit</button>
            <button @click="deleteProduct(product.prodID)">Delete</button>
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
  name: "AdminTable",
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
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    async addProduct() {
      try {
        const response = await axios.post('https://fullstackeomp1.onrender.com/add-product', this.newProduct);
        alert(response.data.msg); // Assuming the response has a 'msg' property
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
    async editProduct(product) {
      try {
        const updatedData = {
          prodName: this.newProduct.prodName,
          quantity: this.newProduct.quantity,
          amount: this.newProduct.amount,
          Category: this.newProduct.Category,
          prodUrl: this.newProduct.prodUrl,
        };
        
        await axios.patch(`https://fullstackeomp1.onrender.com/${product.prodID}`, updatedData);
        this.fetchProducts();
        alert('Product updated successfully');
      } catch (error) {
        console.error("Error editing product:", error);
      }
    },
    async deleteProduct(productId) {
    const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        try   {
          await this.$store.dispatch("deleteProduct", productId);
          console.log("Product deleted successfully!");
        } catch (error) {
        console.error("Error deleting product:", error);
        // Handle the error if needed
        }
      }
      this.$router.push("/admin");
    },
    async editProduct(product) {
      try {
        const updatedData = {
          prodName: product.prodName,
          quantity: product.quantity,
          amount: product.amount,
          Category: product.Category,
          prodUrl: product.prodUrl,
        };

        const response = await axios.patch(`${fullStackEOMPUrl}products/${product.prodID}`, updatedData);

        if (response.status !== 200) {
          throw new Error(`Failed to edit product. Status: ${response.status}`);
        }

        this.fetchProducts();
        alert('Product updated successfully');
      } catch (error) {
        console.error("Error editing product:", error);

        if (error.response) {
          console.log("Response status:", error.response.status);
          console.log("Response data:", error.response.data);
        }
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
  }

</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}

/* Style for product images */
.table img {
  max-width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Style for buttons */
.table button {
  padding: 6px 12px;
  background-color: #3490dc;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.table button:hover {
  background-color: #2779bd;
}
</style>
