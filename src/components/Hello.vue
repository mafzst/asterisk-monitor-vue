<template>
  <p>{{msg}}</p>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: this.$asterisk.test()
    }
  }
}
</script>
