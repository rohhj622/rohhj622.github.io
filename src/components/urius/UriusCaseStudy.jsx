import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LangContext';
import { urius } from '../../content/urius';

function SectionLabel({ children }) {
  return <div className="eyebrow" style={{ marginBottom: '22px' }}>{children}</div>;
}

function Hero() {
  const { t } = useLang();
  const { hero, appStore } = urius;
  return (
    <header style={{ paddingTop: '3.5rem', paddingBottom: '2.25rem', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {hero.badges.map((b, i) => (
          <span
            key={i}
            style={
              b.kind === 'live'
                ? { fontSize: '11px', color: 'var(--accent-soft-ink)', background: 'var(--accent-soft-bg)', padding: '4px 10px', borderRadius: '20px' }
                : { fontSize: '11px', color: 'var(--muted)', background: 'var(--fill)', padding: '4px 10px', borderRadius: '20px' }
            }
          >
            {t(b)}
          </span>
        ))}
      </div>

      <div className="eyebrow" style={{ marginBottom: '14px' }}>{t({ ko: '케이스 스터디', en: 'Case study' })} — 01</div>
      <h1 style={{ fontSize: '44px', marginBottom: '16px' }}>Urius</h1>
      <p style={{ fontSize: '19px', color: 'var(--ink-2)', maxWidth: '600px', marginBottom: '22px' }}>{t(hero.tagline)}</p>

      {/* agent-forward lede */}
      <div
        style={{
          borderLeft: '2px solid var(--accent)',
          background: 'var(--accent-soft-bg)',
          borderRadius: '0 8px 8px 0',
          padding: '14px 18px',
          maxWidth: '620px',
          marginBottom: '26px',
        }}
      >
        <p style={{ fontSize: '15px', color: 'var(--ink-2)' }}>{t(hero.lede)}</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 26px', alignItems: 'baseline', fontSize: '13px', color: 'var(--muted)' }}>
        {hero.meta.map((m, i) => (
          <span key={i}>
            <span style={{ color: 'var(--faint)' }}>{t(m.label)}</span>&nbsp;&nbsp;{t(m.value)}
          </span>
        ))}
        <a className="link-underline" href={appStore} target="_blank" rel="noreferrer" style={{ color: 'var(--ink)' }}>
          {t({ ko: 'App Store 보기', en: 'View on App Store' })} ↗
        </a>
      </div>
    </header>
  );
}

function Row({ marker, markerCurrent, title, current, children, note }) {
  return (
    <div style={{ display: 'flex', gap: '22px', paddingBottom: '22px', marginBottom: '22px', borderBottom: '1px solid #f2f1eb' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: markerCurrent ? 'var(--ink)' : 'var(--faint)',
          fontWeight: markerCurrent ? 500 : 400,
          minWidth: '34px',
        }}
      >
        {marker}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: '16px' }}>{title}</h3>
          {current && (
            <span style={{ fontSize: '11px', color: 'var(--accent-soft-ink)', background: 'var(--accent-soft-bg)', padding: '2px 8px', borderRadius: '4px' }}>
              {current}
            </span>
          )}
        </div>
        <p style={{ fontSize: '14.5px', color: 'var(--muted)' }}>{children}</p>
        {note && (
          <p style={{ fontSize: '13px', color: 'var(--faint)', marginTop: '10px', paddingLeft: '12px', borderLeft: '2px solid var(--line)' }}>{note}</p>
        )}
      </div>
    </div>
  );
}

function PipelineDiagram() {
  const { t } = useLang();
  const { pipelineHeading, pipeline } = urius.evolution;
  return (
    <div style={{ marginTop: '10px', marginBottom: '30px' }}>
      <div className="eyebrow" style={{ marginBottom: '16px' }}>{t(pipelineHeading)}</div>
      <div style={{ overflowX: 'auto', paddingBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '6px', minWidth: 'min-content' }}>
          {pipeline.steps.map((s, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  border: s.gate ? '1px solid var(--accent)' : '1px solid var(--line)',
                  background: s.gate ? 'var(--accent-soft-bg)' : 'var(--surface)',
                  borderRadius: '8px',
                  padding: '8px 11px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  flex: '0 0 auto',
                }}
              >
                <div style={{ fontSize: '12.5px', color: s.gate ? 'var(--accent-soft-ink)' : 'var(--ink)', fontWeight: 500 }}>{t(s.label)}</div>
                {s.sub && <div style={{ fontSize: '10.5px', color: s.gate ? 'var(--accent-soft-ink)' : 'var(--faint)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>{t(s.sub)}</div>}
              </div>
              {i < pipeline.steps.length - 1 && (
                <span style={{ alignSelf: 'center', color: 'var(--line-2)', fontSize: '12px', flex: '0 0 auto' }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '13px', color: 'var(--faint)', marginTop: '12px' }}>{t(pipeline.note)}</p>
    </div>
  );
}

function RolesTable() {
  const { t } = useLang();
  const { rolesHeading, roles } = urius.evolution;
  return (
    <div style={{ marginBottom: '4px' }}>
      <div className="eyebrow" style={{ marginBottom: '16px' }}>{t(rolesHeading)}</div>
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {roles.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px 16px',
              alignItems: 'baseline',
              padding: '12px 0',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div style={{ flex: '0 0 150px', fontSize: '14px', color: 'var(--ink)', fontWeight: 500 }}>{t(r.name)}</div>
            <div style={{ flex: '1 1 240px', fontSize: '13.5px', color: 'var(--muted)' }}>{t(r.desc)}</div>
            <div style={{ flex: '0 0 auto', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--faint)', border: '1px solid var(--line)', borderRadius: '4px', padding: '2px 8px' }}>
              {t(r.priv)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Evolution() {
  const { t } = useLang();
  const { heading, intro, stages } = urius.evolution;
  return (
    <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--line)' }}>
      <div className="eyebrow" style={{ marginBottom: '10px' }}>{t({ ko: '핵심 이야기', en: 'The core story' })}</div>
      <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>{t(heading)}</h2>
      <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '620px', marginBottom: '30px' }}>{t(intro)}</p>
      {stages.map((s, i) => (
        <Row
          key={i}
          marker={s.n}
          markerCurrent={s.current}
          title={t(s.title)}
          current={s.current ? t({ ko: '현재', en: 'Now' }) : null}
        >
          {t(s.body)}
        </Row>
      ))}
      <div style={{ marginTop: '14px' }} />
      <PipelineDiagram />
      <RolesTable />
    </section>
  );
}

function Glance() {
  const { t } = useLang();
  const { stats, note } = urius.glance;
  return (
    <section style={{ padding: '2.25rem 0', borderBottom: '1px solid var(--line)' }}>
      <SectionLabel>At a glance</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '20px' }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{ fontSize: '28px', color: 'var(--ink)', fontWeight: 500, letterSpacing: '-0.02em' }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px' }}>{t(s.label)}</div>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: 'var(--faint)', marginTop: '22px', lineHeight: 1.7 }}>
        {t(note)}
      </p>
    </section>
  );
}

function CodeSnippet({ caption, code }) {
  return (
    <div style={{ marginTop: '16px', border: '1px solid var(--line)', borderRadius: '10px', overflow: 'hidden', background: 'var(--surface)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--faint)', padding: '8px 14px', borderBottom: '1px solid var(--line)', background: 'var(--fill)' }}>
        {caption}
      </div>
      <pre style={{ margin: 0, padding: '14px 16px', overflowX: 'auto' }}>
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', lineHeight: 1.65, color: 'var(--ink-2)', whiteSpace: 'pre' }}>{code}</code>
      </pre>
    </div>
  );
}

function Engineering() {
  const { t } = useLang();
  const { heading, intro, items } = urius.engineering;
  return (
    <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--line)' }}>
      <SectionLabel>{t(heading)}</SectionLabel>
      {intro && <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '620px', marginBottom: '28px', marginTop: '-8px' }}>{t(intro)}</p>}
      {items.map((it, i) => (
        <Row key={i} marker={it.code} title={t(it.title)} note={it.note ? t(it.note) : null}>
          {t(it.body)}
          {it.snippet && <CodeSnippet caption={t(it.snippet.caption)} code={it.snippet.code} />}
        </Row>
      ))}
    </section>
  );
}

function Screens() {
  const { t } = useLang();
  const { heading, images } = urius.screens;
  if (!images || images.length === 0) return null;
  return (
    <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--line)' }}>
      <SectionLabel>{t(heading)}</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
        {images.map((img, i) => (
          <div key={i} style={{ aspectRatio: '9 / 19', background: 'var(--fill)', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <img
              src={img.src}
              alt={t(img.alt)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  const { t } = useLang();
  const { heading, body } = urius.closing;
  return (
    <section style={{ padding: '2.5rem 0' }}>
      <SectionLabel>{t(heading)}</SectionLabel>
      <p style={{ fontSize: '16px', color: 'var(--ink-2)', maxWidth: '620px', marginBottom: '26px' }}>{t(body)}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '14px' }}>
        <a className="link-underline" href={urius.appStore} target="_blank" rel="noreferrer" style={{ color: 'var(--ink)' }}>
          {t({ ko: 'App Store에서 Urius 보기', en: 'View Urius on the App Store' })} ↗
        </a>
        <Link className="link-underline" to="/portfolio">{t({ ko: '← 작업으로 돌아가기', en: '← Back to work' })}</Link>
      </div>
    </section>
  );
}

export default function UriusCaseStudy() {
  return (
    <div className="wrap" style={{ maxWidth: '780px' }}>
      <Hero />
      <Evolution />
      <Glance />
      <Engineering />
      <Screens />
      <Closing />
    </div>
  );
}
