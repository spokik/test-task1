<template>
  <div class="">
    <h1>green</h1>
    <GreenLamp/>
    <YellowLamp/>
    <RedLamp/>
  </div>
</template>

<script>
import store from '../store/index'
import GreenLamp from '@/components/Green-Lamp.vue'
import RedLamp from '@/components/Red-Lamp.vue'
import YellowLamp from '@/components/Yellow-Lamp.vue'

export default {
  name: 'green',
  mounted () {
    store.dispatch('activeLamp', 'GREEN')
  },
  components: {
    GreenLamp,
    RedLamp,
    YellowLamp
  },
  computed: {
    state () {
      return store.state
    }
  }
}
</script>
