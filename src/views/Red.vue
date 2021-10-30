<template>
  <div class="grey-box">
    <h1>red</h1>
    <RedLamp/>
    <YellowLamp/>
    <GreenLamp/>
  </div>
</template>

<script>
import store from '../store/index'

// @ is an alias to /src
import GreenLamp from '@/components/Green-Lamp.vue'
import RedLamp from '@/components/Red-Lamp.vue'
import YellowLamp from '@/components/Yellow-Lamp.vue'

export default {
  name: 'red',
  mounted () {
    const load = JSON.parse(localStorage.getItem('save'))
    if ((load && load.time > 100)) {
      store.dispatch('openRout', { index: 0, timeout: load.time })
    } else {
      store.dispatch('openRout', { index: 0 })
    }
    this.$store.watch(
      (state, getters) => state.Loop,
      (newValue, oldValue) => {
        this.$router.push(this.$store.state.cycle[newValue].rout).catch(() => {})
      }
    )
  },
  computed: {
    state () {
      return store.state
    }
  },
  components: {
    GreenLamp,
    RedLamp,
    YellowLamp
  }
}
</script>
