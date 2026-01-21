<template> 
  <the-sidebar></the-sidebar>
  <the-navigation></the-navigation>
  
  <div class="wrapper">
    <AppMessage/>
  <router-view/>
    </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue'
import AppMessage from '../components/AppMessage.vue'
import TheSidebar from '../components/TheSidebar.vue'
export default {
  components:{
    TheNavigation,
    AppMessage,
    TheSidebar
  }
}
</script>




