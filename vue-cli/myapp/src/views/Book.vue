<template>
  <div class="book">
    <!-- <swipe class="my-swipe">
      <swipe-item v-for="(item, index) in imgs" :key="index" class="slide1">
        <img :src="item" alt="">
      </swipe-item>
    </swipe> -->
    <slider :imgs="imgs" showPointer="false"></slider>
  </div>
</template>

<script>
// @ is an alias to /src
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';

import slider from '@/components/Slider.vue'

export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/lpic/s24468373.jpg",
        "https://img3.doubanio.com/lpic/s27102925.jpg",
        "https://img3.doubanio.com/lpic/s6989253.jpg"
      ]
    }
  },
  components: {
    Swipe,
    SwipeItem,
    slider
  }
}
</script>

<style lang="scss" scoped>
  .book{
    width: 100%;
    height: 6rem;

    img{
      width: 100%;
    }
  }
</style>
