<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 💡 1. منطق شريط التنقل الذكي (لإظهار/إخفاء الشريط العلوي بالكامل)
const lastScrollY = ref(0);
const isVisible = ref(true);

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  // ... (منطق Smart Header كما هو)
  if (currentScrollY <= 0) {
    isVisible.value = true;
  } else if (currentScrollY < lastScrollY.value) {
    isVisible.value = true;
  } else {
    if (currentScrollY > 200) { 
      isVisible.value = false;
    }
  }
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 💡 2. منطق Burger Menu
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // منع تمرير الصفحة
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
    :class="{ 
      '-translate-y-full': !isVisible, 
      'translate-y-0': isVisible 
    }">
    
    <div class="bg-white shadow-xl flex justify-between items-center px-4 md:px-6 py-3">
      
      <img class="w-24 h-16 rounded-xl" src="~/assets/logo.png" alt="">
      
      <button @click="toggleMenu" class="focus:outline-none z-50">
        <Icon :name="isMenuOpen ? 'ri:close-line' : 'ri:menu-line'" 
              class="w-8 h-8 transition-transform duration-300" />
      </button>
    </div>

    <Transition name="slide-down">
      <div v-if="isMenuOpen" 
           class="fixed top-0 left-0 w-full h-screen bg-white z-40 pt-[75px] shadow-2xl overflow-y-auto">
           <div class="flex flex-col items-start px-8 py-4 space-y-6 text-xl">
          
          <h1 class="w-full py-2 font-bold cursor-pointer hover:text-green-500 transition duration-300" @click="closeMenu">{{ $t('Home') }}</h1>
          <h1 class="w-full py-2 font-bold cursor-pointer hover:text-green-500 transition duration-300" @click="closeMenu">{{ $t('Our work') }}</h1>
          <h1 class="w-full py-2 font-bold cursor-pointer hover:text-green-500 transition duration-300" @click="closeMenu">{{ $t('Projects') }}</h1>
          <h1 class="w-full py-2 font-bold cursor-pointer hover:text-green-500 transition duration-300" @click="closeMenu">{{ $t('Blog') }}</h1>

          <div class="w-full h-px bg-gray-200 my-2"></div> <h1 class="w-full pt-2 font-bold cursor-pointer text-2xl hover:text-green-500 transition duration-300 underline hover:no-underline" @click="closeMenu">{{ $t('Contact us') }}</h1>
          
          <div class="w-full pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
/* 💡 حركة انزلاق من الأعلى */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>