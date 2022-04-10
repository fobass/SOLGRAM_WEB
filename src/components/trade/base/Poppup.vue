<template>
  <!-- Hardcoded "hover", "openDelay" and "closeDelay" 
  hover openDelay="200" closeDelay="100"-->
  <Popper v-bind="$attrs" >
    <slot />
    <template #content="props">
      <slot name="content" v-bind="props" />
    </template>
  </Popper>
</template>
<script setup lang="ts">

</script>
<!-- 
<style scope>
.popper{
    left: 50px;
}
</style> -->