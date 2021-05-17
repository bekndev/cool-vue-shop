<template>
  <div class="main">
    <h1>Home</h1>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList,
  }
}
</script>
