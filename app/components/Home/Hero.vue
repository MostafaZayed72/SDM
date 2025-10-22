<script setup lang="ts">
// استيراد دالة الترجمة (t) ودالة اللغة الحالية (locale) من useI18n
const { t, locale } = useI18n();

// متغير Computed لضبط الاتجاه بناءً على اللغة
const isRTL = computed(() => locale.value === 'ar');

</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <video 
      src="~/assets/hero.mp4" 
      autoplay 
      loop 
      muted 
      playsinline 
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    ></video>

    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

    <div 
      class="absolute z-20 flex flex-col  justify-center h-full px-8 md:px-16 lg:px-24"
      :class="{ 
        // 💡 لضبط اتجاه المحتوى بناءً على اللغة
        'left-0 text-left items-start': !isRTL,         /* LTR: محاذاة لليسار، النص لليسار */
        'right-0 text-right items-start': isRTL  /* RTL: محاذاة لليمين، النص لليمين، العناصر لليمين */
      }"
    >
      <img src="~/assets/logo.png" alt="Company Logo" class="mb-4 w-48 h-auto rounded-xl"> 

      <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-64 shadow-2xl">
        {{ t('We are the first in the digital marketing') }} <br>
      </h1>
    </div>
  </div>
</template>