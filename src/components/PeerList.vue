<template>
<div>
  <h4>Liste des postes</h4>
  <v-layout row wrap>
    <Peer v-for="(peer, index) in peers" :peer="peer" :key="index" />
  </v-layout>
</div>
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
    this.$http.get(window.config.api_base + '/asterisk/sippeers').then(response => {
      this.peers = response.data.response
    })
  }
}
</script>
