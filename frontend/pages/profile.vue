<template>
    <div class="w-full flex items-start justify-start px-64 pb-12 gap-6" style="min-height: calc(100vh - 112px);">
        
        <div class="w-1/4 flex flex-col items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">
            
            <div class="w-full flex items-center justify-start py-2 px-3 my-1 gap-2 bg-slate-50 hover:bg-slate-100 text-gray-700 hover:text-indigo-500 text-sm rounded cursor-pointer transition-all duration-300" @click="() => changeTab('profile')">
                <Icon name="ic:outline-edit" size="16" />
                <span>ویرایش پروفایل </span>
                <Icon v-if="tab === 'profile'" name="ic:baseline-expand-more" class="text-indigo-500 ms-auto" size="16" />
            </div>
            
            <div class="w-full flex items-center justify-start py-2 px-3 my-1 gap-2 bg-slate-50 hover:bg-slate-100 text-gray-700 hover:text-indigo-500 text-sm rounded cursor-pointer transition-all duration-300" @click="() => changeTab('appointments')">
                <Icon name="ic:outline-calendar-month" size="16" />
                <span>نوبت های من</span>
                <Icon v-if="tab === 'appointments'" name="ic:baseline-expand-more" class="text-indigo-500 ms-auto" size="16" />
            </div>
           
            <div class="w-full flex items-center justify-start py-2 px-3 my-1 gap-2 bg-slate-50 hover:bg-slate-100 text-gray-700 hover:text-indigo-500 text-sm rounded cursor-pointer transition-all duration-300" @click="logout">
                <Icon name="ic:outline-logout" size="16" />
                <span>خروج</span>
            </div>

        </div>

        <div class="w-3/4 flex flex-col items-center justify-start mt-4">

            <div class="w-full flex flex-col items-start justify-center gap-2 px-4 py-4 bg-white rounded-lg" v-if="tab === 'profile'">

                <div class="w-1/2 flex flex-col items-start justify-center gap-2">
                    <label for="name" class="text-sm text-gray-800">نام</label>
                    <input @model="first_name" type="text" id="name" class="w-full border border-gray-200 rounded-md py-1.5 px-2 text-sm text-gray-800" placeholder="امیر حسین" :disabled="loading" />
                </div>

                <div class="w-1/2 flex flex-col items-start justify-center gap-2">
                    <label for="name" class="text-sm text-gray-800">نام خانوادگی</label>
                    <input @model="last_name" type="text" id="name" class="w-full border border-gray-200 rounded-md py-1.5 px-2 text-sm text-gray-800" placeholder="رنجبر حسنی" :disabled="loading" />
                </div>

                <div class="w-1/2 flex flex-col items-start justify-center gap-2">
                    <label for="name" class="text-sm text-gray-800">کدملی</label>
                    <input @model="national_code" type="text" id="name" class="w-full border border-gray-200 rounded-md py-1.5 px-2 text-sm text-gray-800" placeholder="3040506070" :disabled="loading" />
                </div>

                <div class="w-1/2 flex flex-col items-start justify-center gap-2">
                    <label for="name" class="text-sm text-gray-800">شماره تلفن</label>
                    <input type="text" id="name" class="w-full border border-gray-200 rounded-md py-1.5 px-2 text-sm disabled:text-gray-500" :value="phone_number" disabled />
                </div>

                <div class="w-full flex flex-col items-start justify-center gap-2">
                    <button class="w-44 flex justify-center items-center rounded-md bg-indigo-500 hover:bg-indigo-600 py-1.5 px-4 text-center text-white transition-all duration-300 text-sm mt-4 ms-auto" @click="updateProfile"> 
                        <LoadingSpinner v-if="loading" size="16" class="my-1" />
                        <span v-else>ذخیره اطلاعات</span>
                    </button>
                </div>
                
            </div>

            <template v-if="tab === 'appointments'">

                <div class="w-full flex flex-col items-center justify-start bg-white rounded-lg p-4">
                    
                    <div class="w-full flex items-center justify-start gap-4">

                        <div class="w-16 h-16 rounded-full bg-slate-200"></div>

                        <div class="flex flex-col items-start justify-start gap-2">
                            <div class="text-gray-800 text-sm font-bold">امیر حسین رنجبر حسنی</div>
                            <div class="text-gray-800 text-xs">دکتر جراح سرطان</div>
                        </div>

                        <div class="flex flex-col items-start justify-start gap-2">
                            <div class="text-gray-800 text-sm font-bold">
                                <span>زمان ویزیت:</span>
                                <span class="mx-1">10 بهمن</span>
                                <span>14:00</span>
                            </div>
                            <div class="text-gray-800 text-xs">آدرس: تهران، خیابان آزادی، پلاک 123</div>
                        </div>

                        <div class="ms-auto my-auto pe-4 text-green-500 text-sm font-bold">پرداخت شده</div>
                            
                        

                    </div>

                </div>

            </template>

        </div>
      
    </div>
</template> 
<script setup lang="ts">

definePageMeta({
    layout: 'default'
})

useHead({
    title: `تاپ نوبت | پروفایل`,
})

const tab = ref<string>('appointments') // profile, appointments
const first_name = ref<string>('')
const last_name = ref<string>('')
const national_code = ref<string>('')
const phone_number = ref<string>('09370843199s')
const loading = ref<boolean>(false)

const changeTab = (value: string) => tab.value = value

const updateProfile = () => {

    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1000)
}

const logout = () => alert("خروج از حساب کاربری")

</script>