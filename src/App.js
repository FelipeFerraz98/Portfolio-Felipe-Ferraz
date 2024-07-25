import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import ScrollToTop from './ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { StarterPage } from './pages/StarterPage';
import { Projects } from './pages/Projects';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';

import './services/i18n';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate to="/select-language" />} />
          <Route path="/select-language" element={<StarterPage />} />
          <Route path="/:lang/*" element={<MainApp />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

const MainApp = () => {
  const { lang } = useParams();
  const { changeLanguage } = useLanguage();

  React.useEffect(() => {
    changeLanguage(lang);
  }, [lang, changeLanguage]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={`home`} element={<Home />} />
        <Route path={`projects`} element={<Projects />} />
        <Route path="*" element={<Navigate to="home" />} /> {/* Redireciona para home em caso de rota não encontrada */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
