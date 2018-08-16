<template>
    <div class="display">
        display
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.display {
    height: $size-default * 5;
    padding: $padding-control-default;
    white-space: nowrap;
    color: $color-text-display;
    background-color: $color-display;
    border-radius: $border-radius-default;
    box-shadow:
        inset 0 ($size-default / 6) ($size-default / 4) $color-shadow,
        inset 0 (-$size-default / 8) ($size-default / 4) $color-shadow-2;
}
</style>