<template>
  <div class="about">
    <h1>详情页</h1>
    <p>count:{{$store.state.count}}</p>

    <p>{{$route.params.userId}}</p>
    <p>{{$route.params.name}}</p>
  </div>
</template>