import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LangProvider, useLang } from '../i18n/LangContext';
import { info } from '../info/Info';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import UriusCaseStudy from './urius/UriusCaseStudy';

function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: '4rem' }}>
      <div
        className="wrap"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.75rem 24px',
          fontSize: '13px',
          color: 'var(--muted)',
        }}
      >
        <span>© {new Date().getFullYear()} {t(info.name)}</span>
        <span style={{ display: 'flex', gap: '18px' }}>
          <a className="link-underline" href={`mailto:${info.email}`}>{info.email}</a>
          <a className="link-underline" href={info.socials[0].link} target="_blank" rel="noreferrer">GitHub</a>
        </span>
      </div>
    </footer>
  );
}

export default function BaseLayout() {
  return (
    <LangProvider>
      <HashRouter>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/urius" element={<UriusCaseStudy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LangProvider>
  );
}
