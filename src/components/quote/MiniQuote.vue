<template>
    <div v-for="(item, key) in rowData" :key="key">
        <div class="bg-widget-dark border-widget-0 border-widget-color font-bold text-center rounded-sm p-1 
        hover:bg-widget-hover hover:border-widget-hover cursor-pointer ">
            <div class="grid gid-rows-2 border-0">
                <div class="grid grid-cols-2 border-0">
                    <div class="grid grid-row-2 font-bold border-0">
                        <div class="text-green-500 text-sm font-bold text-left border-0 ">
                        {{ item.symbol.toUpperCase() }}
                        </div>
                        <div class="text-red-500 text- font-bold text-left border-0 "> 
                        {{ item.current_price }}
                        </div>
                    </div>
                    <div class="text-green-500 text-lg font-bold border-0 border-pink-600 grid justify-items-end">
                        <MiniGraph/>
                    </div>
                </div>
                <div class="text-green-500 text-xs text-left ">
                    {{ item.price_change_percentage_24h }}%  volume: {{ item.total_volume }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MiniGraph from './MiniGraph.vue'
import { ref, defineProps }  from 'vue'

    const props = defineProps({
        rowData: {
            type: Array,
            default: () => []
        }
    })
    
    const rowData = ref(props.rowData)
    
</script>