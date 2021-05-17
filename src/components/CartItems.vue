<template>
    <div>
        <div class="cart-items">
            <CartItem v-for="item in this.$store.state.cartItems" :key="item.id" :item="item" />
        </div>
        <div class="cart-total">Total: <b>${{ this.$store.state.cartTotalSum }}</b></div>
        <div class="cart-checkout" @click="checkout"><button>Checkout</button></div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import CartItem from "./CartItem";

export default {
    name: 'CartItems',
    props: {
        items: Array,
    },
    components: {
        CartItem,
    },
    methods: {
        ...mapActions(['cartCheckout']),
        checkout() {
            // this.$store.dispatch('cartCheckout');
            this.cartCheckout();
        },
    }
}
</script>
