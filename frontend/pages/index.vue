<template>
    <div class="w-full flex flex-col items-center justify-center pb-12" style="height: calc(100vh - 112px);">
        
        <Vue3Lottie
            :animationData="robotAnimation"
            :height="200"
            :width="200"
            :speed="1"
            :loop="true"
            :autoPlay="true"
        />

        <div class="text-gray-800 text-base mt-6 mb-2">
            {{ firstText }}
        </div>

        <div class="text-gray-800 text-base mb-4">
            {{ secondText }}
        </div>

        <input :disabled="loading" type="text" @model="inputText" class="w-[460px] h-[40px] rounded-lg border border-slate-200 py-2 px-4 text-center text-gray-800 text-sm" placeholder="برای مثال: خیلی سرم درد میکنه ..." maxLength="255" />

        <button :disabled="loading" @click="sendData" class="w-[164px] h-[32px] flex justify-center items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 border border-slate-200 px-4 text-center text-white transition-all duration-300 text-sm mt-4">
            
            <LoadingSpinner v-if="loading" size="14" />

            <span v-else>ارسال اطلاعات</span>

        </button>

    </div>
</template> 

<script setup lang="ts">
import robotAnimation from '~/assets/lottie/robot.json'
import { useTypingEffect } from '~/composables/useTypingEffect'

const { displayText: firstText } = useTypingEffect('سلام من ربات تاپ نوبت هستم', 50, 0)
const { displayText: secondText } = useTypingEffect('توی باکس زیر میتونی مشکل ات رو بنویسی تا من برات بهترین دکتر رو برای مراجعه پیدا کنم', 50, 1300)

definePageMeta({
    layout: 'default'
})

useHead({
    title: `Home`,
})

const inputText = ref<string>('')
const loading = ref<boolean>(false)

const sendData = () => {

    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1000)
}

</script>