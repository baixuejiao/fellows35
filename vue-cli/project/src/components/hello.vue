<template>
  <div class="hello">
    <p @click="$emit('change')">
      {{title}}
    </p>

    <p @click="changefun()">
      {{title}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['title', 'changefun'],
  methods: {
    fun(){
      console.log(123456)
    }
  }
}
</script>
