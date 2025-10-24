<template>
  <div >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="relative overflow-hidden bg-white shadow-xl rounded-lg border border-gray-100">
        
        <div class="flex auto-scroll-logos">
          
          <div 
            v-for="(logo, index) in allLogos" 
            :key="`a-${index}`" 
            class="flex-shrink-0 w-36 h-24 p-4 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
          >
            <img :src="logo.src" :alt="logo.alt" class="max-h-full max-w-full object-contain" />
          </div>

          <div 
            v-for="(logo, index) in allLogos" 
            :key="`b-${index}`" 
            class="flex-shrink-0 w-36 h-24 p-4 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
          >
            <img :src="logo.src" :alt="logo.alt" class="max-h-full max-w-full object-contain" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // البيانات الثابتة (اللوجوهات)
  const allLogos = [
    { src: 'https://placehold.co/100x40/3B82F6/FFFFFF?text=Logo+1', alt: 'Client Logo 1' },
    { src: 'https://placehold.co/100x40/10B981/FFFFFF?text=Logo+2', alt: 'Client Logo 2' },
    { src: 'https://placehold.co/100x40/EF4444/FFFFFF?text=Logo+3', alt: 'Client Logo 3' },
    { src: 'https://placehold.co/100x40/F59E0B/FFFFFF?text=Logo+4', alt: 'Client Logo 4' },
    { src: 'https://placehold.co/100x40/8B5CF6/FFFFFF?text=Logo+5', alt: 'Client Logo 5' },
    { src: 'https://placehold.co/100x40/14B8A6/FFFFFF?text=Logo+6', alt: 'Client Logo 6' },
    { src: 'https://placehold.co/100x40/6366F1/FFFFFF?text=Logo+7', alt: 'Client Logo 7' },
    { src: 'https://placehold.co/100x40/D97706/FFFFFF?text=Logo+8', alt: 'Client Logo 8' },
    // **ملاحظة:** يفضل استبدال الروابط الموقتة بروابط صور اللوجوهات الحقيقية
  ];
</script>

<style scoped>
/*
  تعريف حركة التمرير التلقائي اللانهائية (Infinite Auto Scroll) باستخدام CSS
*/

/* 1. تعريف الحركة (Keyframes) */
@keyframes scrollLeft {
  /* في البداية، تكون في الموضع الأصلي (0%) */
  0% {
    transform: translateX(0);
  }
  /* في النهاية، تتحرك مسافة تعادل طول المجموعة الأولى من اللوجوهات (50% من طول الشريط) */
  100% {
    transform: translateX(-50%);
  }
}

/* 2. تطبيق الحركة على الشريط */
.auto-scroll-logos {
  /* تحديد مدة الحركة (ثانيتين) ونوعها (خطي - لا يتسارع أو يتباطأ) وتكرارها اللانهائي */
  animation: scrollLeft 20s linear infinite; /* تم تعديل المدة إلى 20 ثانية للحركة بالكامل */
  
  /* منع حركة الفأرة من إيقاف أو إبطاء الحركة */
  pointer-events: none; 

  /* ضبط العرض ليكون مضاعفاً لحاوية العرض لإتاحة مساحة للحركة */
  width: max-content; 
}

/* 3. إيقاف الحركة عند التحويم (اختياري) */
/* يمكنك إزالة هذا الجزء إذا كنت تريد الحركة المستمرة دون توقف */
.auto-scroll-logos:hover {
  animation-play-state: paused;
}
</style>