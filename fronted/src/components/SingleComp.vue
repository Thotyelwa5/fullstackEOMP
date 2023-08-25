<template>
    <div>
      <h2>Product Details</h2>
      <div v-if="product">
        <img :src="product.prodUrl" alt="">
        <h3>{{ product.prodName }}</h3>
        <h4>{{ product.amount }}</h4>
        <p>Quantity: {{ product.quantity }}</p>
        <p>Category: {{ product.Category }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.product;
      },
    },

    mounted() {
    const prodID = this.$route.params.prodID;
    this.$store.dispatch("fetchProduct", prodID);
  },
  };
  </script>