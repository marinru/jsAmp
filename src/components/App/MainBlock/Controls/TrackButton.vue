<template>
    <div class="track-button-bed">
        <div class="track-button" @click="$emit('click')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rm-track-button",
        components: {
            
        }
    };
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.track-button-bed {
    width: 2 * $size-default;
    height: 2 * $size-default;
    border-radius: 2 * $size-default;
    background-color: $color-shadow;
    margin-left: $margin-control-default;
    box-shadow:
        inset 0 ($size-default / 6) ($size-default / 6) ($color-shadow - #555);
    @include flex-row($justify: center, $valign: center);
    
    &:first-child {
        margin-left: 0;
    }
}

.track-button {
    width: 1.5 * $size-default;
    height: 1.5 * $size-default;
    border-radius: 1.5 * $size-default;
    @include flex-row($justify: center, $valign: center);
    background-image:
        linear-gradient(to top, orange - #577 0%, orange 50%, white 100%);
    box-shadow: 0 2px 3px gray - #555;
    transition: box-shadow .5s;
    color: $color-text-display;
      
    &:active {
        box-shadow: none;
        transition: box-shadow .2s;
    }
    
    &--disabled {
        color: $color-text-display + #555;
    }
}
</style>