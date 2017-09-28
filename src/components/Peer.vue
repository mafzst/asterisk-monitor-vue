<template>
  <v-flex xs4>
    <v-card dark class="primary">
      <v-card-text class="px-0">{{peer.objectname}}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'peer',
  props: ['peer'],
  data () {
    return {
      showMore: false
    }
  },
  methods: {
    toggle () {
      this.showMore = !this.showMore
    }
  }
}
</script>
