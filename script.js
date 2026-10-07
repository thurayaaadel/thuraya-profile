/* ═══════════════════════════════════════════════════════════════════
   ثريا تك - Thuraya Tech - Main Script
   Author: tht (Thuraya Tech)
   Signature: tht
   Version: 1.0.0
   Description: كل الوظائف التفاعلية للموقع
   ⓒ 2025 Thuraya Tech - All Rights Reserved
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ═══ tht : اختصار الشركة ═══ */
const tht = {
  name: 'Thuraya Tech',
  nameAr: 'ثريا تك',
  signature: 'tht',
  version: '1.0.0',
  year: 2025
};

/* ═══════════════════════════════════════════════
   tht : بيانات مستودع الألوان
   ═══════════════════════════════════════════════ */
const thtColorVault = {
  'gold': {
    name: '🥇 ذهبي',
    colors: ['#C9A227','#E5C158','#9A7B1A','#D4A017','#B8860B','#FFD700','#FFC700','#E8B923',
             '#DAA520','#F0C75E','#FFB90F','#F5D76E','#E5B567','#CFA250','#B8901F','#A17C0F',
             '#8B6508','#75560A','#5E450B','#473609']
  },
  'red': {
    name: '🔴 أحمر',
    colors: ['#DC2626','#EF4444','#F87171','#FCA5A5','#FECACA','#B91C1C','#991B1B','#7F1D1D',
             '#E53E3E','#C53030','#9B2C2C','#742A2A','#FF6B6B','#FF5252','#D32F2F','#C62828',
             '#B71C1C','#8B0000','#A00000','#800000']
  },
  'blue': {
    name: '🔵 أزرق',
    colors: ['#2563EB','#3B82F6','#60A5FA','#93C5FD','#BFDBFE','#1D4ED8','#1E40AF','#1E3A8A',
             '#4A9EFF','#2A7AE0','#1E5BB8','#4299E1','#3182CE','#2B6CB0','#2C5282','#0EA5E9',
             '#0284C7','#0369A1','#075985','#0C4A6E']
  },
  'green': {
    name: '🟢 أخضر',
    colors: ['#16A34A','#22C55E','#4ADE80','#86EFAC','#BBF7D0','#15803D','#166534','#14532D',
             '#48BB78','#38A169','#2F855A','#276749','#10B981','#059669','#047857','#065F46',
             '#84CC16','#65A30D','#4D7C0F','#3F6212']
  },
  'purple': {
    name: '💜 بنفسجي',
    colors: ['#9333EA','#A855F7','#C084FC','#D8B4FE','#E9D5FF','#7E22CE','#6B21A8','#581C87',
             '#805AD5','#6B46C1','#553C9A','#44337A','#8B5CF6','#7C3AED','#6D28D9','#5B21B6',
             '#8E44AD','#7D3C98','#6C3483','#5B2C6F']
  },
  'pink': {
    name: '💗 وردي',
    colors: ['#EC4899','#F472B6','#F9A8D4','#FBCFE8','#FCE7F3','#DB2777','#BE185D','#9D174D',
             '#ED64A6','#D53F8C','#B83280','#97266D','#F06292','#EC407A','#E91E63','#C2185B',
             '#AD1457','#880E4F','#FF69B4','#FF1493']
  },
  'orange': {
    name: '🟠 برتقالي',
    colors: ['#EA580C','#F97316','#FB923C','#FDBA74','#FED7AA','#C2410C','#9A3412','#7C2D12',
             '#ED8936','#DD6B20','#C05621','#9C4221','#FF9800','#F57C00','#EF6C00','#E65100',
             '#FF5722','#E64A19','#D84315','#BF360C']
  },
  'gray': {
    name: '⚫ رمادي',
    colors: ['#0A0A0A','#141414','#1A1A1A','#222222','#2D3748','#4A5568','#718096','#A0AEC0',
             '#CBD5E0','#E2E8F0','#EDF2F7','#F7FAFC','#FFFFFF','#111827','#1F2937','#374151',
             '#4B5563','#6B7280','#9CA3AF','#D1D5DB','#E5E7EB','#F3F4F6','#F9FAFB','#F8F9FB']
  },
  'pastel': {
    name: '🌸 باستيل',
    colors: ['#FFE5E5','#FFD6D6','#FFE8CC','#FFF2CC','#E8F5C8','#D4F1D4','#C8E6F5','#D6E4FF',
             '#E8D6FF','#F5D6FF','#FFD6F0','#FDF2F8','#FCE7F3','#FEF3C7','#FDE68A','#D1FAE5',
             '#A7F3D0','#DBEAFE','#BFDBFE','#E9D5FF','#DDD6FE','#FED7AA','#FECACA','#F5D6FF']
  },
  'neon': {
    name: '✨ نيون',
    colors: ['#00FFFF','#FF00FF','#FFFF00','#00FF00','#FF0000','#00FFCC','#FF0099','#9900FF',
             '#FF6600','#CCFF00','#00CCFF','#FF00CC','#39FF14','#FF3131','#FF7F00','#FFD700',
             '#00FF7F','#00BFFF','#FF1493','#7FFF00']
  },
  'earth': {
    name: '🌍 ترابي',
    colors: ['#8B4513','#A0522D','#CD853F','#DEB887','#F5DEB3','#D2B48C','#BC8F8F','#6B4423',
             '#5C4033','#4A3728','#8B7355','#A0826D','#B8860B','#9ACD32','#6B8E23','#556B2F',
             '#2F4F4F','#708090','#483C32','#3E2723']
  },
  'ocean': {
    name: '🌊 بحري',
    colors: ['#006994','#0077BE','#00A5CF','#48CAE4','#90E0EF','#ADE8F4','#CAF0F8','#023E8A',
             '#03045E','#0096C7','#00B4D8','#0077B6','#005F73','#0A9396','#94D2BD','#E9D8A6',
             '#6BB6FF','#4A9EFF','#3A86FF','#264653']
  }
};

/* ═══════════════════════════════════════════════
   tht : بيانات صفحات الكتاب 3D
   ═══════════════════════════════════════════════ */
const thtBookPages = [
  {
    icon: '📖',
    title: 'من نحن',
    content: `
      <p><strong>ثريا تك</strong> شركة تقنية يمنية متخصصة في حلول <strong>ERPNext</strong> و <strong>Frappe</strong> المتكاملة.</p>
      <p>نقدم خدمات احترافية شاملة تبدأ من تجهيز السيرفر، وتمتد إلى التخصيص والبرمجة والتدريب والدعم المستمر.</p>
      <ul>
        <li>خبرة في تخصيص الأنظمة</li>
        <li>فريق برمجة متخصص</li>
        <li>دعم عربي كامل</li>
        <li>حلول تناسب كل نشاط</li>
      </ul>
    `
  },
  {
    icon: '⚙️',
    title: 'خدماتنا',
    content: `
      <ul>
        <li><strong>تجهيز السيرفر</strong> والبيئة الافتراضية</li>
        <li><strong>تنصيب ERPNext</strong> و Frappe</li>
        <li><strong>تخصيص</strong> النماذج والواجهات</li>
        <li><strong>برمجة</strong> الوظائف الخاصة</li>
        <li><strong>تقارير</strong> مخصصة ولوحات معلومات</li>
        <li><strong>طباعة</strong> الفواتير والشهادات</li>
        <li><strong>ربط</strong> الأنظمة الخارجية</li>
        <li><strong>تدريب</strong> فريق العمل</li>
        <li><strong>دعم</strong> فني وتطوير مستمر</li>
      </ul>
    `
  },
  {
    icon: '🧩',
    title: 'منظومة Frappe',
    content: `
      <p>يمكن بناء الحل حسب احتياجات مؤسستك من خلال تطبيقات Frappe المتكاملة:</p>
      <ul>
        <li><strong>ERPNext</strong> - إدارة الموارد</li>
        <li><strong>Frappe HR</strong> - الموارد البشرية</li>
        <li><strong>Frappe Education</strong> - التعليم</li>
        <li><strong>Frappe CRM</strong> - إدارة العملاء</li>
        <li><strong>Frappe Helpdesk</strong> - الدعم الفني</li>
        <li><strong>Frappe Insights</strong> - تحليل البيانات</li>
        <li><strong>Frappe Books</strong> - المحاسبة</li>
        <li>+ تطبيقات مخصصة</li>
      </ul>
    `
  },
  {
    icon: '🏢',
    title: 'القطاعات',
    content: `
      <p>نخدم مجموعة واسعة من القطاعات بأحلول مخصصة:</p>
      <ul>
        <li>🏢 الشركات والمؤسسات</li>
        <li>🏭 المصانع والإنتاج</li>
        <li>🌾 الزراعة والمزارع</li>
        <li>🍽️ المطاعم والكافيهات</li>
        <li>🏫 المدارس والمعاهد</li>
        <li>🏥 العيادات والمراكز</li>
        <li>🏨 الفنادق والضيافة</li>
        <li>🏗️ المقاولات والمشاريع</li>
        <li>🛒 المتاجر والتجارة</li>
      </ul>
    `
  },
  {
    icon: '🎯',
    title: 'لماذا نحن',
    content: `
      <ul>
        <li><strong>حلول مخصصة</strong> - نبني حلًا يناسبك</li>
        <li><strong>خبرة تقنية</strong> - متخصصون معتمدون</li>
        <li><strong>استضافة محلية</strong> - بياناتك بأمان</li>
        <li><strong>دعم سريع</strong> - استجابة فورية</li>
        <li><strong>دعم عربي كامل</strong> - واجهات RTL</li>
        <li><strong>تطوير مستمر</strong> - حسب احتياجك</li>
        <li><strong>أسعار تنافسية</strong> - بجودة عالية</li>
        <li><strong>شراكة طويلة</strong> - نرافقك دائمًا</li>
      </ul>
    `
  },
  {
    icon: '📞',
    title: 'تواصل معنا',
    content: `
      <p>نحن هنا لخدمتك والإجابة على جميع استفساراتك:</p>
      <ul>
        <li>📱 <strong>اتصل بنا:</strong> 773085449</li>
        <li>💬 <strong>واتساب:</strong> 773085449</li>
        <li>📍 <strong>الموقع:</strong> اليمن 🇾🇪</li>
        <li>✉️ <strong>البريد:</strong> info@thuraya-tech.com</li>
      </ul>
      <p style="text-align:center; margin-top:20px; color: var(--tht-accent); font-family: 'Cairo', sans-serif; font-weight:700;">
        حلول تقنية... لمستقبل أفضل
      </p>
    `
  }
];

/* ═══════════════════════════════════════════════
   tht : المتغيرات العامة
   ═══════════════════════════════════════════════ */
const thtState = {
  currentPage: 0,
  totalPages: thtBookPages.length,
  isAnimating: false
};

/* ═══════════════════════════════════════════════
   tht : دوال مساعدة للألوان
   ═══════════════════════════════════════════════ */
const thtHelpers = {
  lighten(hex, percent) {
    const num = parseInt(hex.replace('#',''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  },

  darken(hex, percent) {
    const num = parseInt(hex.replace('#',''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  },

  hexToRgba(hex, alpha) {
    const num = parseInt(hex.replace('#',''), 16);
    const R = (num >> 16) & 255;
    const G = (num >> 8) & 255;
    const B = num & 255;
    return `rgba(${R},${G},${B},${alpha})`;
  }
};

/* ═══════════════════════════════════════════════
   tht : اللوحة الجانبية (Slide Panel)
   ═══════════════════════════════════════════════ */
const thtEdgeHandle = document.getElementById('thtEdgeHandle');
const thtSlidePanel = document.getElementById('thtSlidePanel');
const thtSlideClose = document.getElementById('thtSlideClose');
const thtSlideOverlay = document.getElementById('thtSlideOverlay');

function thtOpenSlide() {
  thtSlidePanel?.classList.add('tht-open');
  thtSlideOverlay?.classList.add('tht-active');
  document.body.style.overflow = 'hidden';
}

function thtCloseSlide() {
  thtSlidePanel?.classList.remove('tht-open');
  thtSlideOverlay?.classList.remove('tht-active');
  document.body.style.overflow = '';
}

thtEdgeHandle?.addEventListener('click', thtOpenSlide);
thtSlideClose?.addEventListener('click', thtCloseSlide);
thtSlideOverlay?.addEventListener('click', thtCloseSlide);

document.querySelectorAll('.tht-slide-nav-item').forEach(item => {
  item.addEventListener('click', () => thtCloseSlide());
});

/* ═══════════════════════════════════════════════
   tht : النوافذ المنبثقة للخدمات
   ═══════════════════════════════════════════════ */
function thtOpenModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('tht-active');
    document.body.style.overflow = 'hidden';
  }
}

function thtCloseModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('tht-active');
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('.tht-modal-overlay').forEach(o => {
  o.addEventListener('click', e => {
    if (e.target === o) {
      o.classList.remove('tht-active');
      document.body.style.overflow = '';
    }
  });
});

function thtShowService(title, desc) {
  const titleEl = document.getElementById('tht-modal-service-title');
  const descEl = document.getElementById('tht-modal-service-desc');
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  thtOpenModal('tht-modal-service');
}

/* ═══════════════════════════════════════════════
   tht : نافذة التصميم
   ═══════════════════════════════════════════════ */
function thtOpenDesignModal() {
  document.getElementById('thtDesignModalOverlay')?.classList.add('tht-active');
  document.body.style.overflow = 'hidden';
}

function thtCloseDesignModal() {
  document.getElementById('thtDesignModalOverlay')?.classList.remove('tht-active');
  document.body.style.overflow = '';
}

document.getElementById('thtDesignModalOverlay')?.addEventListener('click', function(e) {
  if (e.target === this) thtCloseDesignModal();
});

/* ═══ tht : تبويبات نافذة التصميم ═══ */
document.querySelectorAll('.tht-modal-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tht-modal-tab').forEach(t => t.classList.remove('tht-active'));
    tab.classList.add('tht-active');
    document.querySelectorAll('.tht-modal-panel').forEach(p => p.classList.remove('tht-active'));
    document.getElementById('tht-panel-' + tab.dataset.panel)?.classList.add('tht-active');
  });
});

/* ═══════════════════════════════════════════════
   tht : الثيمات
   ═══════════════════════════════════════════════ */
function thtSelectTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  document.querySelectorAll('.tht-theme-card').forEach(c => c.classList.remove('tht-active'));
  document.querySelector(`.tht-theme-card[data-theme="${themeName}"]`)?.classList.add('tht-active');
  thtClearCustomOverrides();
  setTimeout(thtUpdateColorInputsFromTheme, 100);
  localStorage.setItem('tht-theme', themeName);
}

function thtUpdateColorInputsFromTheme() {
  const style = getComputedStyle(document.documentElement);
  const mappings = {
    'thtColorAccent': '--tht-accent',
    'thtColorBgPrimary': '--tht-bg-primary',
    'thtColorBgCard': '--tht-bg-card',
    'thtColorTextPrimary': '--tht-text-primary',
    'thtColorTextMuted': '--tht-text-muted',
    'thtColorBorder': '--tht-border-color'
  };

  Object.entries(mappings).forEach(([id, varName]) => {
    const val = style.getPropertyValue(varName).trim();
    if (val && val.startsWith('#')) {
      const input = document.getElementById(id);
      if (input) {
        input.value = val;
        const card = input.closest('.tht-color-input-card');
        const hexLabel = card?.querySelector('.tht-color-hex');
        if (hexLabel) hexLabel.textContent = val.toUpperCase();
      }
    }
  });
}

/* ═══════════════════════════════════════════════
   tht : التحكم بالألوان
   ═══════════════════════════════════════════════ */
const thtColorMappings = {
  'thtColorAccent': '--tht-accent',
  'thtColorBgPrimary': '--tht-bg-primary',
  'thtColorBgCard': '--tht-bg-card',
  'thtColorTextPrimary': '--tht-text-primary',
  'thtColorTextMuted': '--tht-text-muted',
  'thtColorBorder': '--tht-border-color'
};

Object.keys(thtColorMappings).forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener('input', function() {
      const varName = thtColorMappings[id];
      document.documentElement.style.setProperty(varName, this.value);

      if (varName === '--tht-accent') {
        document.documentElement.style.setProperty('--tht-accent-light', thtHelpers.lighten(this.value, 20));
        document.documentElement.style.setProperty('--tht-accent-dark', thtHelpers.darken(this.value, 15));
        document.documentElement.style.setProperty('--tht-accent-glow', thtHelpers.hexToRgba(this.value, 0.4));
        document.documentElement.style.setProperty('--tht-accent-soft', thtHelpers.hexToRgba(this.value, 0.12));
        document.documentElement.style.setProperty('--tht-border-color', thtHelpers.hexToRgba(this.value, 0.15));
        document.documentElement.style.setProperty('--tht-border-strong', thtHelpers.hexToRgba(this.value, 0.35));
      }

      const card = this.closest('.tht-color-input-card');
      const hexLabel = card?.querySelector('.tht-color-hex');
      if (hexLabel) hexLabel.textContent = this.value.toUpperCase();

      document.querySelectorAll('.tht-theme-card').forEach(c => c.classList.remove('tht-active'));
    });
  }
});

/* ═══════════════════════════════════════════════
   tht : الخطوط
   ═══════════════════════════════════════════════ */
function thtSelectFont(fontName) {
  document.documentElement.style.setProperty('--tht-font-heading', `'${fontName}', sans-serif`);
  document.documentElement.style.setProperty('--tht-font-body', `'${fontName}', sans-serif`);
  document.querySelectorAll('.tht-font-card').forEach(c => c.classList.remove('tht-active'));
  document.querySelector(`.tht-font-card[data-font="${fontName}"]`)?.classList.add('tht-active');
  localStorage.setItem('tht-font', fontName);
}

const thtFontSizeBase = document.getElementById('thtFontSizeBase');
thtFontSizeBase?.addEventListener('input', function() {
  document.documentElement.style.fontSize = this.value + 'px';
  const badge = document.getElementById('thtFontSizeBaseValue');
  if (badge) badge.textContent = this.value + 'px';
  localStorage.setItem('tht-fontSize', this.value);
});

const thtFontSizeHeading = document.getElementById('thtFontSizeHeading');
thtFontSizeHeading?.addEventListener('input', function() {
  document.querySelectorAll('.tht-section-title').forEach(h => {
    h.style.fontSize = this.value + 'rem';
  });
  const badge = document.getElementById('thtFontSizeHeadingValue');
  if (badge) badge.textContent = this.value + 'rem';
  localStorage.setItem('tht-headingSize', this.value);
});

/* ═══════════════════════════════════════════════
   tht : الزوايا
   ═══════════════════════════════════════════════ */
function thtSelectRadius(type, radius) {
  const gridId = type === 'card' ? 'thtCardRadiusGrid' : (type === 'section' ? 'thtSectionRadiusGrid' : 'thtBtnRadiusGrid');
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.querySelectorAll('.tht-radius-card').forEach(c => c.classList.remove('tht-active'));
  grid.querySelector(`.tht-radius-card[data-radius="${radius}"]`)?.classList.add('tht-active');

  if (type === 'card') {
    document.querySelectorAll('.tht-card, .tht-sector-card, .tht-feature-card, .tht-frappe-item').forEach(el => {
      el.style.borderRadius = radius + 'px';
    });
    localStorage.setItem('tht-cardRadius', radius);
  } else if (type === 'section') {
    document.querySelectorAll('.tht-timeline-content, .tht-contact-section').forEach(el => {
      el.style.borderRadius = radius + 'px';
    });
    localStorage.setItem('tht-sectionRadius', radius);
  } else if (type === 'btn') {
    document.querySelectorAll('.tht-btn, .tht-hero-badge, .tht-contact-item').forEach(el => {
      el.style.borderRadius = radius + 'px';
    });
    localStorage.setItem('tht-btnRadius', radius);
  }
}

/* ═══════════════════════════════════════════════
   tht : مستودع الألوان
   ═══════════════════════════════════════════════ */
function thtBuildColorVault() {
  const tabs = document.getElementById('thtVaultTabs');
  const body = document.getElementById('thtVaultBody');
  if (!tabs || !body) return;

  tabs.innerHTML = '';
  body.innerHTML = '';

  let total = 0;
  Object.keys(thtColorVault).forEach((key, index) => {
    const group = thtColorVault[key];
    total += group.colors.length;

    const tab = document.createElement('button');
    tab.className = 'tht-vault-tab' + (index === 0 ? ' tht-active' : '');
    tab.dataset.vaultTab = key;
    tab.innerHTML = `${group.name} <span class="tht-vault-count">${group.colors.length}</span>`;
    tab.addEventListener('click', () => thtSwitchVaultTab(key));
    tabs.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'tht-vault-panel' + (index === 0 ? ' tht-active' : '');
    panel.dataset.vaultPanel = key;

    group.colors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'tht-color-swatch';
      swatch.style.backgroundColor = color;
      swatch.dataset.color = color;
      swatch.dataset.search = color.toLowerCase() + ' ' + key;

      const code = document.createElement('span');
      code.className = 'tht-swatch-code';
      code.textContent = color;
      swatch.appendChild(code);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'tht-swatch-copy';
      copyBtn.textContent = '📋';
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(color).then(() => {
          copyBtn.textContent = '✓';
          setTimeout(() => copyBtn.textContent = '📋', 1000);
        });
      });
      swatch.appendChild(copyBtn);

      swatch.addEventListener('click', () => thtApplyVaultColor(color));
      panel.appendChild(swatch);
    });

    body.appendChild(panel);
  });

  const vaultCountEl = document.getElementById('thtVaultCount');
  if (vaultCountEl) vaultCountEl.textContent = total + '+';
}

function thtSwitchVaultTab(key) {
  document.querySelectorAll('.tht-vault-tab').forEach(t => {
    t.classList.toggle('tht-active', t.dataset.vaultTab === key);
  });
  document.querySelectorAll('.tht-vault-panel').forEach(p => {
    p.classList.toggle('tht-active', p.dataset.vaultPanel === key);
  });
}

function thtApplyVaultColor(color) {
  document.documentElement.style.setProperty('--tht-accent', color);
  document.documentElement.style.setProperty('--tht-accent-light', thtHelpers.lighten(color, 20));
  document.documentElement.style.setProperty('--tht-accent-dark', thtHelpers.darken(color, 15));
  document.documentElement.style.setProperty('--tht-accent-glow', thtHelpers.hexToRgba(color, 0.4));
  document.documentElement.style.setProperty('--tht-accent-soft', thtHelpers.hexToRgba(color, 0.12));
  document.documentElement.style.setProperty('--tht-border-color', thtHelpers.hexToRgba(color, 0.15));
  document.documentElement.style.setProperty('--tht-border-strong', thtHelpers.hexToRgba(color, 0.35));

  const input = document.getElementById('thtColorAccent');
  if (input) {
    input.value = color;
    const card = input.closest('.tht-color-input-card');
    const hexLabel = card?.querySelector('.tht-color-hex');
    if (hexLabel) hexLabel.textContent = color.toUpperCase();
  }

  document.querySelectorAll('.tht-theme-card').forEach(c => c.classList.remove('tht-active'));
  setTimeout(thtCloseColorVault, 200);
}

function thtOpenColorVault() {
  document.getElementById('thtColorVault')?.classList.add('tht-active');
}

function thtCloseColorVault() {
  document.getElementById('thtColorVault')?.classList.remove('tht-active');
}

document.getElementById('thtColorVault')?.addEventListener('click', function(e) {
  if (e.target === this) thtCloseColorVault();
});

document.getElementById('thtVaultSearch')?.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  const activePanel = document.querySelector('.tht-vault-panel.tht-active');
  if (!activePanel) return;

  const swatches = activePanel.querySelectorAll('.tht-color-swatch');
  let found = 0;

  swatches.forEach(s => {
    const match = !query || s.dataset.search.includes(query);
    s.style.display = match ? '' : 'none';
    if (match) found++;
  });

  let noResults = activePanel.querySelector('.tht-vault-no-results');
  if (found === 0) {
    if (!noResults) {
      const msg = document.createElement('div');
      msg.className = 'tht-vault-no-results';
      msg.textContent = '🔍 لا توجد ألوان تطابق البحث';
      activePanel.appendChild(msg);
    }
  } else if (noResults) {
    noResults.remove();
  }
});

/* ═══════════════════════════════════════════════
   tht : إعادة الضبط والحفظ
   ═══════════════════════════════════════════════ */
function thtClearCustomOverrides() {
  const vars = [
    '--tht-accent','--tht-accent-light','--tht-accent-dark','--tht-accent-glow','--tht-accent-soft',
    '--tht-bg-primary','--tht-bg-card','--tht-text-primary','--tht-text-muted',
    '--tht-border-color','--tht-border-strong'
  ];
  vars.forEach(v => document.documentElement.style.removeProperty(v));

  document.querySelectorAll('.tht-card, .tht-sector-card, .tht-feature-card, .tht-frappe-item').forEach(el => el.style.borderRadius = '');
  document.querySelectorAll('.tht-timeline-content, .tht-contact-section').forEach(el => el.style.borderRadius = '');
  document.querySelectorAll('.tht-btn, .tht-hero-badge, .tht-contact-item').forEach(el => el.style.borderRadius = '');
}

function thtResetDesign() {
  if (!confirm('هل تريد إعادة كل التخصيصات إلى الوضع الافتراضي؟')) return;

  ['tht-theme','tht-font','tht-fontSize','tht-headingSize','tht-cardRadius','tht-sectionRadius','tht-btnRadius','tht-custom']
    .forEach(k => localStorage.removeItem(k));

  document.documentElement.setAttribute('data-theme', 'dark-gold');
  document.documentElement.style.fontSize = '';
  document.documentElement.style.removeProperty('--tht-font-heading');
  document.documentElement.style.removeProperty('--tht-font-body');

  thtClearCustomOverrides();

  document.querySelectorAll('.tht-theme-card').forEach(c => c.classList.toggle('tht-active', c.dataset.theme === 'dark-gold'));
  document.querySelectorAll('.tht-font-card').forEach(c => c.classList.toggle('tht-active', c.dataset.font === 'Cairo'));

  const fsb = document.getElementById('thtFontSizeBase');
  const fsbv = document.getElementById('thtFontSizeBaseValue');
  const fsh = document.getElementById('thtFontSizeHeading');
  const fshv = document.getElementById('thtFontSizeHeadingValue');
  if (fsb) fsb.value = 16;
  if (fsbv) fsbv.textContent = '16px';
  if (fsh) fsh.value = 2.6;
  if (fshv) fshv.textContent = '2.6rem';

  setTimeout(thtUpdateColorInputsFromTheme, 100);
}

function thtSaveDesign() {
  const design = {
    signature: 'tht',
    theme: document.documentElement.getAttribute('data-theme'),
    accent: document.getElementById('thtColorAccent')?.value,
    bgPrimary: document.getElementById('thtColorBgPrimary')?.value,
    bgCard: document.getElementById('thtColorBgCard')?.value,
    textPrimary: document.getElementById('thtColorTextPrimary')?.value,
    textMuted: document.getElementById('thtColorTextMuted')?.value,
    border: document.getElementById('thtColorBorder')?.value,
    fontSize: thtFontSizeBase?.value,
    headingSize: thtFontSizeHeading?.value
  };
  localStorage.setItem('tht-custom', JSON.stringify(design));
  alert('✅ تم حفظ التصميم بنجاح!\nSignature: tht');
}

/* ═══════════════════════════════════════════════
   tht : تحميل التصميم المحفوظ
   ═══════════════════════════════════════════════ */
function thtLoadSavedDesign() {
  const savedTheme = localStorage.getItem('tht-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.querySelectorAll('.tht-theme-card').forEach(c => {
      c.classList.toggle('tht-active', c.dataset.theme === savedTheme);
    });
  }

  const savedFont = localStorage.getItem('tht-font');
  if (savedFont) {
    document.documentElement.style.setProperty('--tht-font-heading', `'${savedFont}', sans-serif`);
    document.documentElement.style.setProperty('--tht-font-body', `'${savedFont}', sans-serif`);
    document.querySelectorAll('.tht-font-card').forEach(c => {
      c.classList.toggle('tht-active', c.dataset.font === savedFont);
    });
  }

  const savedFontSize = localStorage.getItem('tht-fontSize');
  if (savedFontSize) {
    document.documentElement.style.fontSize = savedFontSize + 'px';
    const fsb = document.getElementById('thtFontSizeBase');
    const fsbv = document.getElementById('thtFontSizeBaseValue');
    if (fsb) fsb.value = savedFontSize;
    if (fsbv) fsbv.textContent = savedFontSize + 'px';
  }

  const savedHeadingSize = localStorage.getItem('tht-headingSize');
  if (savedHeadingSize) {
    document.querySelectorAll('.tht-section-title').forEach(h => h.style.fontSize = savedHeadingSize + 'rem');
    const fsh = document.getElementById('thtFontSizeHeading');
    const fshv = document.getElementById('thtFontSizeHeadingValue');
    if (fsh) fsh.value = savedHeadingSize;
    if (fshv) fshv.textContent = savedHeadingSize + 'rem';
  }

  const savedCardRadius = localStorage.getItem('tht-cardRadius');
  if (savedCardRadius) {
    document.querySelectorAll('.tht-card, .tht-sector-card, .tht-feature-card, .tht-frappe-item').forEach(el => {
      el.style.borderRadius = savedCardRadius + 'px';
    });
  }

  setTimeout(thtUpdateColorInputsFromTheme, 200);
}

/* ═══════════════════════════════════════════════
   tht : الكتاب 3D (بروفايلي)
   ═══════════════════════════════════════════════ */
function thtBuildBook() {
  const book = document.getElementById('thtBook3d');
  const dots = document.getElementById('thtBookDots');
  if (!book) return;

  book.innerHTML = '';
  if (dots) dots.innerHTML = '';

  thtBookPages.forEach((page, index) => {
    const pageEl = document.createElement('div');
    pageEl.className = 'tht-book-page';
    pageEl.dataset.pageIndex = index;
    pageEl.innerHTML = `
      <span class="tht-book-page-icon">${page.icon}</span>
      <h3 class="tht-book-page-title">${page.title}</h3>
      <div class="tht-book-page-content">${page.content}</div>
      <span class="tht-book-page-number">— ${index + 1} —</span>
    `;
    book.appendChild(pageEl);

    if (dots) {
      const dot = document.createElement('div');
      dot.className = 'tht-book-dot' + (index === 0 ? ' tht-active' : '');
      dot.dataset.dotIndex = index;
      dot.addEventListener('click', () => thtGoToPage(index));
      dots.appendChild(dot);
    }
  });

  thtUpdateBookView();
}

function thtUpdateBookView() {
  const pages = document.querySelectorAll('.tht-book-page');
  const dots = document.querySelectorAll('.tht-book-dot');
  const counter = document.getElementById('thtPageCounter');
  const prevBtn = document.getElementById('thtBookPrev');
  const nextBtn = document.getElementById('thtBookNext');

  pages.forEach((page, index) => {
    page.classList.remove('tht-page-left', 'tht-page-right', 'tht-hidden');

    if (index === thtState.currentPage) {
      page.classList.add('tht-page-right');
    } else if (index < thtState.currentPage) {
      page.classList.add('tht-page-left');
    } else {
      page.classList.add('tht-hidden');
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('tht-active', index === thtState.currentPage);
  });

  if (counter) counter.textContent = `${thtState.currentPage + 1} / ${thtState.totalPages}`;
  if (prevBtn) prevBtn.disabled = thtState.currentPage === 0;
  if (nextBtn) nextBtn.disabled = thtState.currentPage === thtState.totalPages - 1;
}

function thtGoToPage(index) {
  if (thtState.isAnimating) return;
  if (index < 0 || index >= thtState.totalPages) return;
  if (index === thtState.currentPage) return;

  thtState.isAnimating = true;
  thtState.currentPage = index;
  thtUpdateBookView();

  setTimeout(() => {
    thtState.isAnimating = false;
  }, 800);
}

function thtNextPage() {
  if (thtState.currentPage < thtState.totalPages - 1) {
    thtGoToPage(thtState.currentPage + 1);
  }
}

function thtPrevPage() {
  if (thtState.currentPage > 0) {
    thtGoToPage(thtState.currentPage - 1);
  }
}

/* ربط الأزرار */
document.getElementById('thtBookNext')?.addEventListener('click', thtNextPage);
document.getElementById('thtBookPrev')?.addEventListener('click', thtPrevPage);

/* أسهم الكيبورد */
document.addEventListener('keydown', e => {
  const portfolio = document.getElementById('tht-portfolio');
  if (!portfolio) return;

  const rect = portfolio.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;

  if (e.key === 'ArrowLeft') thtNextPage();
  if (e.key === 'ArrowRight') thtPrevPage();
});

/* تمرير الفأرة */
const bookStage = document.querySelector('.tht-book3d-stage');
bookStage?.addEventListener('wheel', e => {
  e.preventDefault();
  if (e.deltaY > 0) thtNextPage();
  else thtPrevPage();
}, { passive: false });

/* ═══════════════════════════════════════════════
   tht : التنقل النشط
   ═══════════════════════════════════════════════ */
const thtNavLinks = document.querySelectorAll('.tht-nav-link');
const thtSlideNavItems = document.querySelectorAll('.tht-slide-nav-item');
const thtSections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  thtSections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });

  thtNavLinks.forEach(l => {
    l.classList.toggle('tht-active', l.getAttribute('href') === `#${current}`);
  });

  thtSlideNavItems.forEach(item => {
    item.classList.toggle('tht-active', item.dataset.section === current);
  });
});

/* ═══════════════════════════════════════════════
   tht : ESC
   ═══════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.tht-modal-overlay.tht-active').forEach(m => m.classList.remove('tht-active'));
    document.getElementById('thtDesignModalOverlay')?.classList.remove('tht-active');
    document.getElementById('thtColorVault')?.classList.remove('tht-active');
    thtCloseSlide();
    document.body.style.overflow = '';
  }
});

/* ═══════════════════════════════════════════════
   tht : التهيئة النهائية
   ═══════════════════════════════════════════════ */
function thtInit() {
  thtBuildColorVault();
  thtBuildBook();
  thtLoadSavedDesign();
  setTimeout(thtUpdateColorInputsFromTheme, 300);

  console.log(`%c✦ ${tht.nameAr} ✦`, 'color:#C9A227;font-size:16px;font-weight:900;');
  console.log(`%cSignature: ${tht.signature}`, 'color:#4A9EFF;font-size:12px;font-weight:700;');
  console.log(`%cVersion: ${tht.version} | © ${tht.year}`, 'color:#718096;font-size:11px;');
  console.log(`%c🎨 الألوان: ${Object.values(thtColorVault).reduce((s, g) => s + g.colors.length, 0)}`, 'color:#48bb78;font-size:11px;');
  console.log(`%c📖 صفحات الكتاب: ${thtBookPages.length}`, 'color:#ED8936;font-size:11px;');
}

document.addEventListener('DOMContentLoaded', thtInit);


/* ═══════════════════════════════════════════════════════════════════
   tht : Flipbook 3D - الكتاب التفاعلي
   Author: tht - Thuraya Tech
   Signature: tht
   Description: عرض PDF ككتاب 3D قابل للتقليب باستخدام PDF.js + StPageFlip
   ═══════════════════════════════════════════════════════════════════ */

/* ═══ tht : مسار ملف PDF - ✏️ عدّل هذا السطر فقط ═══ */
const thtPdfPath = 'thuraya-profile.pdf'; // ← اسم ملف PDF الذي سترفعه

/* ═══════════════════════════════════════════════
   thtFlipbook : مدير الكتاب التفاعلي
   ═══════════════════════════════════════════════ */
const thtFlipbook = {
  pdfDoc: null,
  pageFlip: null,
  currentPage: 0,
  totalPages: 0,
  scale: 1.5,           // دقة عرض الصفحات
  zoom: 1,              // مستوى التكبير الحالي
  isRTL: true,          // اتجاه عربي
  isPortrait: true,     // وضع الصفحة الواحدة

  /* العناصر */
  els: {
    container: null,
    loading: null,
    progressBar: null,
    pageInput: null,
    pageTotal: null,
    flipbook: null,
    prevBtn: null,
    nextBtn: null,
    prevBtn2: null,
    nextBtn2: null,
    firstBtn: null,
    lastBtn: null,
    zoomInBtn: null,
    zoomOutBtn: null,
    fullscreenBtn: null,
    downloadBtn: null
  },

  /* ═══ تهيئة ═══ */
  async init() {
    this.cacheElements();
    if (!this.els.container) return;

    this.bindEvents();

    try {
      await this.loadPdf();
    } catch (err) {
      console.error('[tht-flipbook] فشل التحميل:', err);
      this.showError('تعذر تحميل الكتاب. تأكد من وجود ملف: ' + thtPdfPath);
    }
  },

  cacheElements() {
    this.els.container = document.getElementById('thtFlipbook');
    this.els.loading = document.getElementById('thtFlipLoading');
    this.els.progressBar = document.getElementById('thtFlipProgressBar');
    this.els.pageInput = document.getElementById('thtPageInput');
    this.els.pageTotal = document.getElementById('thtPageTotal');
    this.els.flipbook = document.getElementById('thtFlipbook');

    this.els.prevBtn = document.getElementById('thtFlipPrev');
    this.els.nextBtn = document.getElementById('thtFlipNext');
    this.els.prevBtn2 = document.getElementById('thtFlipPrev2');
    this.els.nextBtn2 = document.getElementById('thtFlipNext2');
    this.els.firstBtn = document.getElementById('thtFlipFirst');
    this.els.lastBtn = document.getElementById('thtFlipLast');
    this.els.zoomInBtn = document.getElementById('thtFlipZoomIn');
    this.els.zoomOutBtn = document.getElementById('thtFlipZoomOut');
    this.els.fullscreenBtn = document.getElementById('thtFlipFullscreen');
    this.els.downloadBtn = document.getElementById('thtFlipDownload');
  },

  bindEvents() {
    this.els.prevBtn?.addEventListener('click', () => this.prev());
    this.els.nextBtn?.addEventListener('click', () => this.next());
    this.els.prevBtn2?.addEventListener('click', () => this.prev());
    this.els.nextBtn2?.addEventListener('click', () => this.next());
    this.els.firstBtn?.addEventListener('click', () => this.goTo(0));
    this.els.lastBtn?.addEventListener('click', () => this.goTo(this.totalPages - 1));
    this.els.zoomInBtn?.addEventListener('click', () => this.zoomIn());
    this.els.zoomOutBtn?.addEventListener('click', () => this.zoomOut());
    this.els.fullscreenBtn?.addEventListener('click', () => this.toggleFullscreen());
    this.els.downloadBtn?.addEventListener('click', () => this.download());

    /* أسهم الكيبورد */
    document.addEventListener('keydown', (e) => {
      const portfolio = document.getElementById('tht-portfolio');
      if (!portfolio) return;
      const rect = portfolio.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') this.next();
      if (e.key === 'ArrowRight') this.prev();
    });
  },

  /* ═══ تحميل PDF ═══ */
  async loadPdf() {
    if (typeof pdfjsLib === 'undefined') {
      throw new Error('PDF.js غير محمّل');
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const loadingTask = pdfjsLib.getDocument(thtPdfPath);

    loadingTask.onProgress = (progress) => {
      if (progress.total > 0) {
        const percent = (progress.loaded / progress.total) * 100;
        this.setProgress(percent);
      }
    };

    this.pdfDoc = await loadingTask.promise;
    this.totalPages = this.pdfDoc.numPages;

    if (this.els.pageTotal) {
      this.els.pageTotal.textContent = this.totalPages;
    }

    await this.renderBook();
  },

  setProgress(percent) {
    if (this.els.progressBar) {
      this.els.progressBar.style.width = percent + '%';
    }
  },

  /* ═══ بناء الكتاب ═══ */
  async renderBook() {
    const flipContainer = this.els.flipbook;
    if (!flipContainer) return;

    flipContainer.innerHTML = '';
    this.setProgress(0);

    /* تحديد وضع العرض حسب عرض الشاشة */
    const isMobile = window.innerWidth < 900;
    this.isPortrait = isMobile;

    /* حساب أبعاد الصفحة من أول صفحة */
    const firstPage = await this.pdfDoc.getPage(1);
    const viewport = firstPage.getViewport({ scale: this.scale });
    const pageWidth = viewport.width;
    const pageHeight = viewport.height;

    /* حجم مخصص للجوال */
    const displayWidth = isMobile ? 320 : pageWidth;
    const displayHeight = isMobile ? (pageHeight / pageWidth) * 320 : pageHeight;

    /* إنشاء عناصر الصفحات (placeholder أولاً) */
    const pagePromises = [];
    for (let i = 1; i <= this.totalPages; i++) {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'tht-flip-page';
      pageDiv.dataset.pageNum = i;
      pageDiv.style.width = displayWidth + 'px';
      pageDiv.style.height = displayHeight + 'px';
      pageDiv.style.background = 'white';
      pageDiv.style.display = 'flex';
      pageDiv.style.alignItems = 'center';
      pageDiv.style.justifyContent = 'center';
      pageDiv.style.overflow = 'hidden';

      const loadingText = document.createElement('div');
      loadingText.className = 'tht-flip-page-loading';
      loadingText.textContent = '⏳ ' + i;
      loadingText.style.color = '#999';
      loadingText.style.fontSize = '14px';
      pageDiv.appendChild(loadingText);

      flipContainer.appendChild(pageDiv);
    }

    /* الآن نرسم الصفحات بالتوازي */
    const renderPromises = [];
    for (let i = 1; i <= this.totalPages; i++) {
      renderPromises.push(this.renderPage(i, displayWidth, displayHeight));
    }

    /* تحديث التقدم أثناء الرسم */
    let rendered = 0;
    const total = this.totalPages;

    await Promise.all(
      renderPromises.map(p =>
        p.then(() => {
          rendered++;
          this.setProgress((rendered / total) * 100);
        })
      )
    );

    /* إخفاء شاشة التحميل */
    this.els.loading?.classList.add('tht-hidden');

    /* إظهار الكتاب */
    flipContainer.classList.remove('tht-hidden');

    /* تهيئة StPageFlip */
    this.initPageFlip(displayWidth, displayHeight);
  },

  async renderPage(pageNum, width, height) {
    try {
      const page = await this.pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 2 });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.objectFit = 'contain';
      canvas.style.display = 'block';

      const context = canvas.getContext('2d');
      await page.render({ canvasContext: context, viewport }).promise;

      const pageDiv = document.querySelector(`.tht-flip-page[data-page-num="${pageNum}"]`);
      if (pageDiv) {
        pageDiv.innerHTML = '';
        pageDiv.appendChild(canvas);
      }
    } catch (err) {
      console.warn('[tht-flipbook] فشل رسم الصفحة', pageNum, err);
    }
  },

  /* ═══ تهيئة StPageFlip ═══ */
  initPageFlip(width, height) {
    const flipContainer = this.els.flipbook;
    if (!flipContainer || typeof St === 'undefined') return;

    const isMobile = window.innerWidth < 900;

    this.pageFlip = new St.PageFlip(flipContainer, {
      width: width,
      height: height,
      size: 'stretch',
      minWidth: 280,
      maxWidth: isMobile ? 400 : 700,
      minHeight: 400,
      maxHeight: isMobile ? 560 : 1000,
      drawShadow: true,
      flippingTime: 900,
      usePortrait: true,
      startZIndex: 0,
      autoSize: true,
      maxShadowOpacity: 0.5,
      showCover: false,
      mobileScrollSupport: false,
      useMouseEvents: true,
      swipeDistance: 30,
      clickEventForward: true,
      showPageCorners: true,
      disableFlipByClick: false
    });

    this.pageFlip.loadFromHTML(document.querySelectorAll('.tht-flip-page'));

    /* أحداث التقليب */
    this.pageFlip.on('flip', (e) => {
      this.currentPage = e.data;
      if (this.els.pageInput) {
        this.els.pageInput.value = this.currentPage + 1;
      }
      this.updateButtons();
    });

    this.pageFlip.on('changeOrientation', (mode) => {
      console.log('[tht-flipbook] الاتجاه:', mode);
    });

    this.currentPage = 0;
    if (this.els.pageInput) this.els.pageInput.value = 1;
    this.updateButtons();

    console.log(`%c📖 الكتاب جاهز - ${this.totalPages} صفحة`, 'color:#48bb78;font-size:12px;font-weight:700;');
  },

  /* ═══ التنقل ═══ */
  next() {
    if (!this.pageFlip) return;
    this.pageFlip.flipNext();
  },

  prev() {
    if (!this.pageFlip) return;
    this.pageFlip.flipPrev();
  },

  goTo(index) {
    if (!this.pageFlip) return;
    this.pageFlip.turnToPage(index);
  },

  updateButtons() {
    const atStart = this.currentPage === 0;
    const atEnd = this.currentPage >= this.totalPages - 1;

    if (this.els.prevBtn) this.els.prevBtn.disabled = atStart;
    if (this.els.nextBtn) this.els.nextBtn.disabled = atEnd;
    if (this.els.prevBtn2) this.els.prevBtn2.disabled = atStart;
    if (this.els.nextBtn2) this.els.nextBtn2.disabled = atEnd;
    if (this.els.firstBtn) this.els.firstBtn.disabled = atStart;
    if (this.els.lastBtn) this.els.lastBtn.disabled = atEnd;
  },

  /* ═══ التكبير ═══ */
  zoomIn() {
    if (this.zoom >= 2) return;
    this.zoom += 0.15;
    this.applyZoom();
  },

  zoomOut() {
    if (this.zoom <= 0.6) return;
    this.zoom -= 0.15;
    this.applyZoom();
  },

  applyZoom() {
    if (this.els.flipbook) {
      this.els.flipbook.style.transform = `scale(${this.zoom})`;
      this.els.flipbook.style.transition = 'transform 0.3s ease';
    }
  },

  /* ═══ ملء الشاشة ═══ */
  toggleFullscreen() {
    const wrapper = document.querySelector('.tht-flipbook-wrapper');
    if (!wrapper) return;

    if (!document.fullscreenElement) {
      wrapper.requestFullscreen?.() || wrapper.webkitRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.();
    }

    /* إعادة الحجم بعد تغيير الوضع */
    setTimeout(() => {
      this.pageFlip?.update?.();
    }, 500);
  },

  /* ═══ تحميل PDF ═══ */
  download() {
    const link = document.createElement('a');
    link.href = thtPdfPath;
    link.download = 'Thuraya-Tech-Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  /* ═══ عرض خطأ ═══ */
  showError(message) {
    if (this.els.loading) {
      this.els.loading.innerHTML = `
        <div style="text-align:center; padding: 40px;">
          <div style="font-size: 60px; margin-bottom: 20px;">📕</div>
          <p style="color: var(--tht-accent); font-family: 'Cairo', sans-serif; font-weight: 700; margin-bottom: 10px;">
            ${message}
          </p>
          <p style="color: var(--tht-text-muted); font-size: 0.9rem;">
            ضع ملف PDF باسم <code style="background: var(--tht-accent-soft); padding: 2px 8px; border-radius: 4px;">${thtPdfPath}</code> في نفس مجلد الموقع.
          </p>
        </div>
      `;
    }
  }
};

/* ═══════════════════════════════════════════════
   tht : إعادة تهيئة الكتاب عند تغيير حجم الشاشة
   ═══════════════════════════════════════════════ */
let thtResizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(thtResizeTimer);
  thtResizeTimer = setTimeout(() => {
    thtFlipbook.pageFlip?.update?.();
  }, 400);
});

/* ═══════════════════════════════════════════════
   tht : تهيئة الكتاب عند تحميل الصفحة
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  thtFlipbook.init();
});
/* ═══════════════════════════════════════════════════════════════════
   tht : نهاية السكربت
   Author: tht - Thuraya Tech
   Signature: tht
   ═══════════════════════════════════════════════════════════════════ */