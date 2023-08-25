<template>
  <div>
    <input v-model="searchQuery" placeholder="Search products" />
    <select v-model="selectedCategory">
      <option value="">All categories</option>
      <option v-for="category in uniqueCategories" :value="category" :key="category">{{ category }}</option>
    </select>
     <SpinnerComp/>
     <CardComp :products="products"/>
   </div>
  
 </template>
 
 <script>
 import SpinnerComp from '@/components/SpinnerComp.vue';
 import CardComp from '@/components/CardComp.vue'
 export default {
   props: {
     product: Object
   },
   data() {
     return {
       selectedProduct: null,
     };
   },
   watch: {
     product: {
       immediate: true,
       handler(newVal) {
         this.selectedProduct = newVal;
       },
     },
   },
   components: {SpinnerComp ,CardComp,},
   props: {
     products: Array,
   },
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