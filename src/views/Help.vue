<template>
  <app-page title="Помощь">
    <questions-list
    v-for="question in questions"
    :key="question.title"
    :question="question"
    ></questions-list>
  </app-page>
</template>

<script>
import AppPage from '../components/AppPage.vue'
import QuestionsList from '../components/questions/QuestionsList.vue'
export default {
  components:{AppPage, QuestionsList},
  setup(){
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Данная CRM-система реализует функционал CRUD (Create, Read, Update, Delete). Предусмотрена фильтрация заявок по трём параметрам: ФИО, названию и статусу. Реализована работа с LocalStorage и JWT-токеном для авторизации в системе.'},
      {title: 'Вход в систему', text: 'Форма входа оснащена валидацией всех входных данных, реализованной с использованием библиотеки VeeValidate. Предусмотрена обработка ошибок аутентификации через компонент модального окна, а также ограничение на количество попыток входа. Реализована обработка переходов по неизвестным URL-адресам и доступа к страницам без авторизации пользователя.'},
      {title: 'Store Vuex', text: 'Все запросы к серверу реализованы с использованием библиотеки Vuex, которая выступает в роли централизованного хранилища состояния приложения. HTTP-запросы выполняются через библиотеку Axios, обеспечивающую удобный и понятный синтаксис для написания и обработки асинхронных вызовов.'},
      {title:'Vue-Router', text: 'Библиотека маршрутизации во Vue, реализующая технологию SPA (Single Page Application), при которой вся логика приложения содержится в одном HTML-файле, а обновление содержимого страницы происходит без её перезагрузки, что делает взаимодействие с сайтом более быстрым и плавным.'}
    ]
    return{
      questions
    }
  }
}
</script>

<style>

</style>