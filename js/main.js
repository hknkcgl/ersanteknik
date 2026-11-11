/**
 * ERSAN TEKNİK MÜHENDİSLİK & İNŞAAT
 * Ana JavaScript Mantığı ve İnteraktif Galeri Yöneticisi
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initProjects();
  initLightbox();
  initContactForm();
  initScrollAnimations();
});

/* ==========================================================================
   1. NAVBAR & MOBİL MENÜ
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sayfa kaydırıldığında başlığa gölge & küçülme efekti
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  }, { passive: true });

  // Mobil menü açma/kapama
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("nav-menu-open");
      document.body.classList.toggle("menu-locked", !isExpanded);
    });

    // Menü bağlantısına tıklandığında menüyü kapat
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-locked");
      });
    });

    // Menü dışına tıklandığında kapat
    document.addEventListener("click", (e) => {
      if (!header.contains(e.target) && navMenu.classList.contains("nav-menu-open")) {
        navMenu.classList.remove("nav-menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-locked");
      }
    });
  }
}

/* ==========================================================================
   2. PROJELER VE YAN YANA RESİM ÖNİZLEME LİSTESİ
   ========================================================================== */
let activeCategory = "all";

function initProjects() {
  const container = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!container || !window.ERSAN_PROJECTS) return;

  renderProjects(container, activeCategory);

  // Filtreleme butonları
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter") || "all";
      renderProjects(container, activeCategory);
    });
  });
}

function renderProjects(container, category) {
  const projects = window.ERSAN_PROJECTS;
  const filtered = category === "all" 
    ? projects 
    : projects.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-projects">
        <p>Bu kategoride henüz yayınlanmış bir proje bulunmamaktadır.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const totalImages = project.images ? project.images.length : 0;
    const coverImage = totalImages > 0 ? project.images[0] : null;
    const extraImages = totalImages > 1 ? project.images.slice(1) : [];

    // Yan yana küçük resimler (en fazla 3 adet yan yana gösterilir, 4. de +X resim etiketi eklenir)
    const maxVisibleThumbs = 3;
    const visibleThumbs = extraImages.slice(0, maxVisibleThumbs);
    const remainingCount = extraImages.length - maxVisibleThumbs;

    return `
      <article class="project-card" data-id="${project.id}" data-category="${project.category}">
        <!-- Kart Üstü Görsel & Rozetler -->
        <div class="project-cover-wrapper" onclick="openLightbox('${project.id}', 0)" title="Büyütmek ve fotoğrafları görmek için tıklayın">
          <img 
            src="${coverImage ? coverImage.thumb : ''}" 
            alt="${project.title} - Ana Görsel" 
            class="project-cover-img"
            loading="lazy"
          />
          <div class="project-overlay">
            <span class="overlay-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
              Galeriye Git (${totalImages} Resim)
            </span>
          </div>
          <span class="project-badge badge-${project.badgeColor || 'primary'}">
            ${project.status}
          </span>
          <span class="project-type-tag">${project.type}</span>
        </div>

        <!-- Kart İçeriği -->
        <div class="project-info">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-subtitle">${project.subtitle}</span>
          </div>

          <p class="project-desc">${project.description}</p>

          <div class="project-meta">
            <span class="meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${project.location}
            </span>
            <span class="meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              ${project.year}
            </span>
          </div>

          <!-- YAN YANA RESİM ÖNİZLEME ŞERİDİ (Kullanıcının talep ettiği bina altı resimler) -->
          <div class="project-gallery-preview">
            <div class="gallery-preview-header">
              <span class="gallery-preview-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                İlave Görseller (${totalImages} Adet):
              </span>
              <span class="gallery-hint">Tıklayarak inceleyin</span>
            </div>

            <div class="preview-thumbnails-row">
              <!-- İlk resim küçük kutucuk -->
              <div 
                class="thumb-item active-cover" 
                onclick="openLightbox('${project.id}', 0)"
                title="${coverImage ? coverImage.caption : 'Ana Görsel'}"
              >
                <img src="${coverImage ? coverImage.thumb : ''}" alt="${project.title} - Kapak" loading="lazy">
                <span class="thumb-label">Kapak</span>
              </div>

              <!-- Varsa ilave diğer resimler yan yana -->
              ${visibleThumbs.map((img, idx) => `
                <div 
                  class="thumb-item" 
                  onclick="openLightbox('${project.id}', ${idx + 1})"
                  title="${img.caption || 'Görsel ' + (idx + 2)}"
                >
                  <img src="${img.thumb || img.url}" alt="${img.caption}" loading="lazy">
                </div>
              `).join('')}

              <!-- Daha fazla resim varsa +X butonu -->
              ${remainingCount > 0 ? `
                <div 
                  class="thumb-item thumb-more" 
                  onclick="openLightbox('${project.id}', ${maxVisibleThumbs + 1})"
                  title="Diğer ${remainingCount} resmi görüntüle"
                >
                  <span>+${remainingCount}</span>
                  <small>Daha</small>
                </div>
              ` : ''}

              ${extraImages.length === 0 ? `
                <div class="single-image-note">
                  <span>Başka görsel eklenmedi</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Aksiyon Butonları -->
          <div class="project-actions">
            <button 
              type="button" 
              class="btn btn-outline-primary btn-sm btn-full"
              onclick="openLightbox('${project.id}', 0)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              Fotoğrafları İncele (${totalImages})
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   3. MODERN NATIVE LIGHTBOX MODAL DİALOG & GALERİ
   ========================================================================== */
let currentLightboxProject = null;
let currentImageIndex = 0;

function initLightbox() {
  const dialog = document.getElementById("project-lightbox");
  if (!dialog) return;

  const closeBtn = dialog.querySelector(".lightbox-close-btn");
  const prevBtn = dialog.querySelector(".lightbox-nav-prev");
  const nextBtn = dialog.querySelector(".lightbox-nav-next");

  // Light dismiss: Dialog backdrop alanına tıklanınca kapat
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeLightbox();
    }
  });

  // Kapat butonu
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  // Önceki ve Sonraki Butonları
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  // Klavye Kontrolleri (Esc, Sol Ok, Sağ Ok)
  window.addEventListener("keydown", (e) => {
    if (!dialog.open) return;

    if (e.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(1);
    }
  });

  // Dokunmatik Ekranlar İçin Swipe Desteği
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = dialog.querySelector(".lightbox-stage");

  if (stage) {
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      navigateLightbox(1); // Sağa kaydır = sonraki resim
    } else if (touchEndX > touchStartX + threshold) {
      navigateLightbox(-1); // Sola kaydır = önceki resim
    }
  }
}

/**
 * Belirtilen projenin fotoğraf galerisini açar
 * @param {string} projectId 
 * @param {number} startIndex 
 */
window.openLightbox = function(projectId, startIndex = 0) {
  const dialog = document.getElementById("project-lightbox");
  if (!dialog || !window.ERSAN_PROJECTS) return;

  const project = window.ERSAN_PROJECTS.find(p => p.id === projectId);
  if (!project || !project.images || project.images.length === 0) return;

  currentLightboxProject = project;
  currentImageIndex = Math.max(0, Math.min(startIndex, project.images.length - 1));

  // Native showModal() çağrısı
  dialog.showModal();
  updateLightboxContent();
};

function closeLightbox() {
  const dialog = document.getElementById("project-lightbox");
  if (dialog && dialog.open) {
    dialog.close();
  }
}

function navigateLightbox(direction) {
  if (!currentLightboxProject || !currentLightboxProject.images) return;
  const total = currentLightboxProject.images.length;
  currentImageIndex = (currentImageIndex + direction + total) % total;
  updateLightboxContent();
}

function updateLightboxContent() {
  const dialog = document.getElementById("project-lightbox");
  if (!dialog || !currentLightboxProject) return;

  const project = currentLightboxProject;
  const currentImg = project.images[currentImageIndex];
  const total = project.images.length;

  // Başlık ve meta bilgileri
  const titleEl = document.getElementById("lightbox-project-title");
  const metaEl = document.getElementById("lightbox-project-meta");
  const counterEl = document.getElementById("lightbox-counter");
  const captionEl = document.getElementById("lightbox-caption");
  const mainImgEl = document.getElementById("lightbox-main-img");
  const thumbsContainer = document.getElementById("lightbox-thumbs");
  const featuresListEl = document.getElementById("lightbox-features-list");
  const whatsappBtn = document.getElementById("lightbox-whatsapp-btn");

  if (titleEl) titleEl.textContent = project.title;
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="badge badge-${project.badgeColor || 'primary'}">${project.status}</span>
      <span>${project.location}</span>
      <span>•</span>
      <span>${project.year}</span>
    `;
  }
  if (counterEl) {
    counterEl.textContent = `${currentImageIndex + 1} / ${total}`;
  }
  if (captionEl) {
    captionEl.textContent = currentImg.caption || `${project.title} - Görsel ${currentImageIndex + 1}`;
  }

  // Büyük görsel yükleme efekti
  if (mainImgEl) {
    mainImgEl.classList.add("img-loading");
    mainImgEl.src = currentImg.url;
    mainImgEl.alt = currentImg.caption || project.title;
    mainImgEl.onload = () => {
      mainImgEl.classList.remove("img-loading");
    };
  }

  // WhatsApp butonuna projeyi otomatik ekle (Mimar Ersin Duran)
  if (whatsappBtn) {
    const message = encodeURIComponent(`Merhaba Ersin Bey / Ersan Teknik, web sitenizdeki "${project.title}" projesi hakkında detaylı bilgi ve müsaitlik durumu almak istiyorum.`);
    whatsappBtn.href = `https://wa.me/905415301043?text=${message}`;
  }

  // Teknik özellikler listesi
  if (featuresListEl && project.features) {
    featuresListEl.innerHTML = project.features.map(f => `
      <li>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Alt mini resimler şeridi (Thumbnail Bar)
  if (thumbsContainer) {
    thumbsContainer.innerHTML = project.images.map((img, idx) => `
      <button 
        type="button" 
        class="lightbox-thumb-btn ${idx === currentImageIndex ? 'active' : ''}" 
        onclick="setLightboxImage(${idx})"
        aria-label="Görsel ${idx + 1}"
      >
        <img src="${img.thumb || img.url}" alt="${img.caption}" loading="lazy">
      </button>
    `).join('');

    // Aktif thumbnail'i görünür alana kaydır
    const activeThumb = thumbsContainer.querySelector(".active");
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
}

window.setLightboxImage = function(index) {
  if (!currentLightboxProject || !currentLightboxProject.images) return;
  if (index >= 0 && index < currentLightboxProject.images.length) {
    currentImageIndex = index;
    updateLightboxContent();
  }
};

/* ==========================================================================
   4. İLETİŞİM FORMU (YEREL E-POSTA VE WHATSAPP ENTEGRASYONU)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  const whatsappSendBtn = document.getElementById("form-send-whatsapp");

  if (!form) return;

  // Seçili alıcı kartı (e-posta ve WhatsApp aynı kişiye gider, varsayılan: Ersin Duran)
  const getRecipient = () => {
    const radio = form.querySelector("[name='recipient']:checked");
    return {
      email: radio ? radio.value : "duranersin@hotmail.com",
      whatsapp: radio ? radio.dataset.whatsapp : "905415301043",
      phone: radio ? radio.dataset.phone : "0541 530 10 43"
    };
  };

  // Kart değişince bilgi notunu ve WhatsApp butonundaki numarayı güncelle
  const updateRecipientInfo = () => {
    const r = getRecipient();
    const mailEl = document.getElementById("recipient-mail");
    const phoneEl = document.getElementById("recipient-phone");
    const btnPhoneEl = document.getElementById("whatsapp-btn-phone");
    if (mailEl) mailEl.textContent = r.email;
    if (phoneEl) phoneEl.textContent = r.phone;
    if (btnPhoneEl) btnPhoneEl.textContent = r.phone;

    // Sağ alttaki sabit WhatsApp butonu da seçili kişiyi açar
    const floatingWa = document.getElementById("floating-whatsapp");
    if (floatingWa) {
      const url = new URL(floatingWa.href);
      url.pathname = "/" + r.whatsapp;
      floatingWa.href = url.toString();
      floatingWa.title = `WhatsApp'tan Yazın (${r.phone})`;
    }

    // Sağ alttaki sabit arama butonu da seçili kişiyi arar
    const floatingPhone = document.getElementById("floating-phone");
    if (floatingPhone) {
      floatingPhone.href = `tel:${r.phone.replace(/\s/g, "")}`;
      floatingPhone.title = `Hemen Arayın: ${r.phone}`;
    }
  };
  form.querySelectorAll("[name='recipient']").forEach((radio) => {
    radio.addEventListener("change", updateRecipientInfo);
  });
  updateRecipientInfo();

  // 1. E-posta Uygulaması ile Gönder (alıcı kartlardan seçilir, varsayılan: duranersin@hotmail.com)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("[name='fullname']").value.trim();
    const phone = form.querySelector("[name='phone']").value.trim();
    const subjectSelect = form.querySelector("[name='subject']");
    const subjectText = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : "Genel Bilgi";
    const message = form.querySelector("[name='message']").value.trim();

    if (!name || !phone) {
      showFormStatus(statusEl, "Lütfen adınızı ve telefon numaranızı giriniz.", "error");
      return;
    }

    const emailTo = getRecipient().email;
    const emailSubject = encodeURIComponent(`[Ersan Teknik Web] ${subjectText} - ${name}`);
    const emailBody = encodeURIComponent(
      `Sayın Ersan Teknik Yetkilileri,\n\n` +
      `Web sitenizdeki iletişim formu üzerinden yazıyorum:\n\n` +
      `• Ad Soyad: ${name}\n` +
      `• Telefon: ${phone}\n` +
      `• Konu: ${subjectText}\n\n` +
      `• Mesaj:\n${message || 'Detay belirtilmedi.'}\n`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    showFormStatus(
      statusEl, 
      "Yerel e-posta uygulamanız açılıyor... Lütfen açılan pencerede 'Gönder'e basarak iletiniz.", 
      "success"
    );

    // Kullanıcının varsayılan yerel e-posta uygulamasını (Mail, Outlook vb.) açar
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 300);
  });

  // 2. WhatsApp ile Gönder Butonu
  if (whatsappSendBtn) {
    whatsappSendBtn.addEventListener("click", () => {
      const name = form.querySelector("[name='fullname']").value.trim();
      const phone = form.querySelector("[name='phone']").value.trim();
      const subjectSelect = form.querySelector("[name='subject']");
      const subjectText = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : "Genel Bilgi";
      const message = form.querySelector("[name='message']").value.trim();

      if (!name || !phone) {
        showFormStatus(statusEl, "Lütfen formu göndermeden önce adınızı ve telefon numaranızı yazınız.", "error");
        return;
      }

      const waText = encodeURIComponent(
        `Merhaba Ersan Teknik,\n` +
        `Web sitenizdeki iletişim formunu doldurdum:\n` +
        `• İsim: ${name}\n` +
        `• Telefon: ${phone}\n` +
        `• Konu: ${subjectText}\n` +
        `• Mesaj: ${message || 'Bilgi almak istiyorum.'}`
      );

      showFormStatus(statusEl, "WhatsApp açılıyor...", "success");
      window.open(`https://wa.me/${getRecipient().whatsapp}?text=${waText}`, "_blank");
    });
  }
}

function showFormStatus(element, message, type) {
  if (!element) return;
  element.className = `form-status-msg status-${type}`;
  element.textContent = message;
  element.style.display = "block";

  setTimeout(() => {
    element.style.display = "none";
  }, 6000);
}

/* ==========================================================================
   5. SAYFA KAYDIRMA ANİMASYONLARI (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
}
