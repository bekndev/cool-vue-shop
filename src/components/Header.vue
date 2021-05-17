<template>
    <header>
        <router-link to="/" class="logo">Logo</router-link>
        <Nav />
    </header>
</template>

<script>
import Nav from "./Nav";

export default {
    name: 'Header',
    components: {
        Nav,
    }
}
</script>
