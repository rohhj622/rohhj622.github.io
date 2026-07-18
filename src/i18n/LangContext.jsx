import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const LangContext = createContext(null);

function readInitialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'ko' || saved === 'en') return saved;
  } catch (e) {
    /* localStorage unavailable */
  }
  return 'ko';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang);

  const changeLang = useCallback((next) => {
    setLang(next);
    try {
      localStorage.setItem('lang', next);
    } catch (e) {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    changeLang(lang === 'ko' ? 'en' : 'ko');
  }, [lang, changeLang]);

  // t() resolves a { ko, en } object to the active language.
  // Plain strings pass through unchanged.
  const t = useCallback(
    (value) => {
      if (value == null) return '';
      if (typeof value === 'string') return value;
      return value[lang] ?? value.ko ?? value.en ?? '';
    },
    [lang]
  );

  const ctx = useMemo(() => ({ lang, setLang: changeLang, toggleLang, t }), [lang, changeLang, toggleLang, t]);

  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}
