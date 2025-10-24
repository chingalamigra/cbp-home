/**
 * Internationalization (i18n) System
 * Handles automatic language detection, manual switching, and translation
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    storageKey: 'cbp-warning-language',
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ja', 'ar', 'ru', 'hi'],
    debugMode: false
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /**
   * Initialize i18n system
   */
  function init() {
    const preferredLang = getPreferredLanguage();
    setLanguage(preferredLang);
    initLanguageSwitcher();
  }

  /**
   * Get preferred language in order of priority:
   * 1. User's saved preference (localStorage)
   * 2. Browser's language preference
   * 3. Default language (English)
   */
  function getPreferredLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem(CONFIG.storageKey);
    if (savedLang && CONFIG.supportedLanguages.includes(savedLang)) {
      debug('Using saved language:', savedLang);
      return savedLang;
    }

    // Get browser language
    const browserLang = detectBrowserLanguage();
    if (browserLang) {
      debug('Using browser language:', browserLang);
      return browserLang;
    }

    debug('Using default language:', CONFIG.defaultLanguage);
    return CONFIG.defaultLanguage;
  }

  /**
   * Detect browser's preferred language
   * Checks Accept-Language header and navigator.language
   */
  function detectBrowserLanguage() {
    // Try navigator.language first
    const navLang = navigator.language || navigator.userLanguage;
    if (navLang) {
      const lang = parseLanguageCode(navLang);
      if (lang && CONFIG.supportedLanguages.includes(lang)) {
        return lang;
      }
    }

    // Try navigator.languages (more specific)
    if (navigator.languages && navigator.languages.length > 0) {
      for (let i = 0; i < navigator.languages.length; i++) {
        const lang = parseLanguageCode(navigator.languages[i]);
        if (lang && CONFIG.supportedLanguages.includes(lang)) {
          return lang;
        }
      }
    }

    return null;
  }

  /**
   * Parse language code from browser string (e.g., 'en-US' -> 'en')
   */
  function parseLanguageCode(langString) {
    if (!langString) return null;

    // First try exact match
    if (CONFIG.supportedLanguages.includes(langString)) {
      return langString;
    }

    // Try language family (e.g., 'en' from 'en-US')
    const baseLanguage = langString.split('-')[0].toLowerCase();
    if (CONFIG.supportedLanguages.includes(baseLanguage)) {
      return baseLanguage;
    }

    // Try with special mapping for Chinese
    if (langString.includes('zh') || langString.includes('中')) {
      return 'zh';
    }

    return null;
  }

  /**
   * Set active language and update page
   */
  function setLanguage(lang) {
    if (!CONFIG.supportedLanguages.includes(lang)) {
      lang = CONFIG.defaultLanguage;
    }

    // Save preference
    localStorage.setItem(CONFIG.storageKey, lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = getTextDirection(lang);

    // Update all translatable elements
    updatePageTranslations(lang);

    // Trigger event for other listeners
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));

    debug('Language set to:', lang);
  }

  /**
   * Get text direction for language (ltr or rtl)
   */
  function getTextDirection(lang) {
    // RTL languages
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    return rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
  }

  /**
   * Update all translatable elements on the page
   */
  function updatePageTranslations(lang) {
    // Find all elements with data-i18n attribute
    const translatableElements = document.querySelectorAll('[data-i18n]');

    translatableElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getTranslation(key, lang);

      if (translation) {
        // Check if element should use text content or HTML
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  /**
   * Get translation for a key
   * Supports nested keys like "nav.home" or "cards.location"
   */
  function getTranslation(key, lang) {
    // Get the embedded translations from page data
    const translations = window.i18nData || {};

    if (!translations[lang]) {
      // Fallback to English if language not available
      lang = CONFIG.defaultLanguage;
    }

    // Navigate nested object
    const keys = key.split('.');
    let value = translations[lang];

    for (let i = 0; i < keys.length; i++) {
      if (value && typeof value === 'object' && keys[i] in value) {
        value = value[keys[i]];
      } else {
        debug('Translation not found:', key, 'in language:', lang);
        return null;
      }
    }

    return value;
  }

  /**
   * Initialize language switcher dropdown
   */
  function initLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;

    const select = switcher.querySelector('select');
    if (!select) {
      createLanguageSwitcher(switcher);
      return;
    }

    // Update current language
    const currentLang = localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLanguage;
    select.value = currentLang;

    // Add change listener
    select.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  /**
   * Create language switcher if it doesn't exist
   */
  function createLanguageSwitcher(container) {
    const currentLang = localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLanguage;

    const select = document.createElement('select');
    select.id = 'language-select';
    select.className = 'language-select';
    select.setAttribute('aria-label', 'Select language');

    // Get language data from page
    const languagesData = window.languagesData || {};

    CONFIG.supportedLanguages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;

      // Try to get translated name
      const langData = languagesData[lang] || {};
      const langName = langData.native || langData.name || lang.toUpperCase();
      const flag = langData.flag || '';

      option.textContent = `${flag} ${langName}`;
      option.selected = (lang === currentLang);

      select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });

    container.appendChild(select);
  }

  /**
   * Debug logging
   */
  function debug(...args) {
    if (CONFIG.debugMode || (window.location.hash === '#i18n-debug')) {
      console.log('[i18n]', ...args);
    }
  }

  /**
   * Public API - Expose setLanguage for external use
   */
  window.i18n = {
    setLanguage: setLanguage,
    getPreferredLanguage: getPreferredLanguage,
    getCurrentLanguage: () => localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLanguage,
    debug: () => { CONFIG.debugMode = true; }
  };

  debug('i18n system initialized');

})();

/**
 * CSS Styling for Language Switcher
 * Inject into page
 */
(function() {
  const style = document.createElement('style');
  style.textContent = `
    #language-switcher,
    .language-select {
      position: relative;
      display: inline-block;
    }

    .language-select {
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      border: 1px solid #64748b;
      background-color: #1e293b;
      color: #f1f5f9;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .language-select:hover {
      border-color: #94a3b8;
      background-color: #334155;
    }

    .language-select:focus-visible {
      outline: 3px solid #1e40af;
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      .language-select {
        padding: 0.625rem 0.875rem;
        font-size: 0.9375rem;
      }
    }

    /* RTL Support */
    [dir="rtl"] .language-select {
      direction: rtl;
      text-align: right;
    }

    [dir="rtl"] .language-select option {
      direction: rtl;
      text-align: right;
    }
  `;

  if (document.head) {
    document.head.appendChild(style);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(style);
    });
  }
})();
