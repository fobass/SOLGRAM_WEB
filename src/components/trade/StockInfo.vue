<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="text-green-500 font-bold text-left border-0">            
             <Poppup arrow placement="bottom">
                <Button>BTC/ USD</Button>
                <template #content>
                    <div class=" bg-popup-dark border-widget-1 border-widget-color rounded-sm p-0 h-52 w-98">
                        <!-- <div class="bg-app-dark border-widget-1 border-widget-color font-bold text-center rounded-md"> -->
                            <!-- <input type="input" name="search" value="" placeholder="search" class="bg-widget-dark w-full p-0 mb-1 text-sm 
                            rounded-md z-0 focus:shadow focus:outline-none"> -->

                            <div class="flex items-center px-2 py-1 text-sm cursor-pointer hover:bg-app-dark">
                                <div class="grow w-full">
                                   <div> Oslo </div>
                                   <div class="text-vsm text-gray-300 "> dsffsd </div>
                                </div>
                                <div class="flex-none">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        class="h-5 w-5" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <div class="flex items-center px-2 py-1 text-sm cursor-pointer hover:bg-app-dark">
                                <div class="grow w-full">
                                   <div> Oslo </div>
                                   <div class="text-vsm text-gray-300 "> dsffsd </div>
                                </div>
                                <div class="flex-none">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        class="h-5 w-5" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                                
                        <!-- </div> -->
                        
                    </div>
                </template>
            </Poppup>
        </div>
        <div class="grid-rows-2">
            <div class="text-font-dark text-xs font-thin text-left">
                24 Change
            </div>
            <div class="text-green-500 text-sm font-bold text-left">
                20 +0.19%
            </div>
        </div>
        <div class="grid-rows-2">
            <div class="text-font-dark text-xs font-thin text-left">
                24 High
            </div>
            <div class="text-indigo-200 text-sm font-bold text-left">
                14,395
            </div>
        </div>
        <div class="grid-rows-2">
            <div class="text-font-dark text-xs font-thin text-left">
                24 Low
            </div>
            <div class="text-indigo-200 text-sm font-bold text-left">
                14,395
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Poppup from './base/Poppup.vue'
    
    // const items = ref([''])

</script>

<style scope>
.popper{
    left: 60px!important;
}
  :deep(.popper) {
    background: #e92791;
    /* padding: 20px; */
    left: 170px;
    /* border-radius: 20px; */
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }

  /* :deep(.popper #arrow::before) {
    background: #e92791;
  }

  :deep(.popper:hover),
  :deep(.popper:hover > #arrow::before) {
    background: #e92791;
  } */
  :root(.popper) {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>