<script setup lang="ts">
import { useLocaleHead } from '#i18n';

useHead(useLocaleHead({
  addDirAttribute: true, 
  identifierAttribute: 'id',
  addSeoAttributes: true 
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

  overflow-x: hidden; 
  /* يضمن أن العرض لا يتجاوز 100% من النافذة */
  width: 100%;

}

/* assets/css/main.css (أو ملف التنسيق الرئيسي) */

body, html {
  /* يمنع التمرير الأفقي ويخفي أي محتوى يخرج عن حدود العرض */
  overflow-x: hidden; 
  /* يضمن أن العرض لا يتجاوز 100% من النافذة */
  width: 100%;
}

</style>

