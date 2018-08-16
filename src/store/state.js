import { playerState, playerBlock } from "@/commonTypes";

export default {
    tracks: [],
    currentTrackId: undefined,
    playerState: playerState.stopped,
    blocksVisibility: playerBlock.main | playerBlock.playlist
};