<template>
  <div class="music">
    <aplayer v-if="musiclist.length>0"
      :music="musiclist[0]"
      :list = "musiclist"
      autoplay
      showLrc
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Aplayer from 'vue-aplayer'
import axios from 'axios'

export default {
  data() {
    return {
      musiclist: []
    }
  },
  components: {
    Aplayer
  },
  created() {
   axios.get('data/musicdata.json')
    .then(res => {
      console.log(res)
      if(res.status*1 === 200) {
        let _list = res.data.musicData

        _list.forEach(element => {
          element.pic = element.musicImgSrc
          element.artist = element.author
          element.lrc = 'http://192.168.1.103:8081/'+element.lrc
        });

        this.musiclist = _list
      } else {
        alert(res.statusText)
      }
    })
    .catch(err => {
      alert('Error!')
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
