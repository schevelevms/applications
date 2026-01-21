<template>
  <div class="questions-list"  @click="checkText = !checkText">
    <div class="question-title">{{question.title}}</div>
    <div class="question-body" v-if="checkText">{{question.text}}</div>
  </div>
</template>

<script>
    import {ref} from 'vue'
export default {
    props:['question'],
    setup(props){
        const checkText = ref(false)
        return{
            questions: props.question,
            checkText
        }
    }
}
</script>

<style>

</style>