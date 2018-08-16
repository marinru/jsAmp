import * as mutation from "../mutationTypes";
import { playerBlock } from "@/commonTypes";
import actions from "../actions";

describe("actions", () => {
    describe("block toggling", () => {
        let committedMutation;
        let toggledBlock;
        const mockCommit = (mutation, { block }) => {
            committedMutation = mutation;
            toggledBlock = block;            
        };

        beforeEach(() => {
            committedMutation = undefined;
            toggledBlock = undefined;
        });

        it("commits playlist toggle correctly", () => {    
            actions.togglePlaylist({ commit: mockCommit });
            expect(committedMutation).toBe(mutation.TOGGLE_BLOCK);
            expect(toggledBlock).toBe(playerBlock.playlist);
        });
    
        it("commits equalizer toggle correctly", () => {
            actions.toggleEqualizer({ commit: mockCommit });
            expect(committedMutation).toBe(mutation.TOGGLE_BLOCK);
            expect(toggledBlock).toBe(playerBlock.equalizer);
        });
    
        it("commits visualizer toggle correctly", () => {
            actions.toggleVisualizer({ commit: mockCommit });
            expect(committedMutation).toBe(mutation.TOGGLE_BLOCK);
            expect(toggledBlock).toBe(playerBlock.visualizer);
        });
    });
});