<template>
  <loader v-if="isLoader"></loader>

  <app-page title='Заявка' v-else-if="request">
    <!--Иконка назад-->
    <template #backLink>
    <router-link to="/applications"><img class="icon" src="../assets/back.png" alt="back"></router-link>
    </template>
    <!--Форма вывода-->
    <div class="form-request">
      <p><strong>ФИО сотрудника: </strong>{{request.fio}}</p>
      <p><strong>Задача: </strong>{{request.title}}</p>
      <p><strong>Номер телефона: </strong>{{request.phone}}</p>
      <p><strong>Цена: </strong>{{currency(request.cost)}}</p>
      <p class="form-request__field"><strong>Статус: </strong>
        <app-status @click="isEdit = true" v-if="!isEdit" :type="status" class="form-request__status">
        </app-status>
        <select v-else id="status" v-model="status" class="form-request__select">
          <option value="pending">Выполняется</option>
          <option value="active">Активен</option>
          <option value="done">Завершен</option>
          <option value="cancelled">Отменен</option>
      </select>
      </p>



      <div class="form-buttons">
        <button class="btn" @click="update">Обновить</button>
        <button class="btn danger" @click="remove">Удалить</button>
      </div>
      
    </div>
    
  </app-page>
  <!--Такого id нет-->
  <h3 v-else style="text-align: center">Заявки с id: {{route.params.id}} нет</h3>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import {currency} from '../utils/currency'
import Loader from '../components/applications/AppLoader.vue'
import AppPage from '../components/AppPage.vue'
import AppStatus from '../components/applications/AppStatus.vue'
export default {
    components:{AppPage, Loader, AppStatus},
    setup(props){
      const store = useStore()
      const route = useRoute()
      const router = useRouter()
      const isLoader = ref(false)
      const request = ref({})
      const status = ref('active')
      const isEdit = ref(false)

      onMounted(async() => {
        isLoader.value = true
        request.value = await store.dispatch('request/getById', route.params.id)
        status.value = request.value.status
        isLoader.value = false
      })

      request.value.status = status.value

      const remove = async() => {
        await store.dispatch('request/remove', route.params.id)
        router.push('/applications')
      }
      const update = async() => {
        await store.dispatch('request/update', {...request.value, status: status.value, id: route.params.id})
        request.value.status = status.value
      }
      
        return{
          request,
          currency,
          isLoader,
          route,
          status,
          isEdit,
          remove,
          update
        }
    }
}
</script>

<style lang="scss" scoped>

</style>