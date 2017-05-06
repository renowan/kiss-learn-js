<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        　<br>
      </div>
      <div class="col-xs-4 slot-num">
        {{slot1}}
      </div>
      <div class="col-xs-4 slot-num">
        {{slot2}}
      </div>
      <div class="col-xs-4 slot-num">
        {{slot3}}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <button type="button" class="btn btn-default btn-lg" @click="stopSlot1">
          stop
        </button>
      </div>
      <div class="col-xs-4">
        <button type="button" class="btn btn-default btn-lg" @click="stopSlot2">
          stop
        </button>
      </div>
      <div class="col-xs-4">
        <button type="button" class="btn btn-default btn-lg" @click="stopSlot3">
          stop
        </button>
      </div>
    </div>
    <div class="row mt30">
      <div class="col-xs-12 text-center">
        <br>
        <br>
        <button type="button" class="btn btn-default btn-lg" @click="runSlot">
          Run
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const slotElm = [1, 2, 3, 4, 5, 6, 7]
let timer1 = null
let timer2 = null
let timer3 = null
let t = null
export default {
  name: 'slot-top-view',
  computed: {

  },
  data () {
    return {
      result: [],
      slot1: 1,
      slot2: 1,
      slot3: 1
    }
  },
  methods: {
    runSlot () {
      const speed = 300
      let count = 0
      t = setInterval(() => {
        count ++
        if (count > 3) count = 0
      }, speed)
      timer1 = setInterval(() => {
        // const index = Math.floor(Math.random() * slotElm.length)
        // this.slot1 = slotElm[index]
        this.slot1 = count
      }, speed)
      timer2 = setInterval(() => {
        // const index2 = Math.floor(Math.random() * slotElm.length)
        // this.slot2 = slotElm[index2]
        this.slot2 = count
      }, speed)
      timer3 = setInterval(() => {
        // const index3 = Math.floor(Math.random() * slotElm.length)
        // this.slot3 = slotElm[index3]
        this.slot3 = count
      }, speed)
    },
    stopSlot1 () {
      clearInterval(timer1)
    },
    stopSlot2 () {
      clearInterval(timer2)
    },
    stopSlot3 () {
      clearInterval(timer3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .slot-num {
   font-size: 50px;
 }
</style>
