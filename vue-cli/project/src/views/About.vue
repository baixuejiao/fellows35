<template>
  <div class="about">
    <h1>测试子路由</h1>
    <p>count:{{$store.state.count}}</p>
    
    <router-link to="/about/a">子路由A</router-link>
    <router-link to="/about/b">子路由B</router-link>
    
    <router-view/>

  </div>
</template>
