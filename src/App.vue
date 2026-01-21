<template>
  <component :is="routes + '-layot-vue'"></component>
</template>

<script>
import {useRoute} from 'vue-router'
import { computed } from 'vue'
import LoginLayotVue from './layots/LoginLayot.vue'
import MainLayotVue from './layots/MainLayot.vue'

export default {
  setup(){
    const route = useRoute()
    
    return{
      routes: computed(() => route.meta.layot)
    }
  },
  components:{
    LoginLayotVue,
    MainLayotVue
  }
}
</script>

<style>

</style>