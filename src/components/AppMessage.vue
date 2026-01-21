<template>
<div v-if="message" :class="['alert', message.type, message.value.type]">
    <h1 style="font-size: 1.8rem">{{title || message.value}}</h1>
  <div class="alert__message" v-if="message">{{message.value.value}}</div>
  <span class="alert__close" @click="close">&times;</span>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    setup(){
        const store = useStore()
        const TITLE_COMPLETE = {
            primary: 'Успешно!',
            danger: 'Ошибка!',
            warning: 'Внимание!' 
        }
        const message = computed(() => store.state.error)
        const title = computed(() => message.value ? TITLE_COMPLETE[message.value.value.type] : null )
        const close = () => {
            store.commit('clearMessage')
        }
        return{
            message,
            title,
            close
        }
    }
}
</script>

<style>

</style>