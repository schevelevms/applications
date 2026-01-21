import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'

export function useModal(fn){
        const store = useStore()
        const {handleSubmit, isSubmitting} = useForm( {
            initialValues: {
                status: 'active'
            }
        })
    const {value:fio, errorMessage: eFio, handleBlur: bFio} = useField('fio', 
        yup
        .string()
        .required('Введите ФИО')
    )
    const {value:title, errorMessage: eTitle, handleBlur: bTitle} = useField('title',
        yup
        .string()
        .trim()
        .required('Введите название')
    )
    const {value:phone, errorMessage: ePhone, handleBlur: bPhone} = useField('phone',
        yup
        .string('Введите номер телефона')
        .typeError('Введите номер телефона корректно')
        .required('Введите номер телефона')
        .min(11, 'Введите полный номер телефона')
    )
    const {value:cost, errorMessage: eCost, handleBlur: bCost} = useField('cost',
        yup
        .number('Введите цену')
        .typeError('Введите цену')
        .required('Введите цену')
    )
    const {value:status} = useField('status')

    const add = handleSubmit(fn)
    return{
        fio,
        eFio,
        bFio,
        title,
        eTitle,
        bTitle,
        phone,
        ePhone,
        bPhone,
        cost,
        eCost,
        bCost,
        status,
        add,
        isSubmitting
    }
    }
