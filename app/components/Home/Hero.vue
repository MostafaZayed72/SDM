<script setup lang="ts">
// استيراد دالة الترجمة (t) ودالة اللغة الحالية (locale) من useI18n
const { t, locale } = useI18n();

// 1. تعريف متغير حالة التحميل باستخدام ref
// يبدأ بـ true (يُظهر الـ Loader)
const isLoading = ref(true);

// 2. تعريف مرجع (Ref) لعنصر الفيديو في الـ DOM
const videoRef = ref<HTMLVideoElement | null>(null);

// متغير Computed لضبط الاتجاه بناءً على اللغة
const isRTL = computed(() => locale.value === 'ar');

// 3. تعريف دالة لمعالجة حدث التحميل الكامل للفيديو
const handleVideoLoaded = () => {
  // عند اكتمال تحميل البيانات الكافية لتشغيل الفيديو
  isLoading.value = false; // إخفاء الـ Loader
  console.log('Video has finished loading!');
};

// 4. استخدام onMounted لتنفيذ الإجراءات بعد تحميل المكون في المتصفح
onMounted(() => {
  if (videoRef.value) {
    // التحقق فورًا مما إذا كان الفيديو قد تم تحميله بالفعل
    // readyState === 4 تعني أن الفيديو جاهز للتشغيل
    if (videoRef.value.readyState >= 3) { // 3 = enough data to play (CAN_PLAY)
        isLoading.value = false;
    } else {
        // إضافة مستمع لحدث 'canplaythrough' أو 'loadeddata'
        // 'canplaythrough': يضمن تحميل بيانات كافية لتشغيله بالكامل دون توقف
        videoRef.value.addEventListener('canplaythrough', handleVideoLoaded);
    }
  }
});

// 5. (اختياري) إزالة مستمع الحدث عند تدمير المكون لتجنب تسرب الذاكرة
onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.removeEventListener('canplaythrough', handleVideoLoaded);
  }
});
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    
    <Transition name="fade">
        <div 
            v-if="isLoading" 
            class="absolute inset-0 bg-white flex items-center justify-center z-50"
        >
            <Loader /> 
        </div>
    </Transition>
    
    <video 
      ref="videoRef"  src="~/assets/hero.mp4" 
      autoplay 
      loop 
      muted 
      playsinline 
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading, 'transition-opacity duration-1000': true }"
      
    ></video>

    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

    <div 
      class="absolute z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24"
      :class="{ 
        'left-0 text-left items-start': !isRTL, 
        'right-0 text-right items-start': isRTL 
      }"
    >
      <img src="~/assets/logo.png" alt="Company Logo" class="mb-4 w-48 h-auto rounded-xl"> 

      <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-64 shadow-2xl">
        {{ t('We are the first in the digital marketing') }} <br>
      </h1>
    </div>
  </div>
</template>

<style scoped>
/* إضافة تأثير انتقال (Fade) لإخفاء Loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>