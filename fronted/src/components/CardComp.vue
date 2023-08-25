<template>
    <div class="row">
        <div v-for="product in products" :key="product.prodID" class="card col-12 col-lg-4 col-sm-6 p-0" style="background-color: #2c3e50; color:white;">
            <img :src="product.prodUrl" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">
                Quantity: {{ product.quantity }}<br>
                Amount: {{ product.amount }}<br>
                Category: {{ product.Category }}<br>
              </p>
              <router-link class="button" :to="{name: 'product', params: {prodID: product.prodID}}">View More...</router-link>
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

.row{
  justify-content: center;
  align-items: center;

}
.card{
  width:20rem;
  margin:15px;
  height: 35rem;
}
img{
  height: 19rem;
  width:100%;
 
}
.button{
  background-color: #D9D9D9;
  color: black;
  text-decoration: none;
  border-radius: 7px;
  font-weight:bold;

}

/* Media query for screens with a maximum width of 300px */
@media (max-width: 300px) {
  .card {
    width: 100%; /* Make the card width 100% of the screen */
    height: auto; /* Allow the height to adjust according to content */
  }
}
</style>