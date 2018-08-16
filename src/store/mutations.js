import * as mutation from "./mutationTypes";

export default {
    [mutation.SET_TRACKS](state, { tracks }) {
        state.tracks = tracks;
    },
    [mutation.SET_CURRENT_TRACK](state, { index }) {
        state.currentTrackId = index;
    },
    [mutation.TOGGLE_BLOCK](state, { block }) {
        state.blocksVisibility ^= block;
    }
};