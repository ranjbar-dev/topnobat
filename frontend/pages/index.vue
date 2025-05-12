<template>
    <div class="w-full flex flex-col items-center justify-center pb-12" style="min-height: calc(100vh - 112px);">
        
        <Transition name="fade"> 

            <div class="w-full flex flex-col items-center justify-center" v-if="step === 1">

                <ClientOnly>
                    <Vue3Lottie
                        :animationData="robotAnimation"
                        :height="200"
                        :width="200"
                        :speed="1"
                        :loop="true"
                        :autoPlay="true"
                    />
                </ClientOnly>
            
                <div class="w-full text-gray-800 text-base mt-6 mb-2 px-4 text-center"> {{ firstText }} </div>
        
                <div class="w-full text-gray-800 text-base mb-4 px-4 text-center"> {{ secondText }} </div>
                    
                <input :disabled="loading" type="text" @model="inputText" class="w-[300px] lg:w-[460px] h-[40px] rounded-lg border border-slate-200 py-2 px-4 text-center text-gray-800 text-sm" placeholder="برای مثال: گلوم درد میکنه ..." maxLength="255" />
        
                <button :disabled="loading" @click="sendData" class="w-[144px] flex justify-center items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 border border-slate-200 px-4 py-2 text-center text-white transition-all duration-300 text-sm mt-4">
                    
                    <LoadingSpinner v-if="loading" size="16" class="my-1" />
        
                    <span v-else>ارسال</span>
        
                </button>

            </div>

        </Transition>

        <div class="w-4/5 lg:w-[600px] flex flex-col justify-center items-center" v-if="step === 2">
                
            <LoadingSpinner v-if="loading" size="20" class="my-1 border-slate-500" />

            <Transition name="fade">

                <div class="w-full flex flex-col justify-center items-center" v-if="!loading">

                    <div class="w-full bg-white rounded-lg text-sm text-start py-4 px-4 mt-4 mb-2 text-gray-800">{{ result }}</div>

                    <TransitionGroup name="fade">
                        <DoctorRecord v-if="doctor" class="mb-2" />
                        <DoctorRecord v-if="doctor" class="mb-2" />
                        <DoctorRecord v-if="doctor" class="mb-2" />
                    </TransitionGroup>

                    <Transition name="fade">
                        <button v-if="doctor" class="w-[144px] flex justify-center items-center rounded-lg bg-slate-500 hover:bg-slate-600 border border-slate-200 px-4 py-2 text-center text-white transition-all duration-300 text-sm mt-4" @click="resetResult">
                            <span>بازگشت</span>
                        </button>
                    </Transition>

                </div>

            </Transition>

        </div>
        
    </div>
</template> 

<script setup lang="ts">
import robotAnimation from '~/assets/lottie/robot.json'
import { useTypingEffect } from '~/composables/useTypingEffect'

const { displayText: firstText } = useTypingEffect('سلام من ربات تاپ نوبت هستم', 25, 0)
const { displayText: secondText } = useTypingEffect('توی باکس زیر میتونی علایم بیماری ات رو بنویسی تا من برات بهترین دکتر رو برای مراجعه پیدا کنم', 25, 650)

definePageMeta({
    layout: 'default'
})

useHead({
    title: `تاپ نوبت | صفحه اصلی`,
})

const inputText = ref<string>('')
const loading = ref<boolean>(false)
const step = ref<number>(1)
const doctor = ref<any>('')
const result = ref<string>('')

const incomingData = ref<string>('متاسفانه شنیدم که شما دچار سرطان هستید. برای مشکلات مربوط به سرطان، بهتر است به دکتر عمومی مراجعه کنید تا وضعیت شما را بررسی کند و در صورت نیاز به متخصص دیگری ارجاع دهد.')

const sendData = () => {

    loading.value = true
    step.value = 2
    setTimeout(() => {
        fillResult()
    }, 1000)
}

const fillResult = () => {

    loading.value = false

    for (let i = 0; i < incomingData.value.length; i++) {
        setTimeout(() => {
            result.value += incomingData.value[i]
        }, i * 10)
    }
    setTimeout(() => {
        doctor.value = 'دکتر حسین عبدالهی'
    }, incomingData.value.length * 10)
}

const resetResult = () => {
    step.value = 1
    result.value = ''
    doctor.value = ''
}
</script>