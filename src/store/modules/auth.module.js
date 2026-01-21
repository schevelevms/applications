import axios from "axios"
import { error } from "@/utils/loginError"
export default {
namespaced: true,
  state(){
    return{
        token: localStorage.getItem('jwt-token'),
    }
  },
  getters: {
    token(state){
        return state.token
    },
    isAuth(state,getters){
        return !!getters.token
    }
  },
  mutations: {
    setToken(state, token){
        state.token = token
        localStorage.setItem('jwt-token', token)
    },
    logout(state){
        state.token = null
        localStorage.removeItem('jwt-token')
    }
  },
  actions: {
    async login({commit, dispatch}, payload){
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOe1GalrbsM9-ZBaFpQrq1rP77PUgb-7E`
        try{
            let {data} = await axios.post(url,{...payload, returnSecureToken: true})
            commit('setToken', data.localId)
            commit('clearMessage',null, {root:true})
        }catch(e){
            dispatch('setMessage', {
                value: error(e.response.data.error.message),
            },{root: true})       
        }
        
    }
  },

}
