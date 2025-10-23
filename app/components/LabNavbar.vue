<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 1. تحديد متغير لتتبع موضع التمرير السابق
const lastScrollY = ref(0);
// 2. تحديد متغير للتحكم في ظهور شريط التنقل (إظهار/إخفاء)
const isVisible = ref(true);

/**
 * دالة للتحكم في ظهور شريط التنقل بناءً على اتجاه التمرير
 */
const handleScroll = () => {
  // 3. التحقق من موضع التمرير الحالي
  const currentScrollY = window.scrollY;

  // إذا كان المستخدم في أعلى الصفحة تماماً، يجب إظهار شريط التنقل دائماً
  if (currentScrollY <= 0) {
    isVisible.value = true;
  } 
  // 4. إذا كان التمرير للأعلى (العودة للخلف)
  else if (currentScrollY < lastScrollY.value) {
    isVisible.value = true;
  } 
  // 5. إذا كان التمرير للأسفل (الابتعاد عن أعلى الصفحة)
  else {
    // إخفاء شريط التنقل إذا كان المستخدم قد مرر للأسفل أكثر من 200px (قيمة قابلة للتعديل)
    if (currentScrollY > 200) { 
      isVisible.value = false;
    }
  }

  // 6. تحديث موضع التمرير السابق للمقارنة التالية
  lastScrollY.value = currentScrollY;
};

// 7. إضافة مستمع الحدث عند تحميل المكون
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 8. إزالة مستمع الحدث عند إزالة المكون لمنع تسرب الذاكرة
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
       :class="{ 
          // 💡 تطبيق كلاس الإخفاء أو الإظهار بناءً على isVisible
          '-translate-y-full': !isVisible, 
          'translate-y-0': isVisible 
       }">
       
    <div class="bg-white/70 backdrop-blur-md shadow-xl flex justify-between items-center px-16 py-4 md:text-xl">
      <div class="flex justify-center items-center gap-16 text-tow">
        <img class="w-24 h-16 rounded-xl" src="~/assets/logo.png" alt="">
        <h1 class=" font-bold cursor-pointer hover:text-green-500 transition duration-300">{{ $t('Home') }}</h1>
        <h1 class=" font-bold cursor-pointer hover:text-green-500 transition duration-300">{{ $t('Our work') }}</h1>
        <h1 class=" font-bold cursor-pointer hover:text-green-500 transition duration-300">{{ $t('Projects') }}</h1>
        <h1 class=" font-bold cursor-pointer hover:text-green-500 transition duration-300">{{ $t('Blog') }}</h1>
      </div>
      
      <div class="flex justify-center items-center gap-16 text-tow">
        <h1 class="font-bold cursor-pointer hover:text-green-500 transition duration-300 underline hover:no-underline text-xl md:text-2xl">{{ $t('Contact us') }}</h1>
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>