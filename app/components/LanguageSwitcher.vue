<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// 💡 يجب استخراج setLocale من useI18n() إذا كنت تنوي استخدامها مباشرة
// الطريقة الصحيحة لاستخراج الدوال:
const { locale, locales, setLocale } = useI18n();

// 1. حساب اللغة الأخرى المتاحة
const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>)
    .filter(i => i.code !== locale.value);
});
const changeLanguage = (newLocaleCode: string) => {
  if (newLocaleCode) {
    setLocale(newLocaleCode);
  }
};

const otherLocale = computed(() => availableLocales.value[0]);
const currentFlagIcon = computed(() => locale.value === 'ar' ? 'flag:gb-4x3' : 'flag:sa-4x3');
</script>
<template>
  <div v-if="otherLocale" class="flex items-center ">
    <button class="flex items-center space-x-2 rtl:space-x-reverse
             bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
             text-gray-900 dark:text-white font-medium
             py-4 px-10 rounded-lg transition-colors duration-200 cursor-pointer"
      @click="changeLanguage(otherLocale.code)">
      <Icon :name="currentFlagIcon" class="w-5 h-5" />

      <span class="text-xl">
        {{ otherLocale.name }}
      </span>

      <Icon name="lucide:arrow-right" class="w-4 h-4 rtl:rotate-180" />
    </button>
  </div>
</template>