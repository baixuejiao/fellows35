<template>
  <div id="app">
    {{msg}}
    <br/>
    <!-- 路由跳转 
        to 跳转到某个页面
    -->
    <router-link to="/home">首页</router-link>
    <br/>
    <router-link :to="{name: 'home', params: {id: '123', name: 'aaa', age: 2}}">首页传参</router-link>
    <br/>
    <router-link to="/details/333/aaa">详情页</router-link>
    <br/>
    <router-link to="/about">测试子路由</router-link>
    <br/>

    <router-link to="/ss">vuex</router-link>

    <br/>

    <button @click="gopage()">进入到详情页</button>

    <button @click="go()">前进</button>


    <button @click="back()">后退</button>

    
    <!-- 占位用的 会把对应组件的内容展示在该位置上 -->
    <transition name="fade">
      <router-view/>
    </transition>

    <tpl :title="msg" @change="changeMsg" :changefun="changeMsg"></tpl>
  </div>
</template>


<script>
  import hello from '@/components/hello.vue'
  export default {
    data() {
      return {
        msg: '放假啦'
      }
    },
    components: {
      tpl: hello
    },
    methods: {
      gopage() {
        this.$router.push('/about')
      },
      go(){
        this.$router.go(2)
      },
      back(){
        this.$router.go(-4)
        // this.$router.back() // this.$router.go(-1)
      },
      changeMsg() {
        this.msg = 'wxbufangjia'
      }
    }
}
</script>


<style lang="scss" scoped>
  .fade-enter{
    transform: translateX(-100%)
  }
  .fade-enter-active{
    transition: transform 1s ease;
  }
  .fade-enter-to, .fade-leave{
    transform: translateX(0)
  }
  .fade-leave-active{
    transition: transform 1s ease;
  }
  .fade-leave-to{
    transform: translateX(100%)
  }

</style>
