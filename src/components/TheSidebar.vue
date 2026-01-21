<template>
  <div class="sidebar" v-if="sidebar">
    <h2>Info about me</h2>
    <span class="alert__close" @click="closeSidebar">&times;</span>

    <div class="info">
    <p><strong>Schevelev Mikhail</strong></p>
    <p><strong>Email: </strong>schevelevms@gmail.com</p>
    <p><strong>Telegram: </strong>@schevelev_13q</p>
    </div>
  </div>
</template>

<script>
    import {computed} from 'vue'
    import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        const sidebar = computed(() => store.state.sidebar)
        const closeSidebar = () => {
            store.commit('closeSidebar')
        }
        return{
            sidebar,
            closeSidebar
        }
    }
}
</script>

<style lang="scss" scoped>
.info{
    padding: 2rem;
}
p{
    font-size: 1.2rem;
    padding-bottom: 0.6rem;
}
</style>