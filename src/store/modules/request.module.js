import axios from "axios"
import store from '../index'
import { error } from "@/utils/loginError"
export default {
namespaced: true,
  state(){
    return{
       request: []
    }
  },
  getters: {
    request(state){
        return state.request
    }
  },
  mutations: {
    setRequest(state, values){
        state.request = values
    },
    addRequest(state, values){
        state.request.push(values)
    }
  },   
  actions: {
    async create({commit, dispatch}, values){
        try {
            const token = store.getters['auth/token']
           const {data} = await axios.post(`https://vue-crm-25f78-default-rtdb.firebaseio.com/requests.json?auth=${token}`, values)    
           commit('addRequest', {...values, id: data.name})
           dispatch('setMessage',{
            value: 'Новая заявка успешно создана',
            type: 'primary'
           }, {root: true})   
        } catch (e) {
            dispatch('setMessage',{
            value: error(e.message),
            type: 'danger'
           }, {root: true})   
            
        }
    },
    async get({commit}){
        try {
            const token = store.getters['auth/token']
            const {data} = await axios.get(`https://vue-crm-25f78-default-rtdb.firebaseio.com/requests.json?auth=${token}`)  
            const request = Object.keys(data).map(id => ({...data[id], id}))    
            commit('setRequest', request)
        } catch (error) {
            console.log(error);   
        }
    },
    async getById({commit}, id){
        try {
            const token = store.getters['auth/token']
            const {data} = await axios.get(`https://vue-crm-25f78-default-rtdb.firebaseio.com/requests/${id}.json?auth=${token}`)   
            return  await data
        } catch (error) {
            console.log(error);   
        }
    },
    async remove({dispatch}, id){
        try {
            const token = store.getters['auth/token']
            await axios.delete(`https://vue-crm-25f78-default-rtdb.firebaseio.com/requests/${id}.json?auth=${token}`) 
             dispatch('setMessage',{
            value: `Заявка удалена!`,
            type: 'primary'
           }, {root: true})    
        } catch (error) {
            console.log(error);   
        }
    },
    async update({dispatch}, request){
        try {
            const token = store.getters['auth/token']
            await axios.put(`https://vue-crm-25f78-default-rtdb.firebaseio.com/requests/${request.id}.json?auth=${token}`, request) 
             dispatch('setMessage',{
            value: `Статус обновлен!`,
            type: 'primary'
           }, {root: true})    
        } catch (error) {
            console.log(error);   
        }
    }
    }
}