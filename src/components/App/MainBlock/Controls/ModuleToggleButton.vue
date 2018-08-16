<template>
    <div class="module-toggle-button" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "rm-module-toggle-button",
        components: {
            
        }
    };
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.module-toggle-button {
    width: 1.7 * $size-default;
    height: 1.7 * $size-default;
    border-radius: 1.7 * $size-default;
    @include flex-row($justify: center, $valign: center);
    margin-left: .3 * $size-default + $margin-control-default;
    box-shadow:
        inset 0 0 2px gray,
        0 2px 3px gray - #333;
    transition: box-shadow .2s;
    background-color: $color-shadow + #555;
    color: $color-text-display;
    
    &:first-child {
        margin-left: .3 * $size-default;
    }
    
    &:last-child {
        margin-right: .3 * $size-default;
    }
      
    &:active {
        box-shadow: inset 0 0 2px gray;
        transition: box-shadow .2s;
    }
}
</style>