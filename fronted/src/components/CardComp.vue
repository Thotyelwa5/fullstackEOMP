<template>
    <div class="row">
        <div v-for="product in products" :key="product.prodID" class="card col-3" style="width: 18rem;">
            <img :src="product.prodUrl" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">
                Quantity: {{ product.quantity }}<br>
                Amount: {{ product.amount }}<br>
                Category: {{ product.Category }}<br>
              </p>
              <router-link :to="{name: 'product', params: {prodID: product.prodID}}">View More</router-link>
            </div>
          </div>
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import CardComp from '@/components/CardComp.vue';
export default {
  components: {
    SpinnerComp,
    CardComp,
  },
    props: ["products"],

    data() {
    return {
      searchQuery: '',        
      selectedCategory: '',   
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    uniqueCategories() {
      // Extract unique categories from products
      return [...new Set(this.products.map(product => product.Category))];
    },
    filteredProducts() {
      // Apply search and filter
      let filtered = this.products;

      if (this.searchQuery) {
        const lowercaseQuery = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product => product.prodName.toLowerCase().includes(lowercaseQuery));
      }

      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.Category === this.selectedCategory);
      }

      return filtered;
    },
  },

    mounted() {
        console.log("Product comp", this.products);
    },
}
</script>

<style  scoped>
</style>