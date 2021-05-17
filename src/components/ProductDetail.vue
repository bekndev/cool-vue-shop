<template>
    <div class="product-card">
        <div class="product-title">{{ title }}</div>
        <div class="product-text">{{ product.body }}</div>
        <div class="product-variations">
            <ProductVariations v-show="variations" :variations="variations" :changeVariation="changeVariation" :currentVariation="currentVariation" />
        </div>
        <div class="product-price">
            <div>${{ price }}</div>
            <button v-show="alreadyAdded" disabled>Already in Cart</button>
            <button v-show="!alreadyAdded" class="add-to-cart" @click="onClick">Buy</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductVariations from "./ProductVariations";

export default {
    name: 'ProductDetail',
    props: {
        product: Object
    },
    components: {
        ProductVariations,
    },
    data() {
        let title = this.product.title;
        let variations = [];
        let price;
        let currentVariation = {};
        if(this.product.price) price = this.product.price;
        if(this.product.variations) {
            if(this.product.variations.colors) {
                title = `${this.product.title} (color: ${this.product.variations.colors[0].color})`;
                price = this.product.variations.colors[0].price;
                currentVariation = this.product.variations.colors[0];
                variations = this.product.variations.colors;
            }
            if(this.product.variations.sizes) {
                title = `${this.product.title} (size: ${this.product.variations.sizes[0].size})`;
                price = this.product.variations.sizes[0].price;
                currentVariation = this.product.variations.sizes[0];
                variations = this.product.variations.sizes;
            }
        }
        return {
            price,
            title,
            alreadyAdded: this.$store.state.cartItems.find(item => item.id === this.product.id),
            variations,
            currentVariation,
        }
    },
    methods: {
        ...mapActions(['addToCart', 'cartTotalCount', 'cartTotalSum']),
        onClick() {
            let addedProduct = {id: this.product.id, title: this.title, price: this.price, count: 1};
            // this.$store.dispatch('addToCart', addedProduct);
            // this.$store.dispatch('cartTotalCount');
            // this.$store.dispatch('cartTotalSum');
            this.addToCart(addedProduct);
            this.cartTotalCount();
            this.cartTotalSum();
            this.alreadyAdded = true;
        },
        changeVariation(variation) {
            if(variation.color) {
                this.title = `${this.product.title} (color: ${variation.color})`;
                this.price = variation.price;
            }
            if(variation.size) {
                this.title = `${this.product.title} (size: ${variation.size})`;
                this.price = variation.price;
            }
            this.currentVariation = variation;
        },
    }
}
</script>
