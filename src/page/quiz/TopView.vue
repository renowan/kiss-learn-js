<template>
  <div class="container">
    <div class="row mt20">
      <div class="col-xs-4">
        <button type="button" class="btn btn-default" @click="setQ('gaga')">
          ガガもんだい
        </button>
      </div>
      <div class="col-xs-4">
        <button type="button" class="btn btn-default" @click="setQ('hiyo')">
          ひよもんだい
        </button>
      </div>
      <div class="col-xs-4">
        <button type="button" class="btn btn-default" @click="setQ('papa')">
          ぱぱもんだい
        </button>
      </div>
    </div>
    <div class="row mt40">
      <div class="col-xs-12 text-center my-question">
        {{nowQ ? nowQ.q : 'しつもんを選んでね'}}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6 text-center">
        <button type="button" class="btn btn-default btn-lg btn-primary" @click="answer('y')">
          ◯
        </button>
      </div>
      <div class="col-xs-6 text-center">
        <button type="button" class="btn btn-default btn-lg btn-danger" @click="answer('n')">
          ✕
        </button>
      </div>
    </div>
    <div class="row mt40">
      <div class="col-xs-12 call-back" v-if="wasA">
        {{isGood ? '正解' : '不正解'}}
      </div>
    </div>
  </div>
</template>

<script>
const question = {
  gaga: [
    {q:'1 + 1 = 2', a: 'y'},
    {q:'1 + 2 = 1', a: 'n'},
    {q:'千駄ヶ谷駅は大江戸線のりかえ', a: 'y'},
    {q:'大江戸線はちかてつである', a: 'y'},
  ],
  hiyo: [
    {q:'マヨネーズはやさい', a: 'n'},
    {q:'りんごはくだもの', a: 'y'},
    {q:'サンダルは食べれる', a: 'n'},
    {q:'ひよりはねこがすき', a: 'y'},
  ],
  papa: [
    {q:'北海道のしたは青森', a: 'y'},
    {q:'やまなしのとなりは東京', a: 'y'},
    {q:'おおさかのよこはみやざき', a: 'n'},
    {q:'おきなわは東京のちかくにある', a: 'n'},
  ]
}

export default {
  name: 'quiz-top-view',
  computed: {

  },
  data () {
    return {
      nowQ: null,
      isGood: null,
      wasA: false
    }
  },
  methods: {
    setQ (who) {
      const whoq = question[who]
      const index = Math.floor(Math.random() * whoq.length)
      console.log('index', index)
      this.nowQ = whoq[index]
      this.isGood = null
      this.wasA = false
    },
    answer (a) {
      console.log(a)
      if (!this.nowQ) return
      if (a === this.nowQ.a) {
        this.isGood = true
      } else {
        this.isGood = false
      }
      this.wasA = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt20 {
  margin-top: 20px;
}
.mt40 {
  margin-top: 40px;
}
.mb20 {
  margin-bottom: 20px;
}

.my-question {
  height: 100px;
  font-size: 40px;
}

.call-back {
  text-align: center;
  font-size: 30px;
}
</style>
