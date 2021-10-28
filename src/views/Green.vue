<template>
  <div class="">
    <h1>green</h1>
    <GreenLamp/>
    <YellowLamp/>
    <RedLamp/>
  </div>
</template>

<script>
// @ is an alias to /src
import GreenLamp from '@/components/Green-Lamp.vue'
import RedLamp from '@/components/Red-Lamp.vue'
import YellowLamp from '@/components/Yellow-Lamp.vue'

export default {
  name: 'green',
  components: {
    GreenLamp,
    RedLamp,
    YellowLamp
  }
}
</script>
