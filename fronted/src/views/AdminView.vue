<template>
  <div>
    <!-- Input section for adding users -->
    <div>
      <h2>Add User</h2>
      <input v-model="newUser.firstName" placeholder="First Name" />
      <input v-model="newUser.lastName" placeholder="Last Name" />
      <input v-model="newUser.userAge" placeholder="Age" type="number" />
      <input v-model="newUser.gender" placeholder="Gender" />
      <input v-model="newUser.userRole" placeholder="Role" />
      <input v-model="newUser.emailAdd" placeholder="Email" />
      <input v-model="newUser.userPass" placeholder="Password" type="password" />
      <input v-model="newUser.profileUrl" placeholder="Profile URL" />
      <button @click="registerUser">Register User</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email</th>
          <th>Profile URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userId">
          <td>{{ user.userId }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td><img :src="user.profileUrl" alt=""></td>
          <td>
            <button @click="editUser(user)">Edit</button>
            <button @click="deleteUser(user.userId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

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
      newUser: {
        firstName: "",
        lastName: "",
        userAge: 0,
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
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
    users() {
      return this.$store.state.users
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    //===============REGISTER===================================
    async register() {
      try {
        const response = await axios.post('https://fullstackeomp1.onrender.com/register', this.newUser);
        alert(response.data.msg); 
        this.newProduct = {
          firstName: "",
        lastName: "",
        userAge: 0,
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
        };
        this.fetchUser();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
  //  =======  ADD PRODUCT================================================
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
    // ======EDIT PRODUCT===============================================
    async editProduct(product) {
  try {
    const updatedData = {
      prodName: product.prodName,
      quantity: product.quantity,
      amount: product.amount,
      Category: product.Category,
      prodUrl: product.prodUrl,
    };
    
    const response = await axios.patch(`${fullStackEOMPUrl}product/id${product.prodID}`, updatedData);

    if (response.status !== 200) {
      throw new Error(`Failed to edit product. Status: ${response.status}`);
    }

    this.$store.dispatch('fetchProducts');
    alert('Product updated successfully');
  } catch (error) {
    console.error("Error editing product:", error);

    if (error.response) {
      console.log("Response status:", error.response.status);
      console.log("Response data:", error.response.data);
    }
  }
},
// ==============DELETE USER==================================
async deleteUser(userID) {
    const confirmed = confirm("Are you sure you want to delete this user?");
      if (confirmed) {
        try   {
          await this.$store.dispatch("deleteUser", userID);
          console.log("user deleted successfully!");
        } catch (error) {
        console.error("Error deleting user:", error);
        }
      }
      this.$router.push("/admin");
    },
// ================DELETE PRODUCT=======================================
    async deleteProduct(productId) {
    const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        try   {
          await this.$store.dispatch("deleteProduct", productId);
          console.log("Product deleted successfully!");
        } catch (error) {
        console.error("Error deleting product:", error);
        }
      }
      this.$router.push("/admin");
    },
//==================EDIT USER=======================================
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

.table button {
  padding: 6px 12px;
  background-color: #3490dc;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}.table button:hover {
  background-color: #2779bd;
}
.table-container {
  overflow-x: auto;
  max-width: 100%;
}
</style>