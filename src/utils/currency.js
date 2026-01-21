const formatCost = new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'})
export function currency(cost){
    return formatCost.format(cost)
}