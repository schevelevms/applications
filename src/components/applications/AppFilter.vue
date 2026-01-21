<template>
  <div class="filter">
    <div class="filter-form">
        <input type="text" placeholder="Введите ФИО" v-model="fio">
    </div>
    <div class="filter-form">
        <input type="text" placeholder="Введите название" v-model="title">
    </div>
    <div class="filter-form">
        <label style="font-size: 0.8rem; color: grey">Статус</label>
        <select v-model="status">
            <option disabled selected>Выберите статус</option>
            <option value="active">Активен</option>
            <option value="pending">Выполняется</option>
            <option value="cancelled">Отменен</option>
            <option value="done">Завершен</option>
        </select>
    </div>
    <button class="btn reverseColor" v-if="isActive" @click="clear">Очистить</button>
  </div>
</template>

<script>
    import {ref, watch, computed} from 'vue'
export default {
    emits:['update:modelValue'],
    props:['modelValue'],
setup(_,{emit}){
    const fio = ref()
    const title = ref()
    const status = ref()

    watch([fio,title,status], values => {
        emit('update:modelValue', {
            fio: values[0],
            title: values[1],
            status: values[2]
        })
    })

    const clear = () => {
        fio.value = null
        title.value = null
        status.value = null
    }

    const isActive = computed(() => fio.value || title.value || status.value)
    return{
        fio,
        title,
        status,
        isActive,
        clear
    }
}
}
</script>

<style>

</style>