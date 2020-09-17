<template>
  <div>

    {{aa}}
    {{aaq}}
    <button @click="onclick">sss</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aa: 'xxx'
    }
  },
  created () {
    // this.aa = 455555
  },
  beforeMount () {
    this.aa = '================='
  },
  computed: {
    aaq: function () {
      return 'vvv'
    }
  },
  beforeUpdate () {
    console.log(this.aa, 'beforeupdate')
  },
  updated () {
    console.log(this.aa, 'updated')
  },
  methods: {
    onclick () {
      this.aa = 'ggg'
    }
  }

}
</script>

<style>

</style>