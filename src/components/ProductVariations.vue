<template>
    <div>
        <ProductVariation v-for="variation in variations" :key="variation" :variation="variation" :changeVariation="changeVariation" :currentVariation="currentVariation" />
    </div>
</template>

<script>
import ProductVariation from "./ProductVariation";

export default {
    name: 'ProductVariations',
    props: {
        variations: Array,
        changeVariation: Function,
        currentVariation: Object,
    },
    components: {
        ProductVariation,
    }
}
</script>
