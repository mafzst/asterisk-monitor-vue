<template>
  <v-flex xs4>
    <v-card dark :class="peer.ipport !== '0' ? 'green' : 'red'" @click="call(peer)">
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

    }
  },
  methods: {
    call (peer) {
      this.$http.post(window.config.api_base + '/asterisk/originate', {
        Channel: 'SIP/' + peer.objectname,
        Context: 'home',
        Exten: 11,
        Priority: 1,
        CallerId: 'Auto dial'
      })
    }
  }
}
</script>
