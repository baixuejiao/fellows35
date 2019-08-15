<template>
  <div class="cover">
    <v-touch v-on:swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
      <img v-if="photoarr.length>0" :src="photoarr[index].src" alt="">
    </v-touch>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Vue  from 'vue'
import VueTouch from 'vue-touch' 
Vue.use(VueTouch, {name: 'v-touch'})

export default {
  data() {
    return{
      photoList: [],
      index: this.$route.params.index
    }
  },
  computed: {
    photoarr() {
      return this.$store.state.photoList
    }
  },
  methods: {
    onSwipeLeft() {
      // console.log(this.index)
      if(this.index == this.photoList.length-1) {
        return
      }
      this.index++
    },
    onSwipeRight(){
      if(this.index == 0) {
        return
      }
      this.index--
    }
  },
  created() {
    // axios.get('/data/photodata.json')
    //   .then(res => {
    //     console.log(res)
    //     if(res.status *1 === 200) {
    //       // this.photoList = res.data.photoData
    //       this.photoList = res.data.photoData
    //     }
    //   })
    //   .catch(err => {

    //   })
  }
}
</script>

<style lang="scss" scoped>
  .cover{
    width: 100%;
    height: 100%;
    background: #666;
    position: absolute;
    top: 0rem;
    left: 0;
    right: 0;
    bottom: 0rem;
    img{
      width: 100%;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      left: 0;
    }
  }
</style>
