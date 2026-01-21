<template>
    
   <h2>Создать заявку</h2>
    <form @submit.prevent="add">
    <div class="form-control">
    <label for="name">Название</label>
    <input id="name" type="text" v-model="title" @blur="bTitle" :class='{invalid: eTitle}'>
    <small v-if="eTitle">{{eTitle}}</small>
    </div>
    
    <div class="form-control">
    <label for="fio">ФИО</label>
    <input id="fio" type="text" v-model="fio" @blur="bFio" :class='{invalid: eFio}'>
    <small v-if="eFio">{{eFio}}</small>
    </div>

    <div class="form-control">
    <label for="phone">Телефон</label>
    <input id="phone" type="tel" v-model="phone" @blur="bPhone" :class='{invalid: ePhone}'>
    <small v-if="ePhone">{{ePhone}}</small>
    </div>

    <div class="form-control">
    <label for="cost">Цена</label>
    <input id="cost" type="number" v-model="cost" @blur="bCost" :class='{invalid: eCost}'>
    <small v-if="eCost">{{eCost}}</small>
    </div>

    <div class="form-control">
    <label for="status">Статус</label>
    <select  id="status" v-model="status" class="select">
        <option value="pending">Выполняется</option>
        <option value="active">Активен</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
    </select>
    </div>

    <button class="btn" type="submit" :disabled='isSubmitting'>Создать</button>
    </form>
</template>

<script>
    import {useStore} from 'vuex' 
    import {useModal} from '../../use/useModal'
export default {
    emits:['created'],
setup(_,{emit}){
    const store = useStore()
    const submit = async values =>{
        await store.dispatch('request/create',values)
        emit('created')
        
    }
        return{...useModal(submit)}
    }
}
</script>

<style>

</style>