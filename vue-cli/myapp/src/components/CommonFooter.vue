<template>
  <!-- <ul class="footer" :style="{backgroundColor: curColor}"> -->
  <ul class="footer" :style="{backgroundColor: cur.bgColor}">
    <!-- $emit('接收的方法名'，参数....) -->
    <li class="footer-list" v-for="(item, index) in navList" :key="index" @click="$emit('choose',item)">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
    <!-- <li class="footer-list" v-for="(item, index) in menuList" :key="index" @click="choose(item)">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      curColor: '#ff0000',
      menuList: [
        {
          name: '电影',
          path: '/movie',
          bgColor: '#ff0000'
        },
        {
          name: '音乐',
          path: '/music',
          bgColor: '#ff00ff'
        },
        {
          name: '书籍',
          path: '/book',
          bgColor: '#ff33ff'
        },
        {
          name: '图片',
          path: '/photo',
          bgColor: '#ff8907'
        }
      ]
    }
  },
  props: ['navList', 'cur'], // cur{name:'', path: '', bgColor:{}}
  methods: {
    choose(_item){
      console.log(_item)
      this.curColor = _item.bgColor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1rem;
    font-size: .4rem;
    line-height: 1rem;
    color: #333;
    background: #ff0000;
    position: fixed;
    bottom: 0;
    left: 0;

    .footer-list{
      a{
        color: #333;
      }
      .router-link-active{
        color: #fff;
      }
    }
  }
</style>
