<template>
    <button @click="() => changeVariation(variation)" :class="{active : variation === currentVariation}">
        {{ variation.color ? variation.color : '' }}
        {{ variation.size ? variation.size : '' }}
    </button>
</template>

<script>
export default {
    name: 'ProductVariation',
    props: {
        variation: Object,
        changeVariation: Function,
        currentVariation: Object,
    },
}
</script>
