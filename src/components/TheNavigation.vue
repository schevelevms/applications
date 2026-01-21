<template>
    <header class="header">
    <div class="header__logo">CRM</div>
    <nav class="header-nav">
        <ul class="header-nav__list">
            <li class="header-nav__link">
                <router-link to="/">Главная</router-link>
            </li>
            <li class="header-nav__link">
                <router-link to="/applications">Заявки</router-link>
            </li>
            <li class="header-nav__link">
                <router-link to="/help">Помощь</router-link>
            </li>
            <li class="header-nav__link">
                <a href="#" @click.prevent="openSidebar">Сообщения</a>
            </li>
            <li class="header-nav__link">
                <a href="#" @click.prevent="logout">Выйти</a>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
setup(){
    const store = useStore()
    const router = useRouter()
    const openSidebar = () => {
        store.commit('openSidebar')
    }
    return{
      logout: () => {
        store.commit('auth/logout')
        router.push('/auth')
    },
    openSidebar
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    background-color: #fff;
    padding: 1rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__logo{
        font-size: 2rem;
    }
    .header-nav{
        padding: 0rem 2rem;
        .header-nav__list{
            display: flex;
            gap: 2.5rem;
        }
    }
}
</style>