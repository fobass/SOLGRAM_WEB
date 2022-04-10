<template>
    <div class="input-container" :class="blockClass">
        <input :readonly="isFocused" ref="inputName" v-model="watchListName" type="text" placeholder="type somethig.." @blur="onBlur"/>
        <span v-if="isError == -1" class="k-icon error"></span>
        <span v-else-if="isError == 1" class="k-icon edit" @click="onClick"></span>

        <div style="color: white"> {{ watchListName }} </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
    const inputName = ref()
    const watchListName = ref('')    
    const blockClass = ref('')
    const isFocused = ref(false)
    const isError = ref(0)

    watch(() => watchListName.value, (newVal) => {
        if (newVal) {
            isError.value = (newVal == 'sss') ? -1 : 0
        }
    })

    const onBlur = () => {
        if (!isFocused.value) {
            blockClass.value = (isError.value == 0) ? 'block' : ''            
        }
        if (isError.value != -1) {
            isError.value = 1
            isFocused.value = true
        } else {
            isFocused.value = false
        }
    }

    const onClick = () => {
        blockClass.value = ''
        const input = inputName.value as any
        isFocused.value = false
        isError.value = 0
        input.focus()
    }

</script>
<style lang="scss" scoped>

.error {
    content: url(/ic-svg/ic_user_off.svg);
}
.edit {
    content: url(/ic-svg/ic_gear_off.svg);
    opacity: 0;
    z-index: -1;
}
.block input{
    background: rgb(136, 46, 46);
}
.input-container {
    position: relative;
    width: 200px;
}
.input-container:hover .k-icon.edit {
    z-index: 1;
    opacity: 1;
}
.input-container .k-icon {
    position: absolute;
    top: 0px;
    right: -5px;
    width: 25px;
    height: 24px;
    background-color: #2af;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
.input-container input {
    display: inline-block;
    width: 100%;
    font-size: 1em;
    height: 22px;
    border-radius: 6px;
    border: 0px;
    box-shadow: 0px 0px 5px 0px rgba(120,120,120,0.5);
}


</style>