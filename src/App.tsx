/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

const STORE_NAME = "مبدعو مكة للمناسبات";
const LICENSE_NUM = "1585570";

// Mapping for product images
const PRODUCT_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=600', // كرسي نابليون
  2: 'https://images.unsplash.com/photo-1533090161939-165f212260d8?q=80&w=600', // طاولة تصفيط
  3: 'https://images.unsplash.com/photo-1577140917179-3354374314d5?q=80&w=600', // طاولة دائرية
  4: 'https://images.unsplash.com/photo-1565557623262-b51c2513a4a1?q=80&w=600', // تلبيسة
  5: 'https://images.unsplash.com/photo-1505731671569-873b22105151?q=80&w=600', // مفرش
  6: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c60d?q=80&w=600', // منفاخ
  7: 'https://images.unsplash.com/photo-1573866926487-a1865558acf9?q=80&w=600', // بالونات
  8: 'https://images.unsplash.com/photo-1596702657743-3929e0618018?q=80&w=600', // هيليوم
  9: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600', // LED Par
  10: 'https://images.unsplash.com/photo-1509395176047-4a6750027a08?q=80&w=600', // Follow Spot
  11: 'https://images.unsplash.com/photo-1558231505-f932f9496464?q=80&w=600', // دخان/فقاعات
  12: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600', // سماعات
  13: 'https://images.unsplash.com/photo-1555072956-775a1a2817e0?q=80&w=600', // أطباق
  14: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8b?q=80&w=600', // صواني
  15: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600', // ثيمات
  16: 'https://images.unsplash.com/photo-1596702657743-3929e0618018?q=80&w=600', // سجادة
  17: 'https://images.unsplash.com/photo-1595152452543-e5fc28eb02d8?q=80&w=600', // شريط
  18: 'https://images.unsplash.com/photo-1540575467063-17855364117e?q=80&w=600', // منصة
  19: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600', // خلفية
  20: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600', // زي
  21: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=600', // مدفع
  22: 'https://images.unsplash.com/photo-1596464406182-3d778d052600?q=80&w=600', // أقواس
  23: 'https://images.unsplash.com/photo-1527529482837-469817946ce5?q=80&w=600', // لافتات
};

const ProductImage = ({ alt, id }: { src: string, alt: string, id: number }) => {
  const imageUrl = PRODUCT_IMAGES[id] || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600'; // Default
  return (
    <div className="relative w-full h-48 mb-4">
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover rounded-lg" 
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/300x300?text=${encodeURIComponent(alt)}`;
        }}
      />
    </div>
  );
};

const InvoiceView = ({ bookingDetails, onBack }: { bookingDetails: any, onBack: () => void }) => (
  <div className="p-8 bg-white" dir="rtl">
    <button onClick={onBack} className="mb-4 text-blue-600 print:hidden">العودة</button>
    <div className="border p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-2">{STORE_NAME}</h1>
      <p>رقم وثيقة الأسرة المنتجة: {LICENSE_NUM}</p>
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-4">فاتورة رسمية</h2>
      <p>اسم العميل: {bookingDetails.name}</p>
      <p>رقم الجوال: {bookingDetails.phone}</p>
      <p>التاريخ: {bookingDetails.date}</p>
      <div className="mt-6">
        <h3 className="font-bold">المنتجات:</h3>
        {bookingDetails.items.map((item: any, i: number) => (
          <p key={i}>{item.name} - الكمية: {item.qty}</p>
        ))}
        <p className="font-bold mt-4 text-xl">الإجمالي: {bookingDetails.total} ريال</p>
      </div>
      <p className="mt-8 text-sm text-gray-600">
        يقر العميل بالتزامه ببند العهدة والتلفيات، وعربون سياسة الإلغاء، وغرامات التأخير كما هو موضح في عقد التأجير.
      </p>
    </div>
    <button onClick={() => window.print()} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded print:hidden">طباعة الفاتورة</button>
  </div>
);



const AboutContact = ({ onBack }: { onBack: () => void }) => (
  <div className="p-8" dir="rtl">
    <button onClick={onBack} className="mb-4 text-blue-600">العودة</button>
    <h1 className="text-3xl font-bold mb-4">من نحن</h1>
    <p className="mb-4">مرحباً بكم في متجرنا المتخصص في تنظيم الحفلات وتأجير مستلزمات المناسبات والافتتاحيات بـ مكة المكرمة.</p>
    <p className="mb-4">نحن مشروع سعودي مسجل رسمياً تحت مظلة وثيقة تسجيل الأسرة المنتجة (رقم: {LICENSE_NUM}) الصادرة من بنك التنمية الاجتماعية. نهدف إلى تقديم حلول متكاملة وعصرية تجعل من كل احتفال ومناسبة تجربة استثنائية تُحفر في الذاكرة.</p>
    
    <h2 className="text-2xl font-bold mb-2">رؤيتنا</h2>
    <p className="mb-4">أن نكون الخيار الأول والموثوق لأهالي وسكان مكة المكرمة والمؤسسات والشركات في تجهيز وتنظيم كافة أنواع الاحتفالات، من خلال توفير أحدث الديكورات وأجود مستلزمات الضيافة والتأجير بأسعار تنافسية وخيارات مرنة.</p>
    
    <h2 className="text-2xl font-bold mb-2">رسالتنا</h2>
    <p className="mb-4">تبسيط وتسهيل عملية تجهيز المناسبات عبر منصة واحدة تجمع بين التنوع، الجودة العالية، الالتزام التام بالمواعيد، والحفاظ على حقوق عملائنا وفق أعلى المعايير التجارية والقانونية.</p>

    <h2 className="text-2xl font-bold mb-2">ماذا نقدم؟</h2>
    <ul className="list-disc pr-5 mb-4 space-y-1">
      <li>تجهيز الافتتاحيات والفعاليات</li>
      <li>تأجير أثاث الحفلات</li>
      <li>الكوش والديكورات المضيئة</li>
      <li>معدات الضيافة والتقديم</li>
      <li>الإضاءة والصوتيات</li>
    </ul>

    <div className="flex gap-4 mt-6">
      <a href="https://wa.me/966XXXXXXXXX" target="_blank" className="px-4 py-2 bg-green-500 text-white rounded">واتساب</a>
      <a href="tel:+966XXXXXXXXX" className="px-4 py-2 bg-blue-500 text-white rounded">اتصال</a>
    </div>
  </div>
);

const TermsAgreement = ({ onAccept, onBack }: { onAccept: () => void, onBack: () => void }) => (
  <div className="p-8" dir="rtl">
    <button onClick={onBack} className="mb-4 text-blue-600">العودة</button>
    <h1 className="text-2xl font-bold mb-4">الشروط والأحكام - {STORE_NAME}</h1>
    <ul className="list-disc pr-5 mb-4 space-y-2">
      <li><strong>العهدة والتلفيات:</strong> يلتزم العميل بدفع قيمة التعويض المالي في حال تلف أي أداة.</li>
      <li><strong>العربون والإلغاء:</strong> دفع عربون 50%، ولا يُسترد عند الإلغاء قبل المناسبة بـ 48 ساعة.</li>
      <li><strong>وقت الاسترجاع:</strong> غرامة 100 ريال عن كل ساعة تأخير.</li>
    </ul>
    <button onClick={onAccept} className="px-6 py-2 bg-blue-600 text-white rounded">أوافق وأكمل الطلب</button>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'كرسي نابليون أبيض', price: 120, category: 'أثاث' },
    { id: 2, name: 'طاولة تصفيط 180 سم', price: 276, category: 'أثاث' },
    { id: 3, name: 'طاولة دائرية', price: 200, category: 'أثاث' },
    { id: 4, name: 'تلبيسة كرسي استرتش', price: 20, category: 'أثاث' },
    { id: 5, name: 'مفرش طاولة كبير', price: 70, category: 'أثاث' },
    { id: 6, name: 'منفاخ بالونات كهربائي', price: 38, category: 'أدوات' },
    { id: 7, name: 'ربطة بالونات (100 حبة)', price: 25, category: 'أدوات' },
    { id: 8, name: 'أسطوانة هيليوم تجارية', price: 450, category: 'أدوات' },
    { id: 9, name: 'إضاءة LED Par', price: 150, category: 'إضاءة' },
    { id: 10, name: 'كشاف تتبع (Follow Spot)', price: 900, category: 'إضاءة' },
    { id: 11, name: 'آلة دخان/فقاعات', price: 300, category: 'إضاءة' },
    { id: 12, name: 'سماعات متنقلة (مع مايك)', price: 600, category: 'صوتيات' },
    { id: 13, name: 'أطباق تقديم فاخرة', price: 40, category: 'ضيافة' },
    { id: 14, name: 'طقم صواني وقهوة', price: 300, category: 'ضيافة' },
    { id: 15, name: 'ثيمات وتوزيعات', price: 50, category: 'احتفالات' },
    { id: 16, name: 'سجادة حمراء', price: 200, category: 'افتتاحات' },
    { id: 17, name: 'طقم قص الشريط', price: 120, category: 'افتتاحات' },
    { id: 18, name: 'منصة عرض', price: 300, category: 'افتتاحات' },
    { id: 19, name: 'خلفية تصوير', price: 500, category: 'مناسبات' },
    { id: 20, name: 'زي شخصية كرتونية', price: 350, category: 'شخصيات' },
    { id: 21, name: 'مدفع قصاصات ورقية', price: 60, category: 'احتفالات' },
    { id: 22, name: 'أقواس بالونات جاهزة', price: 150, category: 'احتفالات' },
    { id: 23, name: 'لافتات ترحيبية', price: 80, category: 'احتفالات' },
  ];

  const total = products.reduce((sum, item) => sum + item.price * (quantities[item.id] || 0), 0);

  const categories = ['الكل', ...Array.from(new Set(products.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  
  const filteredProducts = products.filter(p => 
    (selectedCategory === 'الكل' || p.category === selectedCategory) &&
    p.name.includes(searchTerm)
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <AboutContact onBack={() => setCurrentPage('home')} />;
      case 'terms': return <TermsAgreement onBack={() => setCurrentPage('home')} onAccept={() => setCurrentPage('booking')} />;
      case 'booking': return (
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100" dir="rtl">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">نموذج حجز وتأجير المستلزمات</h1>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const occasion = formData.get('occasion');
            const date = formData.get('date');
            const location = formData.get('location');
            const items = products.filter(p => quantities[p.id] > 0).map(p => `${p.name} (الكمية: ${quantities[p.id]})`).join(', ');
            const message = `طلب حجز جديد:\nالاسم: ${name}\nالمناسبة: ${occasion}\nالتاريخ: ${date}\nالموقع: ${location}\nالمنتجات: ${items}\nالإجمالي: ${total.toFixed(2)} ريال سعودي`;
            window.open(`https://wa.me/966XXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
          }}>
            <input name="name" type="text" placeholder="الاسم الثلاثي / اسم الشركة أو المحل" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            <input name="occasion" type="text" placeholder="نوع المناسبة (افتتاح، زفاف، ملكة، حفلة خاصة)" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            <input name="date" type="datetime-local" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            <input name="location" type="text" placeholder="العنوان والحي (داخل مكة المكرمة)" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            <div className="border border-gray-100 bg-gray-50 p-5 rounded-2xl">
              <h2 className="font-bold mb-3 text-gray-800">ملخص الحجز والعهدة:</h2>
              {products.filter(p => quantities[p.id] > 0).map(p => (
                <p key={p.id} className="text-gray-600 mb-1">{p.name} - الكمية: {quantities[p.id]}</p>
              ))}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="font-bold text-gray-800">إجمالي قيمة الحجز والتأجير: {total.toFixed(2)} ريال سعودي</p>
                <p className="font-bold text-gray-800 mt-1">مبلغ التأمين/العهدة: {(total * 0.2).toFixed(2)} ريال سعودي</p>
              </div>
              <p className="text-sm mt-3 text-gray-500 italic">ملاحظة: يلتزم العميل بالشروط والأحكام وعقد العهدة المعتمد.</p>
            </div>
            <button type="submit" className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-colors">تأكيد وإرسال الطلب</button>
            <button type="button" onClick={() => {
              const items = products.filter(p => quantities[p.id] > 0).map(p => `${p.name} (الكمية: ${quantities[p.id]})`).join(', ');
              const message = `عرض سعر من ${STORE_NAME}:\nالمنتجات: ${items}\nالإجمالي: ${total.toFixed(2)} ريال سعودي`;
              window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
            }} className="w-full px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-2xl font-bold text-lg transition-colors">مشاركة عرض السعر عبر واتساب</button>
          </form>
        </div>
      );
      default: return (
        <div className="p-4" dir="rtl">
          {/* Promotional Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 mb-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">احتفالاتك معنا غير!</h2>
            <p className="text-lg mb-6">اكتشف أحدث تشكيلة من الشخصيات الكرتونية، أقواس البالونات الاحترافية، وكافة مستلزمات الافتتاحيات والمناسبات بأسعار منافسة.</p>
            <div className="flex gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">خصم 20% على باقات الافتتاح</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">عروض خاصة للشركات</span>
            </div>
          </div>
          <div className="mb-8">
             <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                    <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{cat}</button>
                ))}
             </div>
          </div>
          <div className="relative mb-6">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input className="w-full p-4 pr-12 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="بحث عن مستلزمات..." onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                <ProductImage src={`https://source.unsplash.com/random/300x300?sig=${p.id}&${p.name.replace(/\s+/g, '+')}`} alt={p.name} id={p.id} />
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">{p.name}</h3>
                  <p className="text-blue-600 font-bold mb-4">{p.price} ريال</p>
                  <div className="flex items-center justify-between">
                    <button onClick={() => setQuantities(prev => ({ ...prev, [p.id]: Math.max(0, (prev[p.id] || 0) - 1) }))} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">-</button>
                    <span className="mx-3 font-mono font-bold text-lg">{quantities[p.id] || 0}</span>
                    <button onClick={() => setQuantities(prev => ({ ...prev, [p.id]: (prev[p.id] || 0) + 1 }))} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button onClick={() => setCurrentPage('terms')} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-colors">إتمام الطلب</button>
            <button onClick={() => setCurrentPage('about')} className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-2xl font-bold transition-colors">من نحن</button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" dir="rtl">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{STORE_NAME}</h1>
          <nav className="flex gap-4">
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-blue-600">الرئيسية</button>
            <button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-blue-600">من نحن</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
}
