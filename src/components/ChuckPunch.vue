<template>
  <div class="chuck-punch">
    <div class="punch" v-show="isLoading"></div>
    <div class="chuck-punch__body">
      <div class="chuck-punch__quote-box" v-show="!isLoading">
        <p class="chuck-punch__quote"><span class="quote-mark"></span>{{joke}}</p>
        <div class="chuck-punch__btn" @click="getPunchedRandomly()">
          Hit me Chuck
          <span class="chuck-punch__chuck-face"></span>
        </div>
      </div>
      <audio preload="auto">
        <source src="../assets/img/punch-sound.mp3" type="audio/mpeg" />
        This text displays if the audio tag isn't supported.
      </audio>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ChuckPunch',
  data () {
    return {
      isLoading: false,
      joke: '',
      punchAudio: ''
    }
  },
  methods: {
    getPunchedRandomly (firstLoad = false) {
      const url = 'https://api.chucknorris.io/jokes/random'
      if (!firstLoad) this.playPunchAudio()
      this.isLoading = true
      axios.get(url).then((res) => {
        this.joke = res.data.value
        this.isLoading = false
        // if (!firstLoad) this.punchAudio.pause()
      })
    },
    playPunchAudio () {
      if (this.punchAudio) this.punchAudio.currentTime = 0
      const canPlay = this.punchAudio.play()
      canPlay.then(() => {
        console.log('audio is ready')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.punchAudio = document.querySelector('audio')
    this.getPunchedRandomly(true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
