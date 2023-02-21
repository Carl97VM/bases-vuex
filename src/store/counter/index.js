

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    state: state,
    mutations: mutations,
    // las acciones son las unicas funciones que pueden ser asincronas
    actions: actions,
    getters: getters,
}
export default counterStore