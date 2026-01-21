import { createStore } from 'vuex'
import auth from './modules/auth.module'
import request from './modules/request.module'
export default createStore({
  state: {
    error: null,
    sidebar: false
  },
  getters: {
  },
  mutations: {
    setMessage(state,message){
      state.error = message
    },
    clearMessage(state){
      state.error = null
    },
    openSidebar(state){
      state.sidebar = true
    },
    closeSidebar(state){
      state.sidebar = false
    }
  },
  actions: {
    setMessage({commit}, message){
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')       
      },5000)
    }
  },
  modules: {
    auth,
    request
  }
})
