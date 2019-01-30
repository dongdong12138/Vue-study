<template>
    <div>
        <h2>我是父组件</h2>---{{formSonMsg}} <br>
        ---我是全局状态：{{getNum}} <br>
        <button @click="parentadd">父组件--改变状态</button>
        <button @click="parentaction">父组件--改变状态(action)</button>
        <hr>
        <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    </div>    
</template>

<script>
import son from './son'
export default {
    name: 'parent',
    data: function () {
        return {
            toSonMsg: '我是你老爸',
            formSonMsg: 'xxxxxxxxxx'
        }
    },
    methods: {
        getMsgFromSon: function (value) {
            this.formSonMsg = value
        },
        parentadd() {
            this.$store.commit('increase')
        },
        parentaction() {
            this.$store.dispatch('reduceAction')
        }
    },
    components: {
        son
    },
    computed: {
        getNum: function () {
            // return this.$store.state.num
            return this.$store.getters.getNum
        }
    }
}
</script>

<style scoped>

</style>


