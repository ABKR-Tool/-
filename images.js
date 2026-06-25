// ملف الصور - جميع روابط الصور في موقع بنتي تالين

const IMAGES = {
    // الصور الرئيسية
    hero: {
        main: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=300'
    },

    // صور التصنيفات
    categories: [
        {
            id: 'occasions',
            title: 'فساتين المناسبات',
            url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=500'
        },
        {
            id: 'weddings',
            title: 'فساتين الأفراح',
            url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=500'
        },
        {
            id: 'holidays',
            title: 'فساتين الأعياد',
            url: 'https://images.unsplash.com/photo-1519763698-24f37d9c5f3d?q=80&w=500'
        },
        {
            id: 'modern',
            title: 'تصاميم حديثة',
            url: 'https://images.unsplash.com/photo-1595777712802-cee0a0e45ffe?q=80&w=500'
        }
    ],

    // صورة قسم الموسم
    seasonBackground: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200',

    // صور المعرض / الجاليري
    gallery: [
        {
            title: 'فستان بروكار',
            price: '250 ر.س',
            url: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=400',
            alt: 'فستان أنيق 1'
        },
        {
            title: 'فستان حفلات',
            price: '320 ر.س',
            url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=400',
            alt: 'فستان أنيق 2'
        },
        {
            title: 'فستان منقوش',
            price: '280 ر.س',
            url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=400',
            alt: 'فستان أنيق 3'
        },
        {
            title: 'فستان ستان',
            price: '300 ر.س',
            url: 'https://images.unsplash.com/photo-1519763698-24f37d9c5f3d?q=80&w=400',
            alt: 'فستان أنيق 4'
        },
        {
            title: 'فستان مزخرف',
            price: '290 ر.س',
            url: 'https://images.unsplash.com/photo-1595777712802-cee0a0e45ffe?q=80&w=400',
            alt: 'فستان أنيق 5'
        },
        {
            title: 'فستان كلاسيكي',
            price: '270 ر.س',
            url: 'https://images.unsplash.com/photo-1575866225915-e9d29f03e23e?q=80&w=400',
            alt: 'فستان أنيق 6'
        }
    ]
};

// دالة للوصول للصور بسهولة
function getImage(path) {
    const keys = path.split('.');
    let obj = IMAGES;
    for (let key of keys) {
        obj = obj[key];
        if (!obj) return null;
    }
    return obj;
}

// دالة للحصول على صورة من الجاليري برقمها
function getGalleryImage(index) {
    return IMAGES.gallery[index] || null;
}
