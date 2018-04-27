<template>
  <div class="chuck-punch">
    <div class="punch" v-show="isLoading"></div>
    <div class="chuck-punch__body">
      <div class="chuck-punch__quote-box" v-show="!isLoading">
        <p><span class="quote-mark"></span>{{joke}}</p>
        <div class="chuck-punch__btn" @click="getPunchedRandomly()">
          Hit me Chuck
          <span class="chuck-punch__chuck-face"></span>
        </div>
      </div>
      <audio preload="auto">
        <source src="../assets/punch-sound.mp3" type="audio/mp3" />
        This text displays if the audio tag isn't supported.
      </audio>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ChuckPunch',
  created () {
    // this.buildPunchAudio()
    this.getPunchedRandomly(true)
  },
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
      this.isLoading = true
      if (!firstLoad) this.playPunchAudio()
      axios.get(url).then((res) => {
        this.joke = res.data.value
        this.isLoading = false
      })
    },
    playPunchAudio () {
      const audioEl = document.querySelector('audio')
      if (audioEl) {
        audioEl.currentTime = 0
        audioEl.play()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .chuck-punch {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
  }

  .punch {
    position: absolute;
    background: url('../assets/punch.svg') center center no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
  }

  .chuck-punch__body {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 3em;
  }

  .chuck-punch__quote-box {
    position: relative;
    padding-left: 4.5em;
  }

  p {
    max-width: 800px;
    font-size: 3.5em;
    font-weight: bold;
    color: white;
    margin-bottom: 1em;
  }

  .quote-mark {
    position: absolute;
    top: -.5em;
    left: 0;
    background: url('../assets/quotation.svg') center no-repeat;
    height: 1.15em;
    width: 1.15em;
  }

  .chuck-punch__btn {
    position: relative;
    display: inline-block;
    font-size: 2em;
    border: 2px solid #fff;
    padding: .5em 2.25em .5em 1em;
    color: #fff;
  }

  .chuck-punch__chuck-face {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: url('../assets/chuck-norris-sticker.png') 92% no-repeat;
    background-size: contain;
    height: 75%;
    width: 100%;
  }

</style>
