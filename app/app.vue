<script setup lang="ts">
import { useLocaleHead } from '#i18n';

useHead(useLocaleHead({
  addDirAttribute: true, 
  identifierAttribute: 'id',
  addSeoAttributes: true ,
   title: 'SMD - Digital Marketing Agency',
}));


</script>

<template>
  <div>
    <LabNavbar class="hidden lg:block"/>
    <SmallNavbar class="block lg:hidden"/>
    
    <NuxtPage />
  </div>
</template>

<style  >
body {
font-family: Tajawal, sans-serif;
}



</style>

