<template>
   <header class="w-screen h-[64px] px-64 flex items-center justify-between border-b border-slate-200">

      <div class="flex items-center gap-6">

         <img src="/topnotbat.png" alt="logo" class="h-12 me-4">

         <NuxtLink to="/" class="text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">صفحه اصلی</NuxtLink>

         <NuxtLink to="/doctors" class="text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">پزشکان</NuxtLink>

         <NuxtLink to="/about-us" class="text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">درباره ما</NuxtLink>
         
         <NuxtLink to="/contact-us" class="text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">تماس با ما</NuxtLink>

      </div>


      <div class="flex justify-center items-center gap-4">

         <div class="flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-2 py-2 cursor-pointer transition-all duration-300 text-xs gap-1" :class="{ 'px-4': city_name_visible }" @mouseenter="showCityName" @mouseleave="hideCityName" @click="cityStore.showModal()">
            <Icon name="ic:outline-location-on" size="18"/>
            <span v-if="city_name_visible">{{ cityName }}</span>
         </div>

         <div class="flex justify-center items-center border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg py-2 px-4 cursor-pointer transition-all duration-300 text-xs" @click="authStore.showModal()">
           
            <template v-if="false"> 
               ورود | ثبت نام
            </template>

            <span v-else class="flex justify-center items-center gap-1">
                <Icon name="ic:outline-person" size="18"/>
               حساب کاربری
            </span>

         </div>

      </div>

   </header> 
</template>
<script setup lang="ts">

const authStore = useAuthStore() 
const cityStore = useCityStore()

const { city } = storeToRefs(cityStore)

const city_name_visible = ref<boolean>(false)

const showCityName = () => city_name_visible.value = true 

const hideCityName = () => city_name_visible.value = false 

const cityName = computed(() => city.value?.name)


</script>
