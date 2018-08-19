import * as mutation from "./mutationTypes";
import { playerBlock } from "@/commonTypes";

import Player from "@/core/player";

//const player = new Player();

export default {
    loadTracks({ commit }, { fileList }) {
        let tracks = [...fileList].filter(f => f.type.includes("audio/"));        
        commit(mutation.SET_TRACKS, { tracks });
        commit(mutation.SET_CURRENT_TRACK, { index: undefined });
    },
    setCurrentTrack({ commit }, { index }) {
        commit(mutation.SET_CURRENT_TRACK, { index });
    },
    togglePlaylist({ commit }) {
        commit(mutation.TOGGLE_BLOCK, { block: playerBlock.playlist });
    },
    toggleEqualizer({ commit }) {
        commit(mutation.TOGGLE_BLOCK, { block: playerBlock.equalizer });
    },
    toggleVisualizer({ commit }) {
        commit(mutation.TOGGLE_BLOCK, { block: playerBlock.visualizer });
    }
};