<template>
  <div id="app">
    <header id="header">
      <p id="header-score">{{score}}</p>
      <section id="header-content"></section>
    </header>

    <div id="container">
      <h4 id="title">积分明细</h4>

      <ul id="menu">
        <li :class="['menu-list', item.active?'active':'']" v-for="(item, index) in tablist" :key="index" @click="chooseTab(item)">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>

      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
  data(){
    return{
      score: 1000,
      tablist: [
        {
          name: '全部',
          path: '/',
          active: true
        },
        {
          name: '收入',
          path: '/income',
          active: false
        },
        {
          name: '支出',
          path: '/pay',
          active: false
        }
      ]
    }
  },
  methods: {
    chooseTab(_data){
      this.tablist.forEach(item => {
        item.active = false;
      })
      _data.active = true;
    }
  }
}

</script>

<style lang="scss">
  #header{
    width: 100%;
    height: 4.7rem;
    background: url('./assets/imgs/bg.jpeg') no-repeat top;
    background-size: contain;

    #header-score{
      padding-top: .66rem;
      font-size: .48rem;
      text-align: center;
      color: #fff;

      &:after{
        content: '积分';
        margin-left: .1rem;
        font-size: .24rem;
        color: #fff;
      }
    }
    #header-content{
      width: 7.1rem;
      height: 2.8rem;
      margin: .67rem auto 0;
      border-radius: 5px;
      background: #fff;
    }
  }
  #container{
    width: 7.1rem;
    margin: .2rem auto 0;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;

    #title{
      margin: .3rem auto;
    }
    #menu{
      display: flex;
    }
    .menu-list{
      padding-bottom: .35rem;
      flex-grow: 1;
      text-align: center;
      position: relative;

      
    }
    .active{
      &:after{
        content: '';
        display: block;
        width: 1.2rem;
        margin-left: -.6rem;
        border-bottom: 1px solid #EF1C00;
        position: absolute;
        bottom: 0;
        left: 50%;
      }
    }
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .fade-enter-to,.fade-leave{
    opacity: 1;
  }
  .fade-enter-active{
    transition: opacity 1s ease;
  }
  
</style>
