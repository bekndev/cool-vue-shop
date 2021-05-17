<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <!-- <li><router-link to="/cart">Cart <span className="badge" v-show="this.$store.state.cartTotalCount">{{ this.$store.state.cartTotalCount }}</span></router-link></li> -->
            <li><router-link to="/cart">Cart <span className="badge" v-show="cartTotalCount">{{ cartTotalCount }}</span></router-link></li>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Nav',
    computed: {
        ...mapGetters(['cartTotalCount']),
    },
}
</script>
