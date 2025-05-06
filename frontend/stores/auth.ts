
export const useAuthStore = defineStore('auth', () => {

    const authenticated = ref<boolean>(false)
    const modal = ref<boolean>(false)
    const phone = ref<string>('')
    const code = ref<string>('')
    const token = ref<string>('')
    
    const sendCode = (): Promise<void> => {

        /// TODO : complete 
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve()
            }, 1000)

        })
    }

    const verifyCode = (): Promise<void> => {

        /// TODO : complete 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }

    const setPhone = (value: string) => phone.value = value

    const setCode = (value: string) => code.value = value

    const showModal = () => modal.value = true

    const hideModal = () => modal.value = false

    return {
        authenticated,
        modal,
        phone,
        code,
        token,
        
        setPhone, // TODO : store in localstorage 
        setCode,
        showModal,
        hideModal,
        sendCode,
        verifyCode,
    }
})