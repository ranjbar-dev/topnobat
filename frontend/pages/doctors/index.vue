<template>
    <div class="w-full flex flex-col items-start justify-center pt-4 pb-12 px-2 lg:px-64 gap-2">
        
        <input type="text" @model="searchText" class="w-full rounded-lg border border-slate-200 py-3 px-4 text-start text-gray-800 text-sm" placeholder="جستجوی پزشک یا تخصص ..." />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

        <DoctorRecord />

    </div>
</template> 

<script setup lang="ts">

definePageMeta({
    layout: 'default'
})

const searchText = ref<string>('')
useHead({
    title: `تاپ نوبت | پزشکان`,
})

</script>