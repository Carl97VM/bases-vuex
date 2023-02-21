import { createStore } from 'vuex'
import getRandomInt from '../helpers/getRandomInt'

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment(state) {
            state.count += 1
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count += val
            state.lastMutation = 'incrementBy '+val
            state.lastRandomInt = val
        },
        setLoading( state, val) {
            // Manejo del bloqueo de la parte de un componente o de todo siempre y cuando se ejecute la tarea
            state.isLoading = val
            state.lastMutation = 'setLoading '+val
        }
    },
    // las acciones son las unicas funciones que pueden ser asincronas
    actions: {
        async incrementRandonInt( {commit} ){

            commit('setLoading',true)

            const randomInt = await getRandomInt()

            commit('incrementBy', randomInt)

            commit('setLoading',false)

        }
    },
     getters:{
        squareCount( state ){
            return state.count * state.count 
        }
     }

})