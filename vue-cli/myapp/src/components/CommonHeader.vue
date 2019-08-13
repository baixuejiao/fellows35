<template>
  <header class="header" :style="{backgroundColor: cur.bgColor}">
    <span class="header-home" @click="goHome">首页</span>
    <!-- <span class="header-home" @click="selectNav({})">首页</span> -->
    <span class="header-title">{{cur.name}}</span>

  </header>
</template>

<script>
export default {
  props: ['cur', 'selectNav'],
  methods: {
    goHome() {
      this.selectNav({
        name: '电影',
        path: '/movie',
        bgColor: '#ff0000'
      })
      this.$router.push('/movie')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: .4rem;
    text-align: center;
    color: #fff;
    background: #ff0000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .header-home{
      position: absolute;
      left: .2rem;
    }
  }
</style>
