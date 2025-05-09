import type { City } from '~/models/city' 

const getCityFromLocalStorage = (): number => {

    if (process.client) 
        return parseInt(localStorage.getItem('city') || '1')

    return 1
}

export const useCityStore = defineStore('city', () => {

    const cities= ref<City[]>([
        {
            "id": 1,
            "name": "رفسنجان",
            "province": "کرمان"
        },
        {
            "id": 2,
            "name": "کرمان",
            "province": "کرمان"
        }
    ])

    const cityId = ref<number>(getCityFromLocalStorage())
    const modal = ref<boolean>(false)
 
    const city = computed(() => cities.value.find((city: { id: number }) => city.id === cityId.value))
    
    const setCityId = (value: number): void => {

        cityId.value = value

        if (process.client)
            localStorage.setItem('city', value.toString())  
    }

    const showModal = () => modal.value = true

    const hideModal = () => modal.value = false

    return {
        cities,
        cityId,
        city,
        modal,

        showModal,
        hideModal,
        setCityId,
    }
})