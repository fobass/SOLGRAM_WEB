<template>

  <div class="p-1">
    <div class="grid grid-cols-5 gap-1">
      <MiniQuote :rowData="miniItems" :key="updateUI"/>
    </div>
  </div>
  <div class="bg-purple-40 h-full px-1 ">
    <DataTable :rowData="items"/>
  </div>

  
</template>

<script setup lang="ts">
import { DataTable, MiniQuote } from '@/components'
import DataService from '@/service/DataService'
import { Stock  } from '@/models/stock.interface'
import {  onMounted, ref } from "vue"

  const items = ref<Stock[]>()
  
  const miniItems = ref<Stock[]>()

  const updateUI = ref<number>(0)

  onMounted(() => {
    DataService.market()
      .then((res: Stock) => {
        
        items.value = res.data
        
        miniItems.value = items.value.slice(0,5)
        updateUI.value += 1
        console.log(res.data)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  })

</script>
