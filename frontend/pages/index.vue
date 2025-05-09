<template>
    <div class="w-full flex flex-col items-center justify-center pb-12" style="min-height: calc(100vh - 112px);">
        
        <template v-if="step === 1">

            <Vue3Lottie
                :animationData="robotAnimation"
                :height="200"
                :width="200"
                :speed="1"
                :loop="true"
                :autoPlay="true"
            />
    
            <div class="w-full text-gray-800 text-base mt-6 mb-2 px-4 text-center">
                {{ firstText }}
            </div>
    
            <div class="w-full text-gray-800 text-base mb-4 px-4 text-center">
                {{ secondText }}
            </div>
    
            <input :disabled="loading" type="text" @model="inputText" class="w-[300px] lg:w-[460px] h-[40px] rounded-lg border border-slate-200 py-2 px-4 text-center text-gray-800 text-sm" placeholder="برای مثال: گلوم درد میکنه ..." maxLength="255" />
    
            <button :disabled="loading" @click="sendData" class="w-[144px] flex justify-center items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 border border-slate-200 px-4 py-2 text-center text-white transition-all duration-300 text-sm mt-4">
                
                <LoadingSpinner v-if="loading" size="16" class="my-1" />
    
                <span v-else>ارسال</span>
    
            </button>

        </template>

        <template v-else-if="step === 2">

            <div class="w-4/5 lg:w-[600px] flex flex-col justify-center items-center">
                 
                <LoadingSpinner v-if="loading" size="20" class="my-1 border-slate-500" />

                <template v-else>

                    <div class="w-full bg-white rounded-lg text-sm text-start py-4 px-4 mt-4 mb-2 text-gray-800">{{ result }}</div>

                    <DoctorRecord v-if="doctor" class="mb-2" />

                    <button v-if="doctor" class="w-[144px] flex justify-center items-center rounded-lg bg-slate-500 hover:bg-slate-600 border border-slate-200 px-4 py-2 text-center text-white transition-all duration-300 text-sm mt-4" @click="step = 1">
                        <span>بازگشت</span>
                    </button>

                </template>

            </div>

        </template>
        
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

const incomingData = ref<string>('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.')

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

</script>