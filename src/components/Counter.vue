
<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count  }}</h2>
    <h2>Computed: {{ CountComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandonInt" :disabled="isLoading">Random</button>

    <h1>MapState</h1>
    <h2>MapState Count: {{ count }}</h2>
    <h2>MapState lastMutation: {{ lastMutation }}</h2>

    <hr>
    <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

    computed: {
        CountComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count','lastMutation','isLoading']),
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods: {
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy',5)
            // Este metodo puede ser llamado desde un metodo padre, asi el mapActions se ejecutara normal
            // this.incrementRandomInt
        },
        // incrementRandomInt(){
        //     this.$store.dispatch('incrementRandonInt')
        // },
        ...mapActions('counter',['incrementRandonInt']),
        ...mapActions('counter',{
            // Al desestructurar los modulos del store para llegar al archivo se llama al store especifico
            // Lo puedo nombrar como sea para llamar a la accion que quiero
            incrementRandomInt: 'incrementRandonInt'
        })
    }

}
</script>
