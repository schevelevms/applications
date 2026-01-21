<template>
<h2 style="text-align: center; padding-top: 0;" v-if="request.length === 0">Заявок нет</h2>
  <table v-else class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>ФИО</th>
            <th>Название</th>
            <th>Телефон</th>
            <th>Цена</th>
            <th>Статус</th>  
            <th>Просмотр</th>   
        </tr>
    </thead>
    <tbody>
        <tr v-for="(e, i) in request" :key="e.id">
            <td>{{i + 1}}</td>
            <td>{{e.fio}}</td>
            <td>{{e.title}}</td>
            <td>{{e.phone}}</td>
            <td>{{currency(e.cost)}}</td>
            <td><app-status :type='e.status'></app-status></td>
            <td><router-link :to="'request/' + e.id"><b>Открыть</b></router-link></td>
        </tr>
    </tbody>
  </table>
</template>

<script>
    import {computed, ref, provide} from 'vue'
    import {currency} from '../../utils/currency'
    import AppStatus from './AppStatus.vue'
export default {
  components: { AppStatus },
    props:['request'],
    setup(props){
        return{
            request: computed(() => props.request),
            currency,
        }
    }
}
</script>

<style>

</style>