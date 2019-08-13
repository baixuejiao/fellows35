<template>
  <div class="home">
    首页
    <!-- $route.params 获取路由上的参数 params是一个object -->
    <p>{{$route.params.id}}</p>
    <p>{{$route.params.name}}</p>
    <p>{{$route.params.age}}</p>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
