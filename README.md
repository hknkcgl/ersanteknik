# Ersan Teknik Mühendislik & İnşaat - Resmi Web Sitesi

Çanakkale’nin **Çan** ilçesinde faaliyet gösteren, **İnşaat Mühendisi Osman Nuri Duran** liderliğindeki **Ersan Teknik Mühendislik İnşaat Ltd. Şti.** için özel olarak tasarlanmış, modern, responsive ve yüksek performanslı statik web sitesi.

---

## 🏢 Firma Bilgileri (Çan & Yenice)

* **Firma Ünvanı:** Ersan Teknik Mühendislik İnşaat Ltd. Şti.
* **Yetkililer & Mühendis/Mimar Kadrosu:**
  - İnş. Müh. Osman Nuri Duran (Firma Yetkilisi & Kurucusu)
  - Mimar Ersin Duran (Mimar • Mimari Proje & Tasarım)
  - Mak. Müh. Ertuğrul Duran (Makine Mühendisi • WhatsApp & İletişim: 0542 667 87 67)
* **Çan Merkez Ofisi:** İstiklal Mahallesi, Ordu Sokak, No: 9 Kat: 1, Çan / Çanakkale
* **Yenice Şubesi:** Kurtuluş Mahallesi, Biga Caddesi, No: 38, Yenice / Çanakkale
* **İletişim & WhatsApp:** 0541 530 10 43 (Mimar Ersin Duran)
* **Ofis Sabit Hat:** 0286 416 28 08
* **E-posta:** duranersin@hotmail.com
* **Faaliyet Alanları:** Depreme dayanıklı konut ve bina inşaatı, statik proje ve mühendislik hesapları, kat karşılığı inşaat, kentsel dönüşüm, anahtar teslim yapı taahhüt.

---

## 🌟 Web Sitesinin Öne Çıkan Özellikleri

1. **İnteraktif Proje Vitrini & Yan Yana Resim Önizlemesi:**
   * Binalar kategorilere göre filtrelenebilir (*Tümü, Tamamlanan Konutlar, Devam Eden İnşaatlar, Villa & Müstakil, Ticari & İş Merkezi*).
   * Her bina kartının altında **yan yana dizilmiş ilave fotoğraf şeridi** yer alır.
   * Eğer o binaya ait ilave resimler eklenmiş ise (+3, +5 gibi), küçük resimler yan yana listelenir ve kaç adet ek fotoğraf olduğu rozetle gösterilir.
2. **Modern Lightbox Modal Fotoğraf Galerisi:**
   * Bina kapağına veya yanındaki küçük fotoğraflara tıklandığında modern native `<dialog>` penceresi açılır.
   * Binaya ait tüm iç mekan (salon, mutfak, banyo), gece cephe görünümü, şantiye süreci ve statik plan fotoğrafları tam ekran incelenebilir.
   * Klavye yön tuşları (`←` / `→`), `Esc` tuşu, mobil dokunmatik kaydırma (swipe) ve alttaki yatay küçük resim şeridi ile fotoğraflar arasında hızlı geçiş yapılabilir.
   * İlgili binaya özel tek tıkla doğrudan WhatsApp üzerinden teklif alma düğmesi entegredir.
3. **Mühendislik ve Güven Odaklı Tasarım:**
   * C35 betonarme karkas, radye temel ve deprem yönetmeliği vurguları.
   * Kurumsal lacivert, altın sarısı ve saf beyazdan oluşan lüks mimari renk paleti.
   * Masaüstü, tablet ve mobil cihazlarla %100 uyumlu duyarlı (responsive) tasarım.
4. **Hızlı İletişim & Harita:**
   * Çan Ordu Sokak ofis konumu Google Maps entegrasyonu.
   * Sabit arama ve WhatsApp iletişim butonları.

---

## 📁 Proje Dosya Yapısı

```
ersanteknik/
├── index.html             # Ana semantik HTML5 sayfası
├── css/
│   └── style.css          # Modern CSS3 stilleri, native dialog animasyonları, grid
├── js/
│   ├── projects-data.js   # İnşaat projeleri ve binaların resim veritabanı (JSON/JS)
│   └── main.js            # Galeri kontrolcüsü, filtreleme, lightbox mantığı
├── images/
│   ├── favicon.svg        # Modern sekme ikonu
│   ├── logo.svg           # Kurumsal renkli logo
│   └── logo-light.svg     # Koyu zeminler için beyaz/altın logo
└── README.md              # Bu kullanım kılavuzu
```

---

## 🛠️ Yeni Proje / Yeni Bina Resmi Nasıl Eklenir?

Yeni bir bina eklemek veya mevcut bir binaya daha fazla resim eklemek için sadece `js/projects-data.js` dosyasını açıp düzenlemeniz yeterlidir:

```javascript
{
  id: "yeni-bina-projesi",
  title: "Ersan Doğa Evleri",
  subtitle: "20 Lüks Konut Dairesi",
  category: "tamamlanan", // "tamamlanan", "devam-eden", "villa", "ticari"
  categoryLabel: "Tamamlanan Projeler",
  type: "Lüks Konut",
  location: "Cumhuriyet Mah., Çan / Çanakkale",
  year: "2025",
  status: "Teslim Edildi",
  badgeColor: "success",
  description: "Depreme dayanıklı radye temel, yerden ısıtma ve kapalı otopark...",
  features: [
    "C35 Betonarme Sistem",
    "Yerden Isıtma",
    "Geniş Balkonlar"
  ],
  // İstediğiniz kadar resim ekleyebilirsiniz:
  images: [
    {
      url: "resimler/bina-dis-cephe.jpg",
      thumb: "resimler/bina-dis-cephe-thumb.jpg",
      caption: "Bina Dış Cephe Görünümü"
    },
    {
      url: "resimler/salon.jpg",
      thumb: "resimler/salon-thumb.jpg",
      caption: "Örnek Daire Salon"
    },
    {
      url: "resimler/mutfak.jpg",
      thumb: "resimler/mutfak-thumb.jpg",
      caption: "Ankastre Mutfak"
    }
  ]
}
```

---

## 🚀 Siteyi Çalıştırma

Web sitesi saf statik (HTML/CSS/JS) olarak kodlandığı için herhangi bir karmaşık derleme işlemine veya sunucu kurulumuna ihtiyaç duymaz:

* Doğrudan `index.html` dosyasını herhangi bir web tarayıcısında (Chrome, Safari, Edge, Firefox) çift tıklayarak açabilirsiniz.
* Veya yerel bir test sunucusu başlatmak isterseniz:
  ```bash
  npx serve .
  # veya Python ile:
  python3 -m http.server 8000
  ```
