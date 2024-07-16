import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
// import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { StarterPage } from './pages/StarterPage';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';

import './services/i18n';
import { Skills } from './pages/Skills';

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
      <Header />
        <Home />
      <About />
      <Skills />
      <Routes>
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </>
  );
};

export default App;
