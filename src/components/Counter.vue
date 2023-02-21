
<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.count  }}</h2>
    <h2>Computed: {{ CountComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementPlusFive">+5</button>
    <button>Random</button>

    <h1>MapState</h1>
    <h2>MapState Count: {{ count }}</h2>
    <h2>MapState lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {

    computed: {
        CountComputed() {
            return this.$store.state.count
        },
        ...mapState(['count','lastMutation'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods: {
        increment(){
            this.$store.commit('increment')
        },
        incrementPlusFive(){
            this.$store.commit('incrementPlusFive',5)
        }
    }

}
</script>
