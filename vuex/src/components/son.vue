<template>
    <div>
        <span>我是子组件</span>--{{msg}} <br>
        ---我是全局状态：{{getNum}}
        <button @click="sendMsgToFather">点我向父组件传递数据</button>
        <button @click="sonadd">子组件--改变状态</button>
        <button @click="sonaction">子组件--改变状态(action)</button>
    </div>    
</template>

<script>
export default {
    name: 'son',
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            toFatherMsg: '我是你的son'
        }
    },
    methods: {
        sendMsgToFather: function () {
            this.$emit('handle', this.toFatherMsg)
        },
        sonadd() {
            this.$store.commit('increase')
        },
        sonaction() {
            this.$store.dispatch('reduceAction')
        }
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


