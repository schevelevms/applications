<template>
  <app-page title='Список заявок'>

    <template #header>
        <button class="btn" @click="modal = true">Создать</button>
    </template>

    <Filter v-model="filter"></Filter> <!--Поиск--> 
    <loader v-if="flagLoader"></loader> <!--Loader--> 
    <table-applications :request="request" v-else></table-applications> <!--Таблица заявок--> 

  </app-page>
  
  <!--Модальное окно для создания новых заявок--> 
  <Teleport to='body'>
    <app-modal v-if="modal" @close="modal = false">
        <modal-form-applications @created='modal = false'></modal-form-applications>
    </app-modal>
  </Teleport>
  
</template>

<script>
import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import AppModal from '../components/AppModal.vue'
import AppPage from '../components/AppPage.vue'
import TableApplications from '../components/applications/TableApplications.vue'
import ModalFormApplications from '../components/applications/ModalFormApplications.vue'
import Loader from '../components/applications/AppLoader.vue'
import Filter from '../components/applications/AppFilter.vue'
export default {
    components:{AppPage, TableApplications, AppModal, ModalFormApplications, Loader, Filter},
    setup(){
        const store = useStore()
        const flagLoader = ref(false)
        const modal = ref(false)
        const filter = ref({})

        onMounted(async () => {
            flagLoader.value = true
            await store.dispatch('request/get')
             flagLoader.value = false
        })

        const request = computed(() => store.getters['request/request']
        .filter(request => {
            if (filter.value.fio) {
                return request.fio.includes(filter.value.fio)
            }
            return request
        })
        .filter(request => {
            if (filter.value.title) {
                return request.title.includes(filter.value.title)
            }
            return request
        })
        .filter(request => {
            if (filter.value.status) {
                return request.status === filter.value.status
            }
            return request
        })
        )
        return{
            modal,
            request,
            flagLoader,
            filter
        }
    }
}
</script>

<style>

</style>