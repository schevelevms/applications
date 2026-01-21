<template>
  <span :class="['badge', typeStyle]">{{textStyle}}</span>
</template>

<script>
    import {computed} from 'vue'
export default {
    props:{
        type: {
            type: String,
            required: true,
            validator(value){
               return ['active', 'pending', 'cancelled', 'done'].includes(value)
            }
        }
    },
    setup(props){
        const type = props.type

        const TEXT_TRANSFORM ={
            active: 'Активен',
            pending: 'Выполняется',
            cancelled: 'Отменен',
            done: 'Завершен'
        }
        const TYPE_TRANSFORM = {
            active: 'primary',
            pending: 'warning',
            cancelled: 'danger',
            done: 'primary' 
        }
        const typeStyle = computed(() => type ? TYPE_TRANSFORM[type] : '')
        const textStyle = computed(() => type ? TEXT_TRANSFORM[type] : '')
        return{
            typeStyle,
            textStyle
        }
    }
}
</script>

<style>

</style>