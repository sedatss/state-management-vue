import {createStore} from 'vuex'

export interface State {
    board: string[]
}

export default createStore({
    state: () => ({
        board: [
            'blank_spot.png', 'blank_spot.png', 'blank_spot.png',
            'blank_spot.png', 'building_spot.png', 'blank_spot.png',
            'blank_spot.png', 'blank_spot.png', 'blank_spot.png',
        ]
    }),
    getters: {
        getBoard: (state) => state.board
    },
    mutations: {
        setTile(state, payload: { index: number; value: string }) {
            state.board[payload.index] = payload.value
        }
    },
    actions: {},
    modules: {}
})
