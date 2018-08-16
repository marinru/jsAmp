<template>
    <div class="module main-block">
        <MainDisplay />
        <MainControls />
    </div>
</template>

<script>
    import MainDisplay from "./Display";
    import MainControls from "./Controls";

    export default {
        components: {
            MainDisplay, MainControls
        }
    };
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.main-block {
    @include module;
    width: 25 * $size-default;
}
</style>