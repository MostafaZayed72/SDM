<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
    <NuxtLink 
      v-for="(card, index) in projects"
      :key="index"
      :to="card.link" 
      class="block relative overflow-hidden rounded-xl shadow-2xl transition duration-500 transform hover:-translate-y-1 group cursor-pointer"
      data-aos="fade-up"
      :data-aos-delay="index * 150"  >
      <img 
        :src="card.image" 
        :alt="card.title" 
        class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-[1.05]" 
      />
      
      <div 
        class="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-20"
      ></div>
      
      <div class="absolute inset-0 p-5 flex flex-col justify-end text-white">
        <div class="text-xs font-light mb-1 opacity-70">
          {{ card.typeOrDate }}
        </div>

        <h3 class="text-xl md:text-2xl font-extrabold leading-tight">
          {{ card.title }}
        </h3>
        
        <div class="text-sm font-medium mt-1">
          {{ card.clientName }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  // البيانات الثابتة (اللوجيك)
  const projects = [
    { 
      title: 'كلنا نمتك', 
      image: 'https://framerusercontent.com/images/fgVO2sBtPdz2QeJ8WrXmVaN0LQ8.png?scale-down-to=1024', 
      link: '/project/tourism', 
      typeOrDate: '٢٠٢٤ | حملة يوم التأسيس',
      clientName: 'إنتاج | إعلامي'
    },
    { 
      title: 'الإنسان أولاً', 
      image: 'https://framerusercontent.com/images/qsKnJTguCtZrZpy6j1u2IWSCMA4.png', 
      link: '/project/development', 
      typeOrDate: '٢٠٢٤ | اليوم الوطني السعودي ٩٤',
      clientName: 'إنتاج | شراكة وسائل الإعلام'
    },
    { 
      title: 'MicroX خطوة جديدة', 
      image: 'https://framerusercontent.com/images/kJXEpu8dKjuLksqNaONuSLN2sCs.png', 
      link: '/project/microx', 
      typeOrDate: '٢٠٢٥ | حملة المبادرة',
      clientName: 'إنتاج | التسويق الرقمي | إعلامي'
    },
    { 
      title: 'رحلة استكشاف', 
      image: 'https://framerusercontent.com/images/NgeXZONGKLL1Wr5JianIFZ1QQhQ.png?scale-down-to=1024', 
      link: '/project/journey', 
      typeOrDate: '٢٠٢٤ | اليوم الوطني السعودي ٩٤',
      clientName: 'وزارة السياحة | إنتاج تسويق'
    },
    { 
      title: 'أرض وارتد مُحمد', 
      image: 'https://framerusercontent.com/images/t4o1KTRYTKGle05OyXvOofUNCSo.png?scale-down-to=1024', 
      link: '/project/art', 
      typeOrDate: '٢٠٢٥ | حملة يوم التأسيس',
      clientName: 'هيئة المسرح والفنون'
    },
    { 
      title: 'بنت السواعد', 
      image: 'https://framerusercontent.com/images/QH0D6P8DRXHUmj9kKSydTBElrIc.png?scale-down-to=1024', 
      link: '/project/misk', 
      typeOrDate: '٢٠٢٥ | حملة المبادرة',
      clientName: 'إنتاج التسويق الرقمي'
    }
  ];
</script>

<style scoped>
/* لا حاجة لـ CSS مخصص */
</style>