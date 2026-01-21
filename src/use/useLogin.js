import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export function useLogin(){
        const store = useStore()
        const router = useRouter()
        const {handleSubmit, isSubmitting} = useForm()

        const {value:email, errorMessage:eEmail, handleBlur:eBlur} = useField(
            'email',
            yup
            .string()
            .trim()
            .required('Пожайлуста введите email')
            .email('Некорректно набран email')
        )
        const {value:password, errorMessage:ePassword, handleBlur:pBlur} = useField(
            'password',
            yup
            .string()
            .trim()
            .required('Пожайлуста введите пароль')
            .min(6, 'Пароль должен быть больше 6 символов')
        )
  
        const submit = handleSubmit( async values => {
                await store.dispatch('auth/login',values)
                router.push('/')  
        })


        return{
            email,
            password,
            eEmail,
            ePassword,
            eBlur,
            pBlur,
            submit,
            isSubmitting,
        }
    }
