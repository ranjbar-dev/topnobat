<template>
    <div class="w-full flex items-start justify-center pb-12 px-2 lg:px-64 gap-6">
        
        <div class="w-3/4 flex flex-col items-center justify-start">

            <div class="w-full flex items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">

                <div class="w-24 h-24 rounded-full bg-slate-200"></div>

                <div class="flex flex-col items-start justify-start ps-4 gap-5">
                    <div class="text-gray-800 text-sm font-bold">{{ name }}</div>
                    <div class="text-gray-800 text-xs">{{ profession }}</div>
                </div>

                <div class="flex flex-col items-start justify-start ps-4 gap-5 ms-auto">
                    
                    <div class="w-full flex items-center justify-end">
                        <Icon name="ic:outline-star" size="16" class="text-gray-200" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />

                        <Icon name="ic:outline-star" size="16" class="text-yellow-400" />
                    </div>

                    <div class="text-gray-800 text-xs">
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

        <div class="w-1/4 flex flex-col items-center justify-start">

            <div class="w-full flex flex-col items-center justify-start mt-4 px-4 py-4 bg-white rounded-lg">

                <div class="w-full text-gray-800 text-sm font-bold border-b border-gray-200 pb-4 mb-4">
                    نوبت اینترنتی و مراجعه حضوری
                </div>

                <div class="w-full text-gray-800 text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
                
                <button class="w-64 flex justify-center items-center rounded-md bg-indigo-500 hover:bg-indigo-600 py-1.5 px-4 text-center text-white transition-all duration-300 text-sm mt-4 "> رزرو نوبت</button>

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
                    
                    <div class="w-full flex items-center justify-center gap-2 mt-4 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-md py-3 px-4 text-sm transition-all duration-300 cursor-pointer">
                        <Icon name="ic:outline-phone" size="18" />
                        <div>{{ phone }}</div>
                    </div>
                    
                    <div class="w-full flex items-center justify-center gap-2 mt-4 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-md py-3 px-4 text-sm transition-all duration-300 cursor-pointer">
                        <Icon name="ic:outline-phone" size="18" />
                        <div>{{ phone }}</div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template> 

<script setup lang="ts">

const route = useRoute()

const id = computed(() => route.params.id)

const name = ref<string>('حسین حسینی حسینی حسینی حسینی حسینی')

const profession = ref<string>('متخصص قلب و عروق متخصص قلب و عروق متخصص قلب و عروق')

const address = ref<string>('تهران، تهران، تهران، تهران، تهران، خیابان آزادی،خیابان آزادی، پلاک 123')

const phone = ref<string>('09123456789')

</script>