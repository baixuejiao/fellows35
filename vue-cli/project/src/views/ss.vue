<template>
  <!-- 
      vuex
      vue-cli => store.js

      state: 属性

      getters: 计算方法 可以去对state下的属性进行重新的封装 然后返回给组件使用

      mutations: 同步的操作 可以修改state属性的值

      actions: 异步的操作 进行异步的操作 最后调用mutations里的方法去修改state值

   -->





  <div class="about">
    <!-- $store.state 获取公共的属性 -->
    <p>count: {{$store.state.count}}</p>
    <p>count: {{$store.state.title}}</p>

    <p>{{getCount}}</p>

    <p>{{count}}</p>

    <!-- $store.commit('') 调用 mutation下的方法第一个参数是方法名 之后的参数就是方法的实参-->
    <button @click="$store.commit('add', 4)">add</button>

    <!-- add -->
    <button @click="add(4)">add2</button>

    <button @click="addCount">add</button>

    <button @click="addCount1111">add--actions</button>

    <p>sum: {{sum}}</p>
  </div>
</template>

<script>
  // es6里的解构
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        msg: '1234567'
      }
    },
    methods: {
      // // let obj = {..aaa, bb}
      ...mapMutations(['add']), // 同步的方法
      ...mapActions(['addCount1111']), // 异步的方法
      addCount(){
        setTimeout(()=> {
          console.log(1234567)
        },1000)
        this.add()

        this.addCount1111()

      }
    },
    components: {
    },
    // 计算属性
    computed: {
      ...mapState(['count', 'title']),
      ...mapGetters(['sum']),
      getCount(){
        return this.count + 10
      },
      title() {
        return this.title;
      }
    },
//     computed: {
//       count1(){
//         return this.$store.state.count;
//       },
//       title() {
//         return this.$store.state.title;
//       }
//     },
//     computed: mapState({
//        count:state=>state.count
//     }),


    mounted(){

    }
}
</script>

<style lang="scss" scoped>

</style>
