<template>
      <ag-grid-vue
        style="width: 100%; height: 100%"
        class="ag-theme-balham-dark"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="props.rowData"
        
        :rowDragManaged="true"
        :animateRows="true"
        @grid-ready="onGridReady"
      >
      </ag-grid-vue>
</template>
<!-- :getRowHeight="getRowHeight" -->

<script setup lang="ts">
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { AgGridVue } from "ag-grid-vue3"
import { ref, defineProps }  from 'vue'

    const props = defineProps({
        rowData: {
            type: Array
        }
    })

    const columnDefs = ref([
        { headerName: " ", field: "", resizable: false, rowDrag: true, minWidth: 40, maxWidth: 40 },
        { 
            headerName: "Symbol", 
            field: "symbol", 
            cellStyle: { textAlign: 'left' },
            cellRenderer: params => params.value.toUpperCase(),
            maxWidth: 130
        },
        { 
            headerName: "Name", 
            field: "name", 
            type: 'leftAligned', 
            cellStyle: { textAlign: 'left' },
            cellRenderer: params => params.value.toUpperCase()
        },
        // { headerName: "Image", field: "image" },
        { 
            headerName: "Price", 
            field: "current_price", 
            type: 'rightAligned', 
            valueFormatter: currencyFormatter 
        },
        { 
            headerName: "Market Cap", 
            field: "market_cap", 
            type: 'rightAligned',
            valueFormatter: formatter
        },

        { 
            headerName: "Volume", 
            field: "total_volume", 
            type: 'rightAligned',
            valueFormatter: formatter
        },
        { headerName: "High 24h", field: "high_24h", type: 'rightAligned' },
        { headerName: "Low 24h", field: "low_24h", type: 'rightAligned' },
        { headerName: "Change", field: "price_change_24h", type: 'rightAligned' },
        { headerName: "Change%", field: "price_change_percentage_24h", type: 'rightAligned' },
        
    ])

    const defaultColDef = ref({
        sortable: true,
        resizable: true,
        filter: false,
        leftAligned: {
            headerClass: 'ag-left-aligned-header',
            cellClass: 'ag-left-aligned-cell'
        }
    })

    // const getRowHeight = () => {
    //     return 32
    // }

    function formatter(params: any) {
        let formatter = Intl.NumberFormat('en', { notation: 'compact', compactDisplay: "short" })
        return formatter.format(params.value)
    }

    function currencyFormatter(params: any) {
        return '$' + formatNumber(params.value);
    }

    function formatNumber(number: number) {
        const val = Math.floor(number)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        return val
    }
    const gridApi = ref()
    const onGridReady = (params) => {
        gridApi.value = params.api
        gridApi.value.sizeColumnsToFit();
    }
    
</script>

<style>
.ag-root-wrapper {
    border: solid 0px;
    border-radius: 0px;
    border-color: var(--ag-border-color, #0d1117) !important; 
    background-color: var(--ag-background, #0d1117)!important; 
}
.grid-cell-centered {
  text-align: center;
}

</style>