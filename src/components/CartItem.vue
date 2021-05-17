<template>
    <div class="cart-item">
        <div class="cart-item-title">{{ item.title }}</div>
        <div class="cart-item-count"><i class="minus" @click="decrement">-</i>{{ item.count }}<i class="plus" @click="increment">+</i></div>
        <div class="cart-item-price">${{ item.price }}</div>
        <div class="cart-item-remove"><button @click="removeItem">x</button></div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'CartItem',
    props: {
        item: Object,
    },
    methods: {
        ...mapActions(['updateCartItem', 'removeFromCart']),
        decrement() {
            this.item.count--;
            this.changeItemCount();
        },
        increment() {
            this.item.count++;
            this.changeItemCount();
        },
        changeItemCount() {
            this.item.count = this.item.count < 1 ? 1: this.item.count;
            // this.$store.dispatch('updateCartItem');
            this.updateCartItem();
        },
        removeItem() {
            // this.$store.dispatch('removeFromCart', this.item.id);
            this.removeFromCart(this.item.id);
        },
    }
}
</script>
