<template>
    <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://i.postimg.cc/VNYG4tbd/812000306119.webp" class="d-block " alt="pic1">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/L6mgmqs3/0019396824539-A.webp" class="d-block " alt="pic2">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/SNs0rwCW/s-l1600-1.jpg" class="d-block " alt="pic3">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        <h2>FEATURED PRODUCTS</h2>
        <div class="flex-container">
            <div class="card p-2" style="width: 16rem;background-color: #2c3e50;">
                <img src="https://i.postimg.cc/rmSrgGtq/s-l1600.jpg" class="card-img-top" alt="card3">
                <div class="card-body">
                  <h5 class="card-title" style="color:white">Card title</h5>
                  
                  
                </div>
              </div>
    
            <div class="card p-2" style="width: 16rem; background-color: #2c3e50;">
                <img src="https://i.postimg.cc/t41tbHQm/s-l1200.webp" class="card-img-top" alt="card">
                <div class="card-body">
                  <h5 class="card-title" style="color:white">Card title</h5>
                 
                  
                </div>
              </div>
    
              <div class="card p-2" style="width: 16rem;background-color: #2c3e50;">
                <img src="https://i.postimg.cc/0jwpgg31/Stone-Lain-Coupe-Stoneware-Dinnerware-Set.webp" class="card-img-top" alt="card2">
                <div class="card-body" style="color:white">
                  <h5 class="card-title">Card title</h5>
                 
                  
                </div>
              </div>
    
        </div>
      
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.flex-container {
    display:flex;
}
 
/* Center the image horizontally */
.carousel-item img {
    margin:  auto;
  }
  
  /* Center the image vertically (optional) */
  .carousel-item {
    justify-content: center;
    align-items: center;
    min-height: 60vh; /* Adjust as needed */
  }


</style>