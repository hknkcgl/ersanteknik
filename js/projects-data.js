/**
 * ERSAN TEKNİK MÜHENDİSLİK & İNŞAAT - PROJELER VERİ TABANI
 * 
 * Yeni bir bina veya inşaat eklemek için bu listeye yeni bir obje eklemeniz yeterlidir.
 * "images" dizisi içine eklediğiniz her resim, kart altında yan yana önizleme olarak
 * listelenir ve resme tıklandığında açılan fotoğraf galerisinde tam ekran gösterilir.
 */

const ERSAN_PROJECTS = [
  {
    id: "ersan-prestij-konutlari",
    title: "Ersan Prestij Konutları",
    subtitle: "24 Daire + 4 Ticari Dükkan",
    category: "tamamlanan",
    categoryLabel: "Tamamlanan Projeler",
    type: "Lüks Konut & Ticari",
    location: "İstiklal Mahallesi, Çan / Çanakkale",
    year: "2024",
    status: "Teslim Edildi • Yaşam Başladı",
    badgeColor: "success",
    description: "Çan merkezde deprem yönetmeliğine tam uyumlu radye temel, C35 yüksek dayanımlı betonarme sistem, yerden ısıtma, lüks ankastre mutfak ve özel tasarım kapalı otoparklı prestij projemiz.",
    features: [
      "Depreme Dayanıklı C35 Betonarme Sistem",
      "Kaya Zemin Üzeri Radye Jeneral Temel",
      "Doğalgazlı Yerden Isıtma Sistemi",
      "Görüntülü Diafon & Güvenlik Altyapısı",
      "Kapalı Otopark & Asansör",
      "E.C.A. & VitrA Armatür Grubu"
    ],
    // İlk resim kapak resmi olarak kullanılır, diğerleri ilave resimlerdir
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
        caption: "Bina Dış Cephe & Cadde Görünümü"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
        caption: "3+1 Örnek Daire Salon & Ferah Yaşam Alanı"
      },
      {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
        caption: "Özel Tasarım Ada Mutfak & Ankastre Donanım"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
        caption: "Hilton Banyo & Modern Seramik Kaplamalar"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        caption: "Bina Gece Cephe Aydınlatması"
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
        caption: "Statik Mühendislik & Kat Planı Analizi"
      }
    ]
  },
  {
    id: "ersan-park-rezidans",
    title: "Ersan Park Rezidans",
    subtitle: "18 Lüks Konut Dairesi",
    category: "tamamlanan",
    categoryLabel: "Tamamlanan Projeler",
    type: "Modern Konut",
    location: "Atatürk Mahallesi, Çan / Çanakkale",
    year: "2023",
    status: "Teslim Edildi",
    badgeColor: "success",
    description: "Şehir merkezine yürüme mesafesinde, geniş balkonlu ve yeşil alan manzaralı, yüksek tavanlı modern mimari tasarımıyla Çan'ın parlayan projelerinden biri.",
    features: [
      "Geniş Cam Cephe & Isı Yalıtımlı Çift Cam",
      "Akıllı Ev Alt Yapısı & Fiber İnternet",
      "Geniş Peyzaj & Çocuk Parkı Alanı",
      "Otomatik Yangın Algılama & Springler",
      "Ses Yalıtımlı Komşu Duvar Blokları"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80",
        caption: "Park Rezidans Ön Cephe & Balkon Detayları"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
        caption: "Geniş Pencereli Ferah Oturma Odası"
      },
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
        caption: "Örnek Daire Ebeveyn Yatak Odası & Giyinme Alanı"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
        caption: "Geniş Cam Balkon & Şehir Manzarası"
      }
    ]
  },
  {
    id: "ordu-caddesi-konutlari",
    title: "Ordu Caddesi Konutları",
    subtitle: "16 Daire + 2 Dubleks",
    category: "devam-eden",
    categoryLabel: "Devam Eden Projeler",
    type: "Kentsel Dönüşüm & Konut",
    location: "İstiklal Mah., Ordu Sokak, Çan / Çanakkale",
    year: "2025 - 2026",
    status: "İnşaat Devam Ediyor • Satışta",
    badgeColor: "warning",
    description: "Ofisimizin de yer aldığı Ordu Sokak bölgesinde başlattığımız, en son inşaat teknolojileri ve sismik güvenlik standartları ile yükselen yeni nesil yaşam projesi.",
    features: [
      "Deprem Dayanım Katsayısı Yüksek C35/40 Beton",
      "Jeolojik Zemin İyileştirme & Güçlendirme",
      "Her Daireye Özel Numaralı Otopark",
      "2+1 ve 3+1 Dubleks Seçenekleri",
      "Krediye Uygun & Esnek Ödeme İmkânı"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=400&q=80",
        caption: "Şantiye Demir Donatı ve Betonarme Karkas Süreci"
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        caption: "3D Mimari Dış Cephe Tasarım Renderı"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
        caption: "Daire İç Mimari 3D Modelleme"
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
        caption: "İnşaat Mühendisliği Ruhsat & İmar Projesi"
      }
    ]
  },
  {
    id: "yenice-doga-villalari",
    title: "Yenice Doğa Villaları",
    subtitle: "8 Adet Müstakil Akıllı Villa",
    category: "villa",
    categoryLabel: "Villa & Müstakil",
    type: "Lüks Müstakil Villa",
    location: "Kurtuluş Mahallesi, Yenice / Çanakkale",
    year: "2024",
    status: "Tamamlandı • Yaşam Başladı",
    badgeColor: "success",
    description: "Kaz Dağları eteklerinde, doğayla iç içe, özel bahçeli, şömineli ve akıllı ev otomasyonlu müstakil yaşam hayalini gerçeğe dönüştüren butik projemiz.",
    features: [
      "450 m² Müstakil Özel Bahçe Alanı",
      "Özel Otopark & Barbekü Verandası",
      "Şömine & Yerden Isıtma Uyumu",
      "Akıllı Ev Kontrol & Kamera Sistemi",
      "Doğal Ahşap ve Taş Kaplama Dış Cephe"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
        caption: "Villa Dış Cephe ve Özel Bahçe Girişi"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
        caption: "Güneşlenme Terası ve Bahçe Verandası"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
        caption: "Yüksek Tavanlı Şömineli Villa Salonu"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80",
        caption: "Açık Mutfak ve Yemek Alanı"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=400&q=80",
        caption: "Geniş Ebeveyn Süiti ve Doğa Manzarası"
      }
    ]
  },
  {
    id: "can-ticaret-merkezi",
    title: "Ersan İş ve Ticaret Merkezi",
    subtitle: "12 Bağımsız Bölüm Ofis & Mağaza",
    category: "ticari",
    categoryLabel: "Ticari & İş Merkezi",
    type: "İş Merkezi & Ticari Yapı",
    location: "Merkez, Çan / Çanakkale",
    year: "2023",
    status: "Tamamlandı",
    badgeColor: "info",
    description: "Çan'ın en işlek noktasında modern kurumsal ofisler, banka ve kurumsal firmalara uygun yüksek tavanlı cadde dükkanları ile donatılmış iş merkezi projesi.",
    features: [
      "Modern Alüminyum Kompozit & Silikon Cam Cephe",
      "Yüksek Taşıma Kapasiteli Hidrolik Asansör",
      "Merkezi VRF Isıtma & Soğutma Altyapısı",
      "Jeneratör & Su Deposu Yedekleme Sistemi",
      "Engelli Erişimine %100 Uygun Rampalı Mimari"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
        caption: "İş Merkezi Modern Dış Cephe & Giriş Meydanı"
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80",
        caption: "Geniş ve Ferah Kurumsal Ofis Katı"
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80",
        caption: "Toplantı ve Yönetim Salonu"
      }
    ]
  },
  {
    id: "can-vadi-evleri",
    title: "Çan Vadi Evleri",
    subtitle: "32 Dairelik Yaşam Kompleksi",
    category: "tamamlanan",
    categoryLabel: "Tamamlanan Projeler",
    type: "Site Yaşam Konutları",
    location: "Karşıyaka Mahallesi, Çan / Çanakkale",
    year: "2022",
    status: "Teslim Edildi • Yaşam Başladı",
    badgeColor: "success",
    description: "Geniş peyzaj alanları, açık spor ve çocuk aktivite sahaları ile ailelere huzurlu ve güvenli bir yaşam ortamı sunan 2 bloklu konut sitesi.",
    features: [
      "Çocuk Oyun Parkı & Kamelyalar",
      "7/24 Güvenlik Kamerası & Şifreli Giriş",
      "Açık Site İçi Otopark",
      "Mantolama Dış Cephe Taşyünü Isı Yalıtımı",
      "Geniş Salon & Ayrı Çamaşır Odası"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
        caption: "Site Blokları ve Peyzaj Düzenlemesi"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
        caption: "Geniş Pencereli Salon ve Aydınlık Yaşam Alanı"
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
        caption: "Modern Lüks Mutfak Tasarımı"
      }
    ]
  }
];

// Dışa aktarma veya pencereye ekleme (Vanilla JS uyumluluğu)
if (typeof window !== "undefined") {
  window.ERSAN_PROJECTS = ERSAN_PROJECTS;
}
