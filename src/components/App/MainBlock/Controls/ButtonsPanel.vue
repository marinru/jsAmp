<template>
    <div class="buttons-panel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "rm-buttons-panel",
        components: {
            
        }
    };
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.buttons-panel {
    @include flex-row;
    background-color: $color-buttons-panel;
    padding: $padding-control-default;
    height: 2 * $size-default;
    border-radius: 2 * $size-default;
}
</style>