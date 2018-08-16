<template>
    <div class="controls">
        <TrackProgress />
        <div class="row--spaced-between button-row">
            <ButtonsPanel>
                <TrackButton @click="play">
                    <AwesomeIcon name="play" />
                </TrackButton>
                <TrackButton @click="pause">
                    <AwesomeIcon name="pause" />
                </TrackButton>
                <TrackButton @click="stop">
                    <AwesomeIcon name="stop" />
                </TrackButton>
                <TrackButton @click="stepBackward">
                    <AwesomeIcon name="step-backward" />
                </TrackButton>
                <TrackButton @click="stepForward">
                    <AwesomeIcon name="step-forward" />
                </TrackButton>
                <TrackButton @click="eject">
                    <label class="files-selector-placeholder">
                        <AwesomeIcon name="eject" />
                        <input
                            class="files-selector"
                            type="file"
                            multiple
                            accept="audio/*"
                            @change="loadFiles" />
                    </label>
                </TrackButton>
            </ButtonsPanel>
            <ButtonsPanel>
                <ModuleToggleButton @click="togglePlaylist">
                    <AwesomeIcon name="list" />
                </ModuleToggleButton>
                <ModuleToggleButton @click="toggleEqualizer">
                    <AwesomeIcon name="sliders-h" />
                </ModuleToggleButton>
                <ModuleToggleButton @click="toggleVisualizer">
                    <AwesomeIcon name="brands/ravelry" />
                </ModuleToggleButton>
            </ButtonsPanel>
        </div>
    </div>
</template>

<script>
import TrackProgress from "./TrackProgress";
import ButtonsPanel from "./ButtonsPanel";
import TrackButton from "./TrackButton";
import ModuleToggleButton from "./ModuleToggleButton";

import { mapActions } from "vuex";

export default {
    name: "rm-controls",
    components: {
        TrackProgress,
        ButtonsPanel,
        TrackButton,
        ModuleToggleButton
    },
    methods: {
        ...mapActions(["loadTracks", "togglePlaylist", "toggleEqualizer", "toggleVisualizer"]),
        play() {
        },
        pause() {
        },
        stop() {
        },
        stepBackward() {
        },
        stepForward() {
        },
        eject() {
        },
        loadFiles(e) {
            this.loadTracks({ fileList: e.target.files });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/guide/_index.scss";

.button-row {
    padding: $padding-control-default;
}

.files-selector {
    width: .1px;
    height: 0;
    opacity: 0;
    z-index: -1;
    overflow: hidden;
    position: absolute;
}
</style>