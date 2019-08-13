<template>
  <div class="about">
    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3634027179,1859278485&fm=26&gp=0.jpg" alt="">

    <tpl :title="msg"></tpl>
  </div>
</template>

<script>
  import tpl from '@/components/HelloWorld.vue'
  export default {
    data() {
      return {
        msg: '1234567'
      }
    },
    methods: {
      
    },
    components: {
      tpl
    },
    computed: {

    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>

</style>
