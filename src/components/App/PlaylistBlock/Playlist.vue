<template>
    <div class="playlist">
        <div v-for="(file, index) in tracks"
            :key="index"
            v-text="`${+index + 1}. ${file.name}`"
            :title="file.name"
            class="playlist__item"
            v-bind:class="{'playlist__item--current': index === currentTrackId}"
            @click="setCurrentTrack({index})"
            @dblclick="$emit('play')">
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            tracks: state => state.tracks,
            currentTrackId: state => state.currentTrackId
        })
    },
    methods: {
        ...mapActions([
            "setCurrentTrack"
        ])
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.playlist {
    @include module;
    width: 25 * $size-default;
    
    &__item {
        @include text-overflow-ellipsis;
        white-space: nowrap;
        
        &--current {
          background-color: orange;
          color: gray;
        }
    }
}
</style>