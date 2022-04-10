<template>
 <div class="w-20 flex">
     <area-chart class="flex-initial w-64" width="100%" :min="10" height="30px" :data="lineData" :colors="['#cc0088', '#f59b42']" :library="chartOptions"/>
  </div>
</template>
<script setup lang="ts">
import DataService from '@/service/DataService.ts'
import { MarketChart  } from "@/models/marketchart.interface.ts"
import {  onMounted, ref } from "vue"
import moment from 'moment'

  const lineData = ([
      {name: '', data: {'asd1': 3869.47, '2sdfsd': 3941.2167, '3asd': 3832.155, '4': 3863.6267, '5': 3835.5983,'6': 4083.165,'7': 4041.4583,'8': 4029.9917,'9': 4028.2917}}
    ])
  
  // const lineData = [{
  //   data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}]
  // }]

    const chartOptions = {
        // layout: {
        //     padding: {left: 5, right: 5, top: 0, bottom: 2}
        // },
        scales: {
                y: {
                    display: false // this hides the x-axis
                },
                x: {
                    display: false
                }
        },
        plugins: {
            legend: {
                display: false,
                // labels: {
                //     color: 'rgb(255, 99, 132)'
                // }
            },
            tooltip: {
               enabled: false,
            }
        },
        hover: {
            mode: null
        },
        elements: {
            point:{
                radius: 0
            },
            line: { 
                fill: false 
            }
        }
    }
  
  onMounted(() => {
    DataService.chart()
    .then(res => {
        const dataPrices = res.data.prices;
        var data = {}
        
        for (let key in dataPrices) {
          data = {
            key: dataPrices[key]
          }
          // lineData.value.push(data)
          // const d = moment(key).format("MM/DD")
        }
        
        const name = {
          name: '',
          data: data
        }
        // lineData.value.push(name)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  })

</script>
<style scope>
.chart{
  /* background: blue; */
  width: 100px;
  align: right;
}
</style>