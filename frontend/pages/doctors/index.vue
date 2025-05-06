<template>
    <div class="w-full flex flex-col items-center justify-center pb-12 px-64">
        
        <div class="w-full flex items-start justify-center mt-4">
            
            <div class="w-1/3 flex flex-col pe-4">
                <div class="w-full h-64 bg-white rounded-lg py-2 px-4">

                    <div class="text-base text-gray-800">فیلتر پزشکان</div>
                    
                </div>
            </div>

            <div class="w-2/3 flex flex-col gap-2">

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

        </div>

    </div>
</template> 

<script setup lang="ts">
import { useTypingEffect } from '~/composables/useTypingEffect'

definePageMeta({
    layout: 'default'
})

const searchText = ref<string>('')
useHead({
    title: `تاپ نوبت | پزشکان`,
})

</script>