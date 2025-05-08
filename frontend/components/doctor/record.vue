<template>
    <div class="w-full flex flex-col items-center justify-start bg-white rounded-lg p-4">
        
        <div class="w-full flex flex-col lg:flex-row items-center justify-start">

            <div class="w-16 h-16 rounded-full bg-slate-200"></div>

            <div class="flex flex-col items-center lg:items-start justify-center lg:justify-start ps-4 gap-2 mt-2 lg:mt-0">
                <div class="text-gray-800 text-sm font-bold">{{ name }}</div>
                <div class="text-gray-800 text-xs">{{ profession }}</div>
            </div>

            <div class="w-full lg:w-auto flex justify-center items-center ms-auto mt-2 lg:mt-0">

                <Icon name="ic:outline-star" size="16" class="text-gray-200" />

                <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

            </div>

        </div>

        <div class="w-full flex items-center justify-start ps-0 lg:ps-20 mt-2 lg:mt-0">

            <div class="hidden lg:flex items-center justify-start gap-2 text-gray-800 text-xs">
                آدرس: 
                <span>{{ address }}</span>
            </div>

            <NuxtLink to="/doctors/1" class="w-full lg:w-auto flex justify-center items-center rounded-md bg-indigo-500 hover:bg-indigo-600 py-1.5 px-4 text-center text-white transition-all duration-300 text-xs ms-auto"> رزرو نوبت</NuxtLink>

        </div>
        
    </div>
</template>
<script setup lang="ts">

const name = ref<string>('حسین حسینی حسینی حسینی حسینی حسینی')

const profession = ref<string>('متخصص قلب و عروق متخصص قلب و عروق متب و عروق')

const address = ref<string>('تهران، تهران، تهران، تهران، تهران، تهران، خیابان آزادی، پلاک 123')

</script>
