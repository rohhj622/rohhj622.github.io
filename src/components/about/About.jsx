import React from 'react';
import { useLang } from '../../i18n/LangContext';
import { info } from '../../info/Info';

function SkillGroup({ label, items }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: '12px' }}>{label}</div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((s) => (
          <li
            key={s}
            style={{
              fontSize: '13px',
              color: 'var(--ink-2)',
              border: '1px solid var(--line)',
              borderRadius: '20px',
              padding: '5px 12px',
              background: 'var(--surface)',
            }}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <div className="wrap" style={{ paddingTop: '4.5rem' }}>
      <div className="eyebrow" style={{ marginBottom: '16px' }}>{t({ ko: '소개', en: 'About' })}</div>
      <h1 style={{ fontSize: '30px', marginBottom: '22px' }}>
        {t({ ko: '안녕하세요, 노현진입니다.', en: 'Hi, I’m Hyunjin Roh.' })}
      </h1>

      <div style={{ maxWidth: '620px', display: 'flex', flexDirection: 'column', gap: '18px', color: 'var(--ink-2)' }}>
        <p>{t(info.tagline)}</p>
        <p style={{ color: 'var(--muted)' }}>{t(info.bio)}</p>
        <p style={{ color: 'var(--muted)' }}>
          {t({
            ko: '컴퓨터공학을 전공했고 백엔드에서 시작했습니다. 지금은 앱·백엔드·개발 도구를 넘나들며, 한 사람이 만들 수 있는 것의 경계를 AI 에이전트로 넓히는 데 집중하고 있습니다.',
            en: 'I studied computer engineering and started in backend. Today I move across app, backend, and developer tooling — focused on widening what one person can build, with AI agents.',
          })}
        </p>
      </div>

      <hr className="hairline" style={{ margin: '3rem 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <SkillGroup label={t({ ko: '능숙하게 다룸', en: 'Proficient with' })} items={info.skills.proficientWith} />
        <SkillGroup label={t({ ko: '경험함', en: 'Exposed to' })} items={info.skills.exposedTo} />
      </div>

      <hr className="hairline" style={{ margin: '3rem 0' }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '14px' }}>
        <a className="link-underline" href={info.socials[0].link} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="link-underline" href={info.socials[1].link} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="link-underline" href={`mailto:${info.email}`}>{info.email}</a>
      </div>
    </div>
  );
}
