import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LangContext';
import { info } from '../../info/Info';
import { urius } from '../../content/urius';

export default function Home() {
  const { t } = useLang();

  return (
    <div className="wrap" style={{ paddingTop: '4.5rem' }}>
      {/* hero */}
      <section style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <img
          src={info.selfPortrait}
          alt={t(info.name)}
          width={84}
          height={84}
          style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line)', flexShrink: 0 }}
        />
        <div style={{ flex: '1 1 320px' }}>
          <div className="eyebrow" style={{ marginBottom: '10px' }}>{t(info.role)}</div>
          <h1 style={{ fontSize: '38px', marginBottom: '18px' }}>
            {t(info.name)}
            <span style={{ color: 'var(--faint)', fontWeight: 400, fontSize: '20px', marginLeft: '12px' }}>
              {t({ ko: 'Hyunjin Roh', en: '노현진' })}
            </span>
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--ink-2)', maxWidth: '560px', marginBottom: '14px' }}>
            {t(info.tagline)}
          </p>
          <p style={{ maxWidth: '560px', color: 'var(--muted)' }}>{t(info.bio)}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px', marginTop: '20px', fontSize: '13px', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
            {info.facts.map((f, i) => (
              <span key={i}>{t(f)}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '18px', marginTop: '22px', fontSize: '14px' }}>
            <a className="link-underline" href={info.socials[0].link} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="link-underline" href={info.socials[1].link} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="link-underline" href={`mailto:${info.email}`}>Email</a>
          </div>
        </div>
      </section>

      <hr className="hairline" style={{ margin: '3.25rem 0' }} />

      {/* featured: Urius */}
      <section>
        <div className="eyebrow" style={{ marginBottom: '16px' }}>{t({ ko: '대표 작업', en: 'Featured work' })}</div>
        <Link
          to="/urius"
          style={{
            display: 'block',
            border: '1px solid var(--line)',
            borderRadius: '14px',
            padding: '26px 28px',
            background: 'var(--surface)',
            transition: 'border-color 180ms ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--line-2)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '24px' }}>Urius</h2>
            <span style={{ fontSize: '11px', color: 'var(--accent-soft-ink)', background: 'var(--accent-soft-bg)', padding: '3px 9px', borderRadius: '20px' }}>
              {t({ ko: 'App Store 출시', en: 'Live on App Store' })}
            </span>
          </div>
          <p style={{ color: 'var(--ink-2)', maxWidth: '620px', marginBottom: '16px' }}>{t(urius.hero.tagline)}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--faint)' }}>{urius.hero.stack}</span>
            <span style={{ fontSize: '14px', color: 'var(--ink)' }}>{t({ ko: '케이스 스터디 보기', en: 'Read the case study' })} →</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
