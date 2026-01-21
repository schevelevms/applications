<template>
    <div class="modal--back-drop" @click="$emit('close')"></div>
  <div class="modal">
   <slot/>
  </div>
  
</template>

<script>
    
export default {
    emits:['close'],
}
</script>

<style>

</style>