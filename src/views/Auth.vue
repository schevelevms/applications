<template>
    <app-message/>
    <form class="card-auth" @submit.prevent="submit">
        <header class="header-auth">
            <div class="title-auth">Login Form</div>
        </header>
        <main class="main-auth">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" :class='{invalid: eEmail}' id="email" v-model="email" @blur="eBlur">
                <small v-if="eEmail">{{eEmail}}</small>
            </div>

            <div :class="['form-control', {invalid: ePassword}]">
                <label for="password">Password</label>
                <input type="password" :class='{invalid: ePassword}' id="password"  v-model="password" @blur="pBlur">
                <small v-if="ePassword">{{ePassword}}</small>
            </div>

            <section>
            <button class="btn auth" type="submit" :disabled="isSubmitting">Login</button>
            </section> 
        </main>
    </form>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {error} from '../utils/loginError'
import {useLogin} from '../use/useLogin'
import AppMessage from '../components/AppMessage.vue'
export default{
    components:{
        AppMessage
    },
    setup(){
    const route = useRoute()
    const store = useStore()
    if(route.query.message){     
        store.dispatch('setMessage', {
            value: error(route.query.message)
        })
    }
    
        return{
            ...useLogin(), 
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

