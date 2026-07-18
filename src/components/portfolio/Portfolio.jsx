import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LangContext';
import { info } from '../../info/Info';
import { urius } from '../../content/urius';

function Tag({ children }) {
  return (
    <span
      style={{
        fontSize: '12px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--muted)',
        border: '1px solid var(--line)',
        borderRadius: '4px',
        padding: '2px 8px',
      }}
    >
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  const { t } = useLang();
  return (
    <article
      style={{
        border: '1px solid var(--line)',
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'var(--surface)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ aspectRatio: '16 / 10', background: 'var(--fill)', overflow: 'hidden' }}>
        <img src={project.image} alt={t(project.title)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <h3 style={{ fontSize: '17px' }}>{t(project.title)}</h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', flex: 1 }}>{t(project.blurb)}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '4px', fontSize: '13px' }}>
          {project.live && (
            <a className="link-underline" href={project.live} target="_blank" rel="noreferrer">
              {t({ ko: '보기', en: 'Live' })} ↗
            </a>
          )}
          {project.source && (
            <a className="link-underline" href={project.source} target="_blank" rel="noreferrer">
              {t({ ko: '코드', en: 'Code' })} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const { t } = useLang();

  return (
    <div className="wrap" style={{ paddingTop: '4.5rem' }}>
      <div className="eyebrow" style={{ marginBottom: '16px' }}>{t({ ko: '작업', en: 'Work' })}</div>

      {/* flagship */}
      <Link
        to="/urius"
        style={{
          display: 'block',
          border: '1px solid var(--line)',
          borderRadius: '14px',
          padding: '26px 28px',
          background: 'var(--surface)',
          marginBottom: '2.5rem',
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

      <div className="eyebrow" style={{ marginBottom: '16px' }}>{t({ ko: '그 밖의 작업', en: 'Other work' })}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '18px',
        }}
      >
        {info.projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}
