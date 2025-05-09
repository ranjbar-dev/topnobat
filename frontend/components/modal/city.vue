<template>
  <Transition name="fade">

    <div class="w-screen h-screen fixed top-0 left-0 bg-slate-800/50 flex items-center justify-center z-50 px-4" v-show="modal" @click="cityStore.hideModal()">

      <div class="w-full lg:w-[420px] flex flex-col items-start justify-center bg-white rounded-lg p-4 text-sm" @click.stop>
      
        <div class="text-base font-bold"> لطفا شهر خود را انتخاب کنید </div>

        <div class="text-sm text-gray-800 mt-2"> با تغییر شعر پزشکان شهر مورد نظر برای شما در نظر گرفته می شود </div>

        <div class="w-full flex flex-col items-start justify-center gap-2 mt-4">

          <div v-for="city in cities" :key="city.id" class="w-full flex items-center justify-center text-center border border-gray-800 text-gray-800 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white rounded-lg py-2 px-4 cursor-pointer transition-all duration-300 text-xs gap-1" @click="() => updateCity(city.id)">

              <b> {{ city.name }} </b>

                <Icon name="ic:outline-check" size="16" class="text-green-500" v-if="cityId === city.id" />

          </div>
        </div>

           
      </div>

    </div>

  </Transition>
</template>
<script lang="ts" setup>

  const cityStore = useCityStore()

  const { cityId, cities, modal } = storeToRefs(cityStore)

  const updateCity = (id: number) => {

    cityStore.setCityId(id)
    cityStore.hideModal()
  }

</script>