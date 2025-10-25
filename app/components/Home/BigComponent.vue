<template>
  <div class="min-h-screen bg-[#38116b] text-white p-4 md:p-8 rtl">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-12 text-center text-white pt-8" data-aos="fade-down" data-aos-once="true">
        ماذا نفعل - بطريقة NOB
        <span class="block text-7xl mt-4">الخدمات</span>
      </h1>

      <div class="space-y-4">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="relative border-b border-purple-700 cursor-pointer transition-all duration-300 ease-in-out group"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 150"
          data-aos-once="true"
          @click="toggleService(service.id)"
        >
          <div class="flex items-center justify-between p-4 md:p-6 select-none">
            <h2 class="text-xl md:text-3xl font-bold transition-all duration-300 group-hover:text-purple-300 group-hover:translate-x-4">
              {{ service.title }}
            </h2>
            <div class="flex items-center space-x-2 space-x-reverse">
              <span class="text-sm md:text-xl text-purple-400">({{ service.id }})</span>
              <svg :class="['w-5 h-5 transition-transform duration-500', activeServiceId === service.id ? 'rotate-90' : 'rotate-0']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </div>
          </div>

          <div
            :class="[
              'overflow-hidden transition-all duration-700 ease-in-out',
              activeServiceId === service.id ? 'max-h-screen opacity-100 p-4 md:p-6 pt-0' : 'max-h-0 opacity-0',
            ]"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-0 bg-[#320f5c] rounded-lg shadow-xl">
              <div class="md:col-span-2">
                <p class="text-base md:text-lg mb-6 leading-relaxed border-b border-purple-600 pb-4">{{ service.details }}</p>

                <div v-if="service.subItems && service.subItems.length > 0" class="mt-4">
                  <h3 class="text-purple-300 mb-4 font-semibold text-lg border-b border-purple-800 inline-block pb-1">الخدمات الفرعية:</h3>
                  <div class="flex flex-wrap gap-2">
                    <button
                      v-for="(subItem, i) in service.subItems"
                      :key="i"
                      class="px-4 py-2 text-sm bg-purple-700 hover:bg-purple-500 rounded transition-colors duration-300"
                    >
                      {{ subItem }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="hidden md:block md:col-span-1">
                <div class="h-full min-h-[200px] w-full bg-purple-900 rounded-lg flex items-center justify-center p-4">
                  <p class="text-sm text-purple-400 text-center">
                    [صورة أو جرافيك توضيحي <br/> لمحتوى الخدمة]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="pt-16 pb-8 text-center" data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
             <a 
                href="/contact" 
                class="inline-block px-12 py-4 text-2xl font-bold rounded-full bg-white hover:bg-green-500 text-[#38116b] shadow-2xl transition-all duration-300 hover:text-white hover:scale-105"
             >
                ابدأ معنا
             </a>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 1. تعريف حالة الخدمة النشطة
const activeServiceId = ref(null);

// 2. دالة لتبديل حالة الخدمة (تفتح/تغلق)
const toggleService = (id) => {
  if (activeServiceId.value === id) {
    // إذا كان نفس المحتوى مفتوحًا، قم بإغلاقه
    activeServiceId.value = null;
  } else {
    // إذا كان محتوى آخر مفتوحًا، أغلقه وافتح هذا المحتوى (الإغلاق التلقائي)
    activeServiceId.value = id;
  }
};

// 3. بيانات الخدمات (تم تعديل الرقم 009 لإضافة "التخطيط الاستراتيجي" من الصورة)
const services = ref([
  { 
    id: '001', 
    title: 'المحتوى الإبداعي', 
    details: 'تفاصيل المحتوى الإبداعي: إنتاج فيديوهات، تصميم جرافيك، وكتابة محتوى متفرد يخدم أهدافك التسويقية.', 
    subItems: ['إنتاج فيديوهات', 'تصميم جرافيك'] 
  },
  { 
    id: '002', 
    title: 'تسويق المؤثرين', 
    details: 'تجديد الخيال، وتخويل المدفأة الاندفاعية، وتغني بأقرباءتها والتزاماً بمدى ويري.', 
    subItems: ['إدارة علاقات المؤثرين', 'تسويق المؤثرين'] 
  },
  { 
    id: '003', 
    title: 'التسويق الرقمي', 
    details: 'تفاصيل التسويق الرقمي: استراتيجيات متكاملة تشمل SEO، وإعلانات مدفوعة، وإدارة شبكات التواصل الاجتماعي.', 
    subItems: ['إدارة الحملات', 'SEO و SEM'] 
  },
  { 
    id: '004', 
    title: 'شراء الوسائط', 
    details: 'نستنهض الخيال لحسن اختيار الوسيط والمجال، فنشتري المساحات ونجز الأوقات لتبليغ الإعلانات في أنسب الساعات.', 
    subItems: ['استراتيجية الوسائط', 'شراء وسائل الإعلام'] 
  },
  { 
    id: '005', 
    title: 'حلول القوى العاملة', 
    details: 'تفاصيل حلول القوى العاملة: توفير حلول توظيف متخصصة لدعم فريق عملك بكفاءات عالية.', 
  },
  { 
    id: '006', 
    title: 'الإنتاج', 
    details: 'تفاصيل الإنتاج: خدمات إنتاج فيديو احترافية، إنتاج إعلانات، وتصوير فوتوغرافي عالي الجودة.', 
  },
  { 
    id: '007', 
    title: 'التقارير والتحليلات', 
    details: 'تفاصيل التقارير والتحليلات: تقديم تحليلات مفصلة لأداء الحملات وتقارير دورية لاتخاذ القرارات الإستراتيجية.', 
  },
  { 
    id: '008', 
    title: 'العلاقات العامة', 
    details: 'تفاصيل العلاقات العامة: بناء صورة إيجابية للعلامة التجارية وإدارة سمعتها الإعلامية والتواصل مع الجمهور.', 
  },
  { 
    id: '009', 
    title: 'التخطيط الاستراتيجي', 
    details: 'خدمات التخطيط الاستراتيجي: تحديد الأهداف، ورسم خارطة طريق، وإدارة الأداء لضمان النمو المستدام.', 
  },
]);

// 4. تهيئة مكتبة AOS
onMounted(() => {
  if (process.client) {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800, // مدة حركة الظهور
        once: true,    // الحركة تحدث مرة واحدة فقط عند التمرير
      });
    });
  }
});
</script>

<style>
/* 5. تنسيقات CSS أساسية لضمان الشكل */

.rtl {
  direction: rtl;
  text-align: right;
}

body {
  font-family: 'Arial', 'Tahoma', sans-serif;
}
</style>