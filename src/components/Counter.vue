
<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.count  }}</h2>
    <h2>Computed: {{ CountComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

    <h1>MapState</h1>
    <h2>MapState Count: {{ count }}</h2>
    <h2>MapState lastMutation: {{ lastMutation }}</h2>

    <hr>
    <h2>Direct Getter: {{ $store.getters.squareCount }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {

    computed: {
        CountComputed() {
            return this.$store.state.count
        },
        ...mapState(['count','lastMutation','isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods: {
        increment(){
            this.$store.commit('increment')
        },
        incrementBy(){
            this.$store.commit('incrementBy',5)
            // Este metodo puede ser llamado desde un metodo padre, asi el mapActions se ejecutara normal
            // this.incrementRandomInt
        },
        incrementRandomInt(){
            this.$store.dispatch('incrementRandonInt')
        },
        // ...mapActions(),
        ...mapActions({
            // Lo puedo nombrar como sea para llamar a la accion que quiero
            incrementRandomInt: 'incrementRandonInt'
        })
    }

}
</script>
