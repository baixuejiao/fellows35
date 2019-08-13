<template>
  <div class="music">
    <img v-for="(item, index) in musiclist" :key="index" :src="item.bg" alt="" @click="goList">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data() {
    return {
      musiclist: []
    }
  },
  components: {
   
  },
  methods: {
    goList() {
      this.$router.push('/musiclist')
    }
  },
  created() {
    axios.get('data/musiclist.json')
      .then(res => {
        console.log(res)
        this.musiclist = res.data.albums
      })
      .catch(err => {

      })
  }
}
</script>

<style lang="scss" scoped>
  .music{
    img{
      width: 50%;
    }
  }
</style>
