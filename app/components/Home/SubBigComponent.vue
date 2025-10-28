<template>
  <!-- 
    تطبيق تأثير الظهور من اليمين (fade-right) المناسب للمحتوى العربي 
    باستخدام سمة data-aos، وذلك بالاعتماد على تهيئة AOS في الـ Plugin
  -->
  <div class="creative-story-section container mx-auto px-4 ">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8">

      <!-- جزء العنوان الكبير والبنفسجي -->
      <div 
        data-aos="fade-left" 
        data-aos-duration="1000" 
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5B55A9] text-center lg:text-right w-full lg:w-1/3"
      >
اختر صُنّاع الخيال
      </div>

      <div 
        data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-delay="300"
        class="text-lg sm:text-xl text-gray-700 text-center lg:text-right w-full lg:w-2/3 leading-relaxed"
      >
        <p>
لأننا نُحاكي الذُرى بفكرٍ لا يَكلّ، ونُتقن التفاصيل بمنهجٍ لا يخلّ، ونُنجز بفريقٍ يُذهل

        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// هذا المكون لا يحتاج إلى منطق Vue إضافي.
</script>

