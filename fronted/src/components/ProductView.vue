<template>
    <div v-if="product" class="employee-details">
      <div class="img-container">
        <img
          :src="product.prodUrl"
          :alt="product.prodName"
          class="top-picks-img"
        />
      </div>
  
      <p>{{ product.prodName }}<br />R{{ product.amount }}</p>
      <p>{{ product.Category }}</p>
    </div>
    <div v-else>Error</div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.product;
      }
    },

    mounted() {
      const prodID = this.$route.params.prodID;
      this.$store.dispatch('fetchProduct', prodID);
    },
  };
  </script>

<style scoped>

img{
  width:50%;
}
</style>