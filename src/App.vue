<script>
  import store from '@/store/index'
  import API from '@/api/index'

  export default {
    created() {
      this.createInnerAudioContext()
    },
    methods: {
      createInnerAudioContext() {
        store.commit('createInnerAudioContext')
      }
    }
  }
</script>

<style>
page{
  height:100%;
}
.container {
  display: flex;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
