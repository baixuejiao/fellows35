<template>
  <div class="details" v-if="tag">
    <img :src="details.images.medium">
    <p>{{details.title}}</p>
    <section>{{details.summary}}</section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data() {
    return {
      tag: false,
      details: {}
    }
  },
  components: {
  },
  created() {
    axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+this.$route.params.id)
      .then(res => {
        console.log(res)
        this.tag = true
        if(res.status*1 === 200) {
          this.details = res.data
        } else {
          alert(res.statusText)
        }
      })
      .catch(err => {
        console.log(err)
        alert('Error!');
      })
  }
}
</script>
