import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import { info } from '../info/Info';

const links = [
  { to: '/', label: { ko: '홈', en: 'Home' }, end: true },
  { to: '/about', label: { ko: '소개', en: 'About' } },
  { to: '/portfolio', label: { ko: '작업', en: 'Work' } },
];

function LangToggle() {
  const { lang, setLang } = useLang();
  const btn = (code, text) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        font: 'inherit',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        letterSpacing: '0.05em',
        color: lang === code ? 'var(--ink)' : 'var(--faint)',
        borderBottom: lang === code ? '1px solid var(--ink)' : '1px solid transparent',
        paddingBottom: '1px',
      }}
    >
      {text}
    </button>
  );
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      {btn('ko', 'KO')}
      <span style={{ color: 'var(--line-2)', fontSize: '12px' }}>/</span>
      {btn('en', 'EN')}
    </span>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const linkStyle = ({ isActive }) => ({
    fontSize: '14px',
    color: isActive ? 'var(--ink)' : 'var(--muted)',
    borderBottom: isActive ? '1px solid var(--ink)' : '1px solid transparent',
    paddingBottom: '2px',
    transition: 'color 160ms ease',
  });

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'rgba(251,251,249,0.85)',
        backdropFilter: 'saturate(180%) blur(8px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '58px',
        }}
      >
        <NavLink to="/" end style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)', whiteSpace: 'nowrap' }}>
          {t(info.name)}
          <span className="nav-brand-sec" style={{ color: 'var(--faint)', fontWeight: 400, marginLeft: '8px' }}>
            {t({ ko: 'Hyunjin Roh', en: '노현진' })}
          </span>
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={linkStyle}>
              {t(l.label)}
            </NavLink>
          ))}
          <span style={{ width: '1px', height: '16px', background: 'var(--line-2)' }} />
          <LangToggle />
        </div>
      </div>
    </nav>
  );
}
