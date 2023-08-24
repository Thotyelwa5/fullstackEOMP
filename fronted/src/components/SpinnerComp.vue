<template>
  <div>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      
      <div v-for="product in products" :key="product.prodID" class="card" style="width: 18rem;">
        <img :src="product.prodUrl" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">
            Quantity: {{ product.quantity }}<br>
            Amount: {{ product.amount }}<br>
            Category: {{ product.Category }}<br>
          </p>
          <router-link :to="{name: 'product', params: {prodID: product.prodID}}">Go somewhere</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.products === null;
    }
  }
};
</script>

<style scoped>

</style>
