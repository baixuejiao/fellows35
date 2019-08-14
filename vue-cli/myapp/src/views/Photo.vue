<template>
  <div class="photo">
    <img v-for="(item, index) in list" :key="index" :src="item.src" alt="" @click="goDetails(index)">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import {mapMutations} from 'vuex'

export default {
  data() {
    return{
      list: this.$store.state.photoList
    }
  },
  created() {
    axios.get('data/photodata.json')
      .then(res => {
        console.log(res)
        if(res.status *1 === 200) {
          this.list = res.data.photoData
          // this.setPhotoList(res.data.photoData)
        }
      })
      .catch(err => {

      })
  },
  methods: {
    ...mapMutations(['setPhotoList']),
    goDetails(_index) {
      this.$router.push(`/photodetails/${_index}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .photo{
    img{
      width: 50%;
    }
  }
</style>
