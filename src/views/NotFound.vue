<template>
  <h1 class="notFound__text alert warning">Эта страница не найдена</h1>
  <router-link to="/auth" class="notFound__link">Вернуться на стриницу Login</router-link>
</template>

<script>
export default {

}
</script>

<style  scoped>
.notFound__text{
  text-align: center;
  margin-bottom: 2rem;
}
.notFound__link{
display: flex;
justify-content: center;
font-size: 1.8rem;
font-weight: 600;

}
</style>