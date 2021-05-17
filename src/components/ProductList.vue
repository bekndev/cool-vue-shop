<template>
    <ProductFilter />
    <div class="product-list">
        <!-- <ProductDetail v-for="product in $store.state.products" :key="product.id" :product="product" /> -->
        <ProductDetail v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductFilter from "./ProductFilter";
import ProductDetail from "./ProductDetail";

export default {
    name: 'ProductList',
    components: {
      ProductFilter,
      ProductDetail,
    },
    computed: {
      ...mapGetters(['products']),
    }
}
</script>
