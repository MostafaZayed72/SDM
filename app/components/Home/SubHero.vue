<template>
  <!-- 
    تطبيق تأثير الظهور من اليمين (fade-right) المناسب للمحتوى العربي 
    باستخدام سمة data-aos، وذلك بالاعتماد على تهيئة AOS في الـ Plugin
  -->
  <div class="creative-story-section container mx-auto px-4 py-16">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8">

      <!-- جزء العنوان الكبير والبنفسجي -->
      <div 
        data-aos="fade-left" 
        data-aos-duration="1000" 
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5B55A9] text-center lg:text-right w-full lg:w-1/3"
      >
        صَنَعْنا الخيال
      </div>

      <div 
        data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-delay="300"
        class="text-lg sm:text-xl text-gray-700 text-center lg:text-right w-full lg:w-2/3 leading-relaxed"
      >
        <p>
          و نغزل في كل مشروع، فكرة فريدة ونطلقها إلى العالم على هيئة قصة تستحق أن تُروى... 
          هنا نشارككم بعضًا من حكاياتنا التي خُلقت بإبداع، ونُفّذت بشغف، وصُنعت لِتُلهِم
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// هذا المكون لا يحتاج إلى منطق Vue إضافي.
</script>

<style scoped>
/* التصاميم المستخدمة تعتمد على Tailwind CSS (mx-auto, px-4, flex, lg:text-right, إلخ) 
  لتكون مستجيبة (Responsive) وتعمل على اللابتوب والموبايل.
*/

.creative-story-section {
    /* يمكنك إضافة المزيد من التصاميم الخاصة هنا إذا لزم الأمر */
}

/* ملاحظة: الخط 'Tajawal' تم تعريفه بالفعل في ملف app.vue، 
  وسيتم تطبيقه تلقائياً هنا.
*/

/* للحصول على نفس تأثير الخط السميك جداً والمميز للعناوين، قد تحتاج إلى استيراد
  وزن خط (Font Weight) إضافي أو استخدام خط مخصص للعنوان، لكن مبدئياً نعتمد على 
  'font-extrabold' المتوفر في Tailwind.
*/
</style>
