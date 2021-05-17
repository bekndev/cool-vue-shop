<template>
  <div class="container">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapActions } from 'vuex';

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    // this.$store.dispatch('getCategories');
    this.getCategories();
    // this.$store.dispatch('getProducts');
    this.getProducts();
  },
  methods: {
    ...mapActions(['getCategories','getProducts']),
  },
}
</script>
