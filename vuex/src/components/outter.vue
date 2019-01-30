<template>
    <div>
        我是outter拿到的全局状态：{{getNum}} <br>
        <button @click="outteradd">outter组件--改变状态</button>
        <button @click="outteraction">outter组件--改变状态(action)</button>
    </div>
</template>

<script>
export default {
    name: 'outter',
    computed: {
        getNum: function () {
            // return this.$store.state.num
            return this.$store.getters.getNum
        }
    },
    methods: {
        outteradd() {
            this.$store.commit('increase')
        },
        outteraction() {
            this.$store.dispatch('reduceAction')
        }
    }
}
</script>

<style scoped>

</style>


