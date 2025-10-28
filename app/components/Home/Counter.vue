<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// ==========================================================
// 1. Custom Composable: useCounterAnimation.js
// لتشغيل العداد المتحرك
// ==========================================================
/**
 * دالة Composable لإنشاء عداد رقمي متحرك.
 * يتم تضمينها هنا لتوفير الكود كاملاً في ملف واحد.
 * @param {number} finalValue - القيمة النهائية التي سيصل إليها العداد.
 * @param {number} duration - مدة التحريك بالمللي ثانية (ms).
 * @returns {object} - يحتوي على القيمة المتحركة ودالة بدء التحريك.
 */
function useCounterAnimation(finalValue, duration = 1500) {
  // التأكد من أن القيمة النهائية هي رقم
  const numericFinalValue = Number(finalValue);

  const animatedValue = ref(0);
  let animationFrameId = null;
  let startTime = null;

  // دالة تشغيل التحريك
  const startAnimation = () => {
    // إيقاف أي تحريك سابق
    cancelAnimationFrame(animationFrameId);

    const startValue = 0; // دائماً نبدأ من الصفر
    startTime = performance.now();

    const step = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // التخفيف (Easing) يمكن إضافته هنا لتحسين الحركة، نستخدم حالياً تحريكاً خطياً
      const newValue = startValue + (numericFinalValue - startValue) * progress;
      
      // لحساب الأرقام الكبيرة، يمكن تركها كأعداد عشرية حتى اللحظة الأخيرة
      animatedValue.value = Math.round(newValue);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        animatedValue.value = numericFinalValue; // التأكد من القيمة النهائية الدقيقة
        startTime = null;
      }
    };

    animationFrameId = requestAnimationFrame(step);
  };
  
  // دالة الإيقاف
  const stopAnimation = () => {
    cancelAnimationFrame(animationFrameId);
    startTime = null;
  };
  
  // إيقاف التحريك عند إزالة المكون من DOM
  onUnmounted(stopAnimation);

  // إرجاع القيمة المتحركة والدالة لتشغيلها
  return { animatedValue, startAnimation };
}

// ==========================================================
// 2. بيانات الإحصائيات (Stat Data)
// ==========================================================

const statsData = [
  // ملاحظة: تم فصل القيمة الرقمية عن الرموز
  { value: 26, label: 'مشروعاً أنجزناه', suffix: '+', aos: 'fade-up' },
  { value: 36, label: 'معدل ثقة العملاء', suffix: '%', aos: 'fade-up' },
  { value: 50, label: 'فقدت الأفكار، وارتفعت عنوداً', suffix: '+', aos: 'fade-up' },
  { value: 95, label: 'حيث التفاني يثمر، والإبداع يزدهر', suffix: '%', aos: 'fade-up' },
  { value: 300, label: 'إدارة الحساب', suffix: '+', aos: 'fade-up' },
  { value: 6000, label: 'المؤثرون', suffix: 'K+', aos: 'fade-up' },
  { value: 2500, label: 'حملة إعلانات', suffix: 'K', aos: 'fade-up' },
  { value: 250, label: 'تغطية', suffix: '+', aos: 'fade-up' },
];

// دمج بيانات الإحصائيات مع الـ Composable الجديد
const stats = statsData.map(stat => {
  const { animatedValue, startAnimation } = useCounterAnimation(stat.value, 2000); // 2000ms = 2 ثانية
  return {
    ...stat,
    animatedValue,
    startAnimation,
    hasAnimated: ref(false) // لضمان التشغيل مرة واحدة فقط
  };
});

// ==========================================================
// 3. منطق تشغيل العداد عند الظهور (Intersection Observer)
// ==========================================================

let observer = null;

onMounted(() => {
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // جلب مؤشر العنصر من الـ data attribute
          const index = entry.target.dataset.index;
          const statItem = stats[index];
          
          if (statItem && !statItem.hasAnimated.value) {
            statItem.startAnimation();
            statItem.hasAnimated.value = true;
            obs.unobserve(entry.target); // إيقاف المراقبة بعد التشغيل
          }
        }
      });
    }, {
      root: null, 
      threshold: 0.2 // يبدأ العداد عندما يكون 20% من العنصر مرئياً
    });

    // مراقبة كل بطاقة إحصائية
    document.querySelectorAll('.StatCard').forEach((card, index) => {
      card.dataset.index = index; // إضافة مؤشر لربط العنصر في DOM بالـ Ref في Vue
      observer.observe(card);
    });
  }
});

// إيقاف المراقبة عند إزالة المكون
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="bg-white text-gray-800 p-8 md:p-16">
    <div class="max-w-6xl mx-auto rtl">

    

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        
        <div 
          v-for="(stat, index) in stats"
          :key="index"
          class="StatCard group relative p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-200 transition-all duration-500 overflow-hidden shadow-lg 
                hover:shadow-2xl hover:border-purple-500 hover:bg-white hover:scale-[1.03]"
          :data-aos="stat.aos"
          :data-aos-delay="index * 150 + 400"
          data-aos-once="true"
        >
          <p 
            class="text-4xl md:text-5xl font-extrabold mb-3 text-purple-700 transition-transform duration-500 
                  group-hover:translate-x-2 group-hover:text-purple-900"
          >
            {{ stat.animatedValue }}
            {{ stat.suffix }}
          </p>
          
          <p class="text-lg md:text-xl font-semibold text-gray-700 transition-colors duration-300 group-hover:text-purple-900">
            {{ stat.label }}
          </p>

          <span class="absolute top-2 left-2 text-xs text-gray-300 font-mono opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {{ (index + 1).toString().padStart(2, '0') }}
          </span>
        </div>

    

      </div>
    </div>
  </div>
  
</template>