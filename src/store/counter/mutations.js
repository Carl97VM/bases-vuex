export const increment = (state) => {
    state.count += 1
    state.lastMutation = 'increment'
}
export const incrementBy = (state, val) => {
    state.count += val
    state.lastMutation = 'incrementBy '+val
    state.lastRandomInt = val
}
export const setLoading = ( state, val) => {
    // Manejo del bloqueo de la parte de un componente o de todo siempre y cuando se ejecute la tarea
    state.isLoading = val
    state.lastMutation = 'setLoading '+val
}