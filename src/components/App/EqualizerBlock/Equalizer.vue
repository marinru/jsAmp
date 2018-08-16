<template>
    <div class="module equalizer">
        equalizer
    </div>
</template>

<script>
    export default {
        name: "rm-equalizer",
        components: {
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.equalizer {
    @include module;
    width: 25 * $size-default;
}
</style>