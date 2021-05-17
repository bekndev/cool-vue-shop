<template>
    <div class="filter-block">
        Filter: <button @click="() => filterByCategory('all')" :class="{active : currentCategory === 'all'}">All</button>
        <!-- <button v-for="category in $store.state.categories" :key="category.id" @click="() => filterByCategory(category.name)">{{ category.name }}</button> -->
        <button v-for="category in categories" :key="category.id" @click="() => filterByCategory(category.name)" :class="{active : currentCategory === category.name}">{{ category.name }}</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'ProductFilter',
    computed: {
      ...mapGetters(['categories', 'currentCategory']),
    },
    methods: {
      ...mapActions(['getFilteredProducts', 'setCurrentCategory']),
      filterByCategory(category) {
        // this.$store.dispatch('getFilteredProducts', category);
        this.getFilteredProducts(category);
        this.setCurrentCategory(category);
      }
    }
}
</script>
