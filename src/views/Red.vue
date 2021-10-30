<template>
  <div class="">
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
    store.dispatch('openRout', 0)

    this.$store.watch(
      (state, getters) => state.Loop,
      (newValue, oldValue) => {
        console.log('watch is work')
        this.$router.push(this.$store.state.cycle[newValue].rout)
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
