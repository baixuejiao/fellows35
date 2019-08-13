<template>
  <ul class="all">
    <li v-for="(ds, index) in list" :key="index" v-if="ds.tag=='pay'">
      <div class="list-info">
        <p>{{ds.name}}</p>
        <p>{{ds.info}}</p>
      </div>
      <div>{{ds.cost}}</div>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    
  },
  computed: {
    list(){
      return this.$store.state.list
    }
  }

}
</script>
