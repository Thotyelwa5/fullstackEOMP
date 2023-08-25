<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/T1SvqWzB/Screenshot-2023-08-21-090856.png" alt="logo"  width="50" height="50" border-radius="50"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav m-auto">
                  <router-link class="nav-link" to="/">HOME</router-link>
                  <router-link class="nav-link" to="/about">ABOUT</router-link>
                  <router-link class="nav-link" to="/products">PRODUCTS</router-link>
                  <router-link class="nav-link" to="/contact">CONTACT</router-link>
                  <router-link class="nav-link" to="/admin">ADMIN</router-link>
                </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    background-color: #F10086 !important;
    overflow: hidden;
    
    }
    .navbar-nav {
   
    text-align: center;
   
    text-decoration: none;
    font-size: 20px;
    font-weight:600;
    color: white !important;
    padding-right: 10px;
    }
    .nav-link:hover{
       background-color: #D9D9D9;
        border-radius: 15px; }

      /*  .navbar-brand{
            width: 5px;
            height: 5px;
            border-radius:5px;
        }*/
</style>