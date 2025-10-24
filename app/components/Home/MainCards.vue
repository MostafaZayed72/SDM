<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-48">
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
      
      <div class="absolute inset-0 p-5 flex flex-col justify-between text-white">
        
        <div class="flex flex-col gap-1">
          <div class="text-xs font-light opacity-70">
            {{ card.typeOrDate }}
          </div>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tag, tagIndex) in card.tags"
              :key="tagIndex"
              class="text-xs font-bold px-2 py-0.5 rounded-full"
              :class="getTagColor(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-xl md:text-2xl font-extrabold leading-tight">
            {{ card.title }}
          </h3>
          
          <div class="text-sm font-medium mt-1">
            {{ card.clientName }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  // دالة لتحديد لون الشارة بناءً على محتواها
  const getTagColor = (tag) => {
    switch (tag) {
      case 'إنتاج':
        return 'bg-red-600 text-white'; 
      case 'إعلامي':
        return 'bg-green-600 text-white';
      case 'التسويق الرقمي':
        return 'bg-blue-600 text-white';
      case 'شراكة وسائل الإعلام':
        return 'bg-yellow-600 text-black';
      case 'تسويق الموثرين':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-700 text-white';
    }
  };

  // البيانات الثابتة (اللوجيك)
  const projects = [
    { 
      title: 'كلنا نمتك', 
      image: 'https://framerusercontent.com/images/fgVO2sBtPdz2QeJ8WrXmVaN0LQ8.png?scale-down-to=1024', 
      link: '/project/tourism', 
      typeOrDate: '٢٠٢٤ | حملة يوم التأسيس',
      clientName: 'وزارة السياحة',
      tags: ['إنتاج', 'إعلامي'] // قائمة الشارات الجديدة
    },
    { 
      title: 'الإنسان أولاً', 
      image: 'https://framerusercontent.com/images/qsKnJTguCtZrZpy6j1u2IWSCMA4.png', 
      link: '/project/development', 
      typeOrDate: '٢٠٢٤ | اليوم الوطني السعودي ٩٤',
      clientName: 'تنمية',
      tags: ['إنتاج', 'شراكة وسائل الإعلام']
    },
    { 
      title: 'MicroX خطوة جديدة', 
      image: 'https://framerusercontent.com/images/kJXEpu8dKjuLksqNaONuSLN2sCs.png', 
      link: '/project/microx', 
      typeOrDate: '٢٠٢٥ | حملة المبادرة',
      clientName: 'MicroX',
      tags: ['إنتاج', 'التسويق الرقمي', 'إعلامي']
    },
    { 
      title: 'رحلة استكشاف', 
      image: 'https://framerusercontent.com/images/NgeXZONGKLL1Wr5JianIFZ1QQhQ.png?scale-down-to=1024', 
      link: '/project/journey', 
      typeOrDate: '٢٠٢٤ | اليوم الوطني السعودي ٩٤',
      clientName: 'وزارة السياحة',
      tags: ['إنتاج', 'تسويق الموثرين']
    },
    { 
      title: 'أرض وارتد مُحمد', 
      image: 'https://framerusercontent.com/images/t4o1KTRYTKGle05OyXvOofUNCSo.png?scale-down-to=1024', 
      link: '/project/art', 
      typeOrDate: '٢٠٢٥ | حملة يوم التأسيس',
      clientName: 'هيئة المسرح والفنون',
      tags: ['إنتاج', 'إعلامي']
    },
    { 
      title: 'بنت السواعد', 
      image: 'https://framerusercontent.com/images/QH0D6P8DRXHUmj9kKSydTBElrIc.png?scale-down-to=1024', 
      link: '/project/misk', 
      typeOrDate: '٢٠٢٥ | حملة المبادرة',
      clientName: 'مسك Misk',
      tags: ['إنتاج', 'التسويق الرقمي']
    }
  ];
</script>

<style scoped>
/* لا حاجة لـ CSS مخصص */
</style>