<template>
    <div class="module visualizer">
        visualizer
    </div>
</template>

<script>
    export default {
        name: "rm-visualizer",
        components: {
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.visualizer {
    @include module;
    width: 25 * $size-default;
}
</style>