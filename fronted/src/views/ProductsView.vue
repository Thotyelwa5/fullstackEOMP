<template>
 <div>
  <div>

  </div>
  <CardComp :products="products"/>
 </div>

    
 
</template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
  components: { CardComp },


  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>


</style>
