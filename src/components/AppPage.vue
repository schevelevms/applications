<template>
  <div class="card">
    <h1 class="card__title">
        {{title}}
        <slot name="backLink"></slot>
        <slot name="header"></slot>
    </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
    props:['title', 'linkText'],
    setup(props){
        return {
            title: props.title,
            linkText: props.linkText,
        }
    }
}
</script>

<style lang="scss" scoped>
.card__title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
}
</style>