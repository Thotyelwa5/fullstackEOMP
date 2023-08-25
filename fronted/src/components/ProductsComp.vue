<template>
  <div>
    <SpinnerComp :fetchedProducts="products" />
    <CardComp :fetchedProducts="products" />
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import CardComp from '@/components/CardComp.vue';

export default {
  props: {
    product: Object,
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
  components: {
    SpinnerComp,
    CardComp,
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
