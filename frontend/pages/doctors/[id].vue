<template>

    <div class="w-full flex flex-col lg:flex-row items-start justify-center pb-12 px-2 lg:px-64 gap-x-6">
        
        <div class="w-full lg:w-3/4 flex flex-col items-center justify-start">

            <div class="w-full flex flex-col lg:flex-row items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">

                <div class="w-24 h-24 rounded-full bg-slate-200"></div>

                <div class="flex flex-col items-center lg:items-start justify-start ps-4 gap-5 mt-4 lg:mt-0 text-center lg:text-start">
                    <div class="text-gray-800 text-sm font-bold">{{ name }}</div>
                    <div class="text-gray-800 text-xs">{{ profession }}</div>
                </div>

                <div class="w-full lg:w-auto flex flex-col items-start justify-start ps-4 gap-5 ms-auto mt-4 lg:mt-0">
                    
                    <div class="w-full flex items-center justify-center lg:justify-end">
                        <Icon name="ic:outline-star" size="16" class="text-gray-200" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />
                    </div>

                    <div class="w-full text-gray-800 text-xs text-center lg:text-start">
                        ثبت نام: 
                        بهمن 1404
                    </div>

                </div>

            </div>

            <div class="w-full flex flex-col items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">

                <div class="w-full text-gray-800 text-sm font-bold border-b border-gray-200 pb-4 mb-4">
                    درباره ی 
                    {{ name }}
                </div>

                <p class="w-full text-gray-800 text-sm">  
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>

            </div>

        </div>

        <div class="w-full lg:w-1/4 flex flex-col items-center justify-start">

            <div class="w-full flex flex-col items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">

                <div class="w-full text-gray-800 text-sm font-bold border-b border-gray-200 pb-4 mb-4">
                    نوبت اینترنتی و مراجعه حضوری
                </div>

                <div class="w-full text-gray-800 text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
                
                <button class="w-full flex justify-center items-center rounded-md bg-indigo-500 hover:bg-indigo-600 py-1.5 px-4 text-center text-white transition-all duration-300 text-sm mt-4 "> رزرو نوبت</button>

            </div>
            
            <div class="w-full flex flex-col items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">

                <div class="w-full text-gray-800 text-sm font-bold border-b border-gray-200 pb-4 mb-4">
                    آدرس و شماره تماس
                </div>

                <div class="w-full flex flex-col items-center justify-start">

                    <div class="w-full flex items-center justify-start gap-2 text-gray-800 text-sm">
                        <div class="flex items-center justify-start gap-2">
                            <Icon name="ic:outline-location-on" size="18" class="text-gray-800" />
                            {{ address }}
                        </div>
                    </div>
                    
                    <a href="tel:{{ phone }}" class="w-full flex items-center justify-center gap-2 mt-4 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-md py-2.5 px-4 text-xs transition-all duration-300 cursor-pointer">
                        <Icon name="ic:outline-phone" size="16" />
                        <div>{{ phone }}</div>
                    </a>
                    
                    <a href="tel:{{ phone }}" class="w-full flex items-center justify-center gap-2 mt-4 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-md py-2.5 px-4 text-xs transition-all duration-300 cursor-pointer">
                        <Icon name="ic:outline-phone" size="16" />
                        <div>{{ phone }}</div>
                    </a>

                    <div class="w-full flex items-center justify-center gap-2 mt-4 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-md py-2.5 px-4 text-xs transition-all duration-300 cursor-pointer" @click="showWorkProgramModel">
                        <Icon name="ic:outline-calendar-month" size="16" />
                        <div>برنامه کاری</div>
                    </div>

                </div>
            </div>

        </div>

        <Transition name="fade">
    
            <div class="w-screen h-screen fixed top-0 left-0 bg-slate-800/50 flex items-center justify-center z-50" v-show="work_program_model" @click="hideWorkProgramModel">
    
                <div class="w-[420px] flex flex-col items-start justify-center bg-white rounded-lg p-4 text-sm" @click.stop>
                
                    <div class="text-base font-bold"> برنامه کاری پزشک  </div>
    
                    <div class="w-full flex flex-col items-start justify-center gap-2 mt-4">
    
                        <table class="w-full text-gray-800">
                            <tbody>
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> شنبه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"> 10:00 - 12:00 </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> یک شنبه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"> 10:00 - 12:00 </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> دوشنبه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"> 10:00 - 12:00 </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> سه شنبه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"> 10:00 - 12:00 </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> چهارشنبه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"> 10:00 - 12:00 </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> پنج شنبه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"> 10:00 - 12:00 </td>
                                </tr>   
                                <tr>
                                    <td class="border border-gray-200 px-3 py-2 text-start"> جمعه </td>
                                    <td class="border border-gray-200 px-3 py-2 text-end"d> - </td>
                                </tr>
                            </tbody>
                        </table>
                
                    </div> 
                    
                </div>
    
            </div>
    
        </Transition>
    
    </div>

</template> 
<script setup lang="ts">

definePageMeta({
    layout: 'default'
})

useHead({
    title: `تاپ نوبت | پزشک`,
})

const route = useRoute()

const id = computed(() => route.params.id)

const name = ref<string>('حسین حسینی حسینی حسینی حسینی حسینی')

const profession = ref<string>('متخصص قلب و عروق متخصص قلب و عروق متخصص قلب و عروق')

const address = ref<string>('تهران، تهران، تهران، تهران، تهران، خیابان آزادی،خیابان آزادی، پلاک 123')

const phone = ref<string>('09123456789')

const work_program_model = ref<boolean>(false)

const hideWorkProgramModel = () => work_program_model.value = false

const showWorkProgramModel = () => work_program_model.value = true

</script>