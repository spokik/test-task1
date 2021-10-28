<template>
  <div class="">
    <h1>Yellow</h1>
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
  name: 'Yellow',
  components: {
    GreenLamp,
    RedLamp,
    YellowLamp
  }
}
</script>
