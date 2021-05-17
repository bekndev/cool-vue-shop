<template>
  <div class="main">
    <h1>Cart</h1>
    <!-- <CartItems v-show="this.$store.state.cartTotalCount" />
    <p v-show="!this.$store.state.cartTotalCount">Cart is empty</p> -->
    <CartItems v-show="cartTotalCount" />
    <p v-show="!cartTotalCount">Cart is empty</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItems from "../components/CartItems";

export default {
  name: 'Cart',
  components: {
    CartItems,
  },
  computed: {
      ...mapGetters(['cartTotalCount']),
  },
}
</script>
