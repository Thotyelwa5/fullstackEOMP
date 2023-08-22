<template>
    <div>
        <nav class="navbar">
            <router-link to="/" class="nav">Home</router-link>
            <router-link to="/about" class="nav">About</router-link>
            <router-link to="/products" class="nav">Products</router-link>
            <router-link to="/contact-form" class="nav">Contact</router-link>
            <router-link to="/admin" class="nav">Admin</router-link>
         </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    background-color: #F10086;
    overflow: hidden;
    }
    .nav {
    float: left;
    text-align: center;
    padding: 12px 10px;
    text-decoration: none;
    font-size: 17px;
    color: white;
    }
    .nav:hover{
       background-color: #D9D9D9;
        border-radius: 10px; }
</style>