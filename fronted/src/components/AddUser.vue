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
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
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
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await axios.post(
            "https://fullstackeomp1.onrender.com/register",
            this.newUser
          );
          alert(response.data.msg);
          this.$emit("userRegistered"); 
          this.newUser = {
            firstName: "",
            lastName: "",
            userAge: 0,
            gender: "",
            userRole: "",
            emailAdd: "",
            userPass: "",
            profileUrl: "",
          };
        } catch (error) {
          console.error("Error adding user:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    width: 300px;
    height: 40px;
    border-radius: 0;
    border: solid black
  }
  @media screen and (max-width: 340px) {
    input {
        width: 270px;
    }
  }
  .button {
    background-color: blue;
    font-family: montserrat;
  }
  </style>
  