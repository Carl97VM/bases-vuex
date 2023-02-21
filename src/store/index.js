import { createStore } from 'vuex'

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none'
    },
    mutations: {
        increment(state) {
            state.count += 1
            state.lastMutation = 'increment'
        },
        incrementPlusFive(state, val) {
            state.count += val
            state.lastMutation = 'incrementPlusFive'
        }
    }

})