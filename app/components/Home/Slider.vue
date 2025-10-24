<template>
  <div class="w-full bg-gradient-to-b from-gray-50 to-white ">
    <div class="max-w-6xl mx-auto px-4">
    

      <!-- السلايدر -->
      <div class="relative">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
          <!-- الأسهم -->
          <button
            @click="prevSlide"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-600 text-gray-700 hover:text-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-600 text-gray-700 hover:text-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- السلايدات -->
          <div class="overflow-hidden px-8 md:px-12">
            <div class="relative flex items-center" style="min-height: 180px">
              <div
                v-for="(group, groupIndex) in slideGroups"
                :key="groupIndex"
                :class="[
                  'absolute inset-0 transition-all duration-500 flex items-center',
                  groupIndex === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : groupIndex < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                ]"
              >
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
                  <div
                    v-for="(logo, logoIndex) in group"
                    :key="logoIndex"
                    class="flex items-center justify-center p-4 md:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <img
                      :src="logo.src"
                      :alt="logo.alt"
                      class="max-w-full h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      style="max-height: 60px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-center gap-3 mt-8">
          <button
            v-for="(group, index) in slideGroups"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-300 rounded-full',
              currentSlide === index
                ? 'w-12 h-3 bg-one'
                : 'w-3 h-3 bg-tow hover:bg-three'
            ]"
          />
        </div>

        <!-- مؤشر السلايد -->
        <div class="text-center mt-4 text-sm text-gray-500">
          {{ currentSlide + 1 }} / {{ slideGroups.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const currentSlide = ref(0);
const windowWidth = ref(1024); // قيمة افتراضية
let autoPlayInterval = null;

const allLogos = [
  { src: 'https://placehold.co/120x60/3B82F6/FFFFFF?text=Logo+1', alt: 'شعار 1' },
  { src: 'https://placehold.co/120x60/10B981/FFFFFF?text=Logo+2', alt: 'شعار 2' },
  { src: 'https://placehold.co/120x60/EF4444/FFFFFF?text=Logo+3', alt: 'شعار 3' },
  { src: 'https://placehold.co/120x60/F59E0B/FFFFFF?text=Logo+4', alt: 'شعار 4' },
  { src: 'https://placehold.co/120x60/8B5CF6/FFFFFF?text=Logo+5', alt: 'شعار 5' },
  { src: 'https://placehold.co/120x60/14B8A6/FFFFFF?text=Logo+6', alt: 'شعار 6' },
  { src: 'https://placehold.co/120x60/6366F1/FFFFFF?text=Logo+7', alt: 'شعار 7' },
  { src: 'https://placehold.co/120x60/D97706/FFFFFF?text=Logo+8', alt: 'شعار 8' },
  { src: 'https://placehold.co/120x60/EC4899/FFFFFF?text=Logo+9', alt: 'شعار 9' },
  { src: 'https://placehold.co/120x60/22D3EE/FFFFFF?text=Logo+10', alt: 'شعار 10' },
  { src: 'https://placehold.co/120x60/4ADE80/FFFFFF?text=Logo+11', alt: 'شعار 11' },
  { src: 'https://placehold.co/120x60/F87171/FFFFFF?text=Logo+12', alt: 'شعار 12' },
];

// حساب عدد اللوجوهات لكل سلايد بناءً على حجم الشاشة
const logosPerSlide = computed(() => {
  return windowWidth.value < 768 ? 6 : 8;
});

// نقسم اللوجوهات بناءً على حجم الشاشة
const slideGroups = computed(() => {
  const groups = [];
  const itemsPerSlide = logosPerSlide.value;
  
  for (let i = 0; i < allLogos.length; i += itemsPerSlide) {
    groups.push(allLogos.slice(i, i + itemsPerSlide));
  }
  
  return groups;
});

const totalSlides = computed(() => {
  return slideGroups.value?.length || 1;
});

const goToSlide = (index) => {
  currentSlide.value = index;
};

const nextSlide = () => {
  const total = totalSlides.value;
  if (total > 0) {
    currentSlide.value = (currentSlide.value + 1) % total;
  }
};

const prevSlide = () => {
  const total = totalSlides.value;
  if (total > 0) {
    currentSlide.value = (currentSlide.value - 1 + total) % total;
  }
};

// تتبع تغيير حجم الشاشة
const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
    // إعادة تعيين السلايد للأول عند تغيير حجم الشاشة
    currentSlide.value = 0;
  }
};

onMounted(() => {
  // تعيين القيمة الحقيقية للـ window width
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
    // إضافة مستمع لتغيير حجم الشاشة
    window.addEventListener('resize', handleResize);
  }
  
  // تشغيل تلقائي كل 4 ثواني
  autoPlayInterval = setInterval(() => {
    const total = totalSlides.value;
    if (total > 0) {
      currentSlide.value = (currentSlide.value + 1) % total;
    }
  }, 4000);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
  
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
});
</script>