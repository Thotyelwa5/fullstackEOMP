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
export default {
    props: ["products"],

    mounted() {
        console.log("Product comp", this.products);
    },
}
</script>

<style  scoped>
</style>