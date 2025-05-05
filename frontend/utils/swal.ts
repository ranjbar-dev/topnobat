export const swal = {
    
    default: (options: {}) => {

        const { $swal } = useNuxtApp()

        const default_options = {
            confirmButtonText: "متوجه شدم",
        }

        // @ts-ignore
        return $swal.fire({ ...default_options, ...options })
    },

    error: (title: string, text: string) => {

        return swal.default({ title, text, icon: "error" })
    },

    success: (title: string, text: string) => {

        return swal.default({ title, text, icon: "success" })
    },
}
