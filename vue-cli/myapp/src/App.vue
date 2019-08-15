<template>
  <div id="app">
    <common-header :cur="cur" :select-nav="selectNav"></common-header>

    <div id="app-container">
      <router-view></router-view>
    </div>

    <common-footer :navList="navList" @choose="selectNav" :cur="cur"></common-footer>

  </div>
</template>

<script>
  import commonHeader from '@/components/CommonHeader.vue'
  import commonFooter from '@/components/CommonFooter.vue'

  import axios from 'axios'

  import {mapMutations} from 'vuex'

  export default {
    data(){
      return {
        // 当前选中的菜单信息
        cur: {
          name: '电影',
          path: '/movie',
          bgColor: '#ff0000'
        },
        navList: [
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
        ],
        plist: []
      }
    },
    methods: {
      ...mapMutations(['setPhotoList']),
      selectNav(_data) {
        console.log(_data)
        this.cur = _data
      }
    },
    components: {
      commonHeader,
      commonFooter
    },
    created(){
      // 创建的时候 拿到当前页面路由的路径 去 跟数组比较
      this.navList.forEach((item) => {
        if(item.path == this.$route.path){
          this.cur = item
        } else if (this.$route.path == '/musiclist') {
          this.cur = {
            name: '音乐',
            path: '/music',
            bgColor: '#ff00ff'
          }
        } else if (this.$route.path.includes('/photodetails')) {
          this.cur = {
            name: '图片',
            path: '/photo',
            bgColor: '#ff8907'
          }
        }
      })

      axios.get('/data/photodata.json')
        .then(res=>{
          if(res.status * 1 === 200){
            this.plist =  res.data.photoData
            this.setPhotoList(this.plist)
          } else {
            alert(res.statusText)
          }
        })
        .catch(err => {
          alert('error')
        })
    }
  }

</script>

<style lang="scss">
  #app-container{
    margin: 1rem auto;

  }
</style>
