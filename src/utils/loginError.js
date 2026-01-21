
const ERR_CODE = {
    INVALID_LOGIN_CREDENTIALS: 'Указаны неверные данные, повторите попытку',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'Слишком много попыток входа',
    auth: 'Войдите в профиль пользователя'
}
const ERR_TYPE = {
    'Указаны неверные данные, повторите попытку' : 'danger',
    'Слишком много попыток входа' : 'warning',
    'Войдите в профиль пользователя': 'warning',
}

export function error(code){
    return{
        value: ERR_CODE[code] ? ERR_CODE[code] : 'Неизвестная ошибка',
        type: ERR_TYPE[ERR_CODE[code]] ? ERR_TYPE[ERR_CODE[code]] : 'warning'
    }
}