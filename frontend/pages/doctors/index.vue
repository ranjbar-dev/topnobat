<template>
    <div class="w-full flex flex-col items-start justify-center pt-4 pb-12 px-2 lg:px-64 gap-2">
        
        <div class="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-0 mb-2">

            <input type="text" @model="searchText" class="w-full lg:w-auto lg:flex-1 rounded-lg border border-slate-200 py-2 px-4 text-start text-gray-800 text-sm" placeholder="جستجوی پزشک یا تخصص ..." />

            <button class="w-full lg:w-auto rounded-lg border bg-slate-500 hover:bg-slate-600 py-2 px-6 text-center text-white text-sm ms-2">
                جستجو
            </button>

        </div>

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <!-- load more  -->
        <div class="w-full flex justify-center items-center mt-4">
            <button class="w-[200px] rounded-lg border bg-slate-500 hover:bg-slate-600 py-2 px-2 text-center text-white text-sm">
                نمایش بیشتر
            </button>
        </div>

    </div>
</template> 

<script setup lang="ts">

definePageMeta({
    layout: 'default'
})

useHead({
    title: `تاپ نوبت | پزشکان`,
})

const searchText = ref<string>('')


</script>