<template>
    <div class="track-progress">
        <input type="range" class="progressbar" value="0" />
    </div>
</template>

<script>
    export default {
        name: "rm-track-progress",
        components: {
            
        }
    };
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.track-progress {
    text-align: center;
    padding: $padding-control-default 0;
}

.progressbar {
    width: 95%;
    height: 5px;
    -webkit-appearance: none;
    background-color: orange;    
    border-radius: 5px;
    
    &::-webkit-slider-thumb {
      width: 25px;
      height: 10px;
      -webkit-appearance: none;
      background-color: lightgray;
      border-radius: 5px;
      box-shadow:
        inset 0 -1px 4px black,
        inset 0 2px 3px white;
    }
}
</style>