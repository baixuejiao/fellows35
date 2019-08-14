<template>
  <div class="slider">
    <!-- <ul class="slider-wrapper"> -->
      <transition-group class="slider-wrapper" name="fade" tag="ul">
        <li class="slider-list" v-for="(item, index) in imgs" :key="index" v-show="tag == index">
          <img :src="item" alt="">
        </li>
      </transition-group>

      <ul class="poiner" v-if="showPointer">
        <li v-for="(item, index) in imgs" :key="index"></li>
      </ul>
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return{
      tag: 0
    }
  },
  props: ['imgs', 'showPointer'],
  created() {
    setInterval(() => {
      this.tag++
      if(this.tag == this.imgs.length) {
        this.tag = 0;
      }
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .slider-wrapper{
    height: 6rem;
    overflow: hidden;
    position: relative;
  }
  .slider-list{
    position: absolute;
    top: 0;
    // float: left;
    // width: 7.5rem;
    // height: 6rem;

    img{
      width: 7.5rem;
      height: 6rem;
    }
  }
  .fade-enter{
    transform: translateX(-100%)
  }
  .fade-enter-to{
    transform: translateX(0)
  }
  .fade-enter-active{
    transition: transform 1s;
  }
  .fade-leave{
    transform: translateX(0)
  }
  .fade-leave-to{
    transform: translateX(100%)
  }
  .fade-leave-active{
    transition: transform 1s ;
  }
</style>
