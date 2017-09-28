<template>
<v-layout row wrap>
  <Peer v-for="(peer, index) in peers" :peer="peer" :key="index"/>
</v-layout>
</template>

<script>
import Peer from './Peer'

export default {
  name: 'peerList',
  components: {
    Peer
  },
  data () {
    return {
      peers: []
    }
  },
  mounted () {
    this.$http.get('http://localhost:5000/api/asterisk/sippeers').then(response => {
      this.peers = response.data.response
    })
  }
}
</script>
