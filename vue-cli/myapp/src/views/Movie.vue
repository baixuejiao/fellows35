<template>
  <div class="movie">
    <ul class="movie-wrapper">
      <li class="movie-list" v-for="(item, index) in movieList" :key="index" @click="goDetails(item)">
        <img :src="item.images.small" alt="">
        <div class="movie-info">
          <h4>{{item.title}}</h4>
          <p>演员：
            <span v-for="(ds, index) in item.casts" :key="index">{{ds.name}}</span>
          </p>
          <p>评分: {{item.rating.average}}分</p>
          <p>上映日期: {{item.mainland_pubdate}}</p>

        </div>
      </li>
    </ul>
    <div class="movie-loading" v-show="loadingStatus">
      <img src="@/assets/imgs/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data() {
    return{
      movieList: [],
      loadingStatus: true,
      total: -1
    }
  },
  components: {

  },
  methods: {
    getList(){
      if(this.movieList.length == this.total) return
      this.loadingStatus = true;
      axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=${this.movieList.length}&count=10`)
      .then((res) => {
        /*
          {
            errno: 0,
            errmsg: '',
            data: {}
          }
        */
        // handle success
        console.log(res);
        this.loadingStatus = false;
        if (res.status*1 === 200) {
          this.total = res.data.total
          // this.movieList.push(res.data.subjects)
          this.movieList = [...this.movieList,...res.data.subjects];
        } else {
          alert(res.statusText)
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
        this.loadingStatus = false;
        alert('服务器错误请稍后重试')
      })
    },
    goDetails(_data) {
      // '/path/111'
      this.$router.push(`/details/${_data.id}`)
    }
  },
  created() {
    // 前后端数据交互的时候才会出现跨域问题
    // 协议 域名 端口号 不同的话会出现跨域问题
    // http://192.168.1.104:8081/movie
    // https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1
    
    this.getList();
  
    window.onscroll = () => {
      // 页面滚动出去的高度
      let top = document.documentElement.scrollTop;

      // 页面屏幕的高度
      let height = document.documentElement.clientHeight;

      // 页面实际的高度
      let tall = document.documentElement.scrollHeight;

      if(top + height == tall) {
        this.getList();
      }
    }
  
  
  
  },
  mounted() {
    console.log(this.movieList)

  }
}
</script>

<style lang="scss" scoped>
  .movie-list{
    display: flex;
    width: 7.1rem;
    margin: 0 auto;
    padding: .2rem 0;
    position: relative;

    &::after{
      content: '';
      display: block;
      width: 100%;
      border-bottom: 1px solid #333;
      transform: scaleY(0.5);
      position: absolute;
      left: 0;
      bottom: 0;
    }


    img{
      width: 2rem;
      height: 3rem;
      background: #ddd;
    }

    .movie-info{
      flex-grow: 1;
      padding-left: .2rem;
    }
  }
  .movie-loading{
    width: 2rem;
    height: 2rem;
    margin: -1rem 0 0 -1rem;
    text-align: center;
    line-height: 2rem;
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 50%;
    left: 50%;
    
    img{
      width: 1rem;
      vertical-align: middle;
    }
  }
</style>
