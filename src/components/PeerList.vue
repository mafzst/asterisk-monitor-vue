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
  sockets: {
    PeerStatus (data) {
      this.$toast.success({
        title: 'Peer status changed',
        message: data.peer.split('/')[1] + ' is now ' + data.peerstatus
      })
      this.fetchPeers()
    }
  },
  data () {
    return {
      peers: []
    }
  },
  methods: {
    fetchPeers () {
      this.$http.get(window.config.api_base + '/asterisk/sippeers').then(response => {
        this.peers = response.data.response
      })
    }
  },
  mounted () {
    this.fetchPeers()
  }
}
</script>
