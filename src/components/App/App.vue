<template>
    <div>
        <div class="app">
            <div>
                <MainBlock
                    @togglePlaylist="playlistVisible = !playlistVisible"
                    @toggleEqualizer="equalizerVisible = !equalizerVisible"
                    @toggleVisualizer="visualizerVisible = !visualizerVisible">
                </MainBlock>
                <EqualizerBlock v-show="equalizerVisible"></EqualizerBlock>
            </div>
            <PlaylistBlock v-show="playlistVisible"></PlaylistBlock>
            <VisualizerBlock v-show="visualizerVisible"></VisualizerBlock>
        </div>
    </div>
</template>

<script>
import MainBlock from "./MainBlock";
import EqualizerBlock from "./EqualizerBlock";
import PlaylistBlock from "./PlaylistBlock";
import VisualizerBlock from "./VisualizerBlock";
import { playerBlock } from "@/commonTypes";

import { mapState } from "vuex";

export default {
    components: {
        MainBlock, EqualizerBlock, PlaylistBlock, VisualizerBlock
    },
    data() {
        return {
        };        
    },
    computed: {
        ...mapState({
            blocksVisibility: state => state.blocksVisibility
        }),
        playlistVisible() { return this.blocksVisibility & playerBlock.playlist },
        equalizerVisible() { return this.blocksVisibility & playerBlock.equalizer },
        visualizerVisible() { return this.blocksVisibility & playerBlock.visualizer }
    },
    methods: {        
    }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.app {
    @include flex-row($justify: flex-start, $valign: flex-start);
    margin: 0 auto;
    background-color: $color-neutral-2;
    color: $color-text-panel;
    padding: $padding-section-default;
}
</style>