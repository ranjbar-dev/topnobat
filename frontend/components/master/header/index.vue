<template>
   <header class="w-screen h-[64px] px-2 lg:px-64 flex items-center justify-between border-b border-slate-200">

      <div class="flex justify-start items-center gap-6">

         <NuxtLink to="/">

            <img src="/topnotbat.png" alt="logo" class="hidden lg:block h-10 me-4">

            <img src="/logo.png" alt="logo" class="block lg:hidden h-10 me-4">
            
         </NuxtLink>

         <NuxtLink to="/" class="hidden lg:block text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">صفحه اصلی</NuxtLink>

         <NuxtLink to="/doctors" class="hidden lg:block text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">پزشکان</NuxtLink>

         <NuxtLink to="/about-us" class="hidden lg:block text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">درباره ما</NuxtLink>
         
         <NuxtLink to="/contact-us" class="hidden lg:block text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">تماس با ما</NuxtLink>

      </div>

      <div class="hidden lg:flex justify-center items-center gap-4">

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

      <div class="flex lg:hidden justify-center items-center gap-4">

         <Icon name="ic:outline-menu" size="28" class="text-gray-800 hover:text-indigo-600 cursor-pointer transition-all duration-300" @click="showMenu" />

      </div>

      <div class="fixed top-0 left-0 w-screen h-screen bg-slate-800/50 z-10" v-if="menu_visible" @click="hideMenu">

         <div class="w-80 h-full flex flex-col items-start justify-between py-4 px-4 gap-4 bg-white">

            <div class="w-full flex flex-col items-start justify-start gap-4"> 

               <img src="/topnotbat.png" alt="logo" class="h-12 me-4">

               <NuxtLink to="/" class="flex justify-center items-center gap-2 text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">
                  <Icon name="ic:outline-home" size="18" />
                  <span>صفحه اصلی</span>
               </NuxtLink>
   
               <NuxtLink to="/doctors" class="flex justify-center items-center gap-2 text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">
                  <Icon name="ic:outline-person" size="18" />
                  <span>پزشکان</span>
               </NuxtLink>
   
               <NuxtLink to="/about-us" class="flex justify-center items-center gap-2 text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">
                  <Icon name="ic:outline-info" size="18" />
                  <span>درباره ما</span>
               </NuxtLink>
   
               <NuxtLink to="/contact-us" class="flex justify-center items-center gap-2 text-gray-800 hover:text-indigo-600 text-sm cursor-pointer transition-all duration-300">
                  <Icon name="ic:outline-phone" size="18" />
                  <span>تماس با ما</span>
               </NuxtLink>

            </div>

            <div class="w-full">

               <div class="flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 py-2 cursor-pointer transition-all duration-300 text-xs gap-1"  @mouseenter="showCityName" @mouseleave="hideCityName" @click="cityStore.showModal()">
                  <Icon name="ic:outline-location-on" size="18"/>
                  <span>{{ cityName }}</span>
               </div>

               <div class="flex justify-center items-center border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg py-2 px-4 mt-2 cursor-pointer transition-all duration-300 text-xs" @click="authStore.showModal()">
               
                  <template v-if="false"> 
                     ورود | ثبت نام
                  </template>

                  <span v-else class="flex justify-center items-center gap-1">
                     <Icon name="ic:outline-person" size="18"/>
                     حساب کاربری
                  </span>

               </div>

            </div>


         </div>

      </div>

   </header> 
</template>
<script setup lang="ts">

const authStore = useAuthStore() 
const cityStore = useCityStore()

const { city } = storeToRefs(cityStore)

const menu_visible = ref<boolean>(false)
const city_name_visible = ref<boolean>(false)

const showMenu = () => menu_visible.value = true

const hideMenu = () => menu_visible.value = false

const showCityName = () => city_name_visible.value = true 

const hideCityName = () => city_name_visible.value = false 

const cityName = computed(() => city.value?.name)


</script>
