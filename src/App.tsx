import React, { useState, useEffect } from 'react';
import { PageType, RegistrationTrack, ClassLevel, ClassDelivery, UserAccount } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrokerVerificationModal } from './components/BrokerVerificationModal';
import { TelegramModal } from './components/TelegramModal';

// Dedicated Standalone Pages
import { HomePage } from './pages/HomePage';
import { SignalsPage } from './pages/SignalsPage';
import { BrokerPage } from './pages/BrokerPage';
import { FundingPage } from './pages/FundingPage';
import { AcademyPage } from './pages/AcademyPage';
import { TrackRecordPage } from './pages/TrackRecordPage';
import { PricingPage } from './pages/PricingPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { TelegramPage } from './pages/TelegramPage';
import { AdvertisePage } from './pages/AdvertisePage';
import { MediaKitPage } from './pages/MediaKitPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [registrationTrack, setRegistrationTrack] = useState<RegistrationTrack>('signals');
  const [registrationClassLevel, setRegistrationClassLevel] = useState<ClassLevel>('intermediate');
  const [registrationClassDelivery, setRegistrationClassDelivery] = useState<ClassDelivery>('online');

  const [user, setUser] = useState<UserAccount | null>(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('volatus_user');
      if (savedUser) {
        try {
          return JSON.parse(savedUser);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  });

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('volatus_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  // Sync theme with HTML root class and local storage
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('volatus_theme', theme);
  }, [theme]);

  // Sync user state with local storage
  useEffect(() => {
    if (user) {
      localStorage.setItem('volatus_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('volatus_user');
    }
  }, [user]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync route with URL hash/pathname on mount and handle browser back/forward
  useEffect(() => {
    const parseRouteFromUrl = (): PageType => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      const target = hash || path;

      if (target.includes('login') || target.includes('signin')) return 'login';
      if (target.includes('register') || target.includes('signup')) {
        if (target.includes('invest')) setRegistrationTrack('investing');
        else if (target.includes('class') || target.includes('academy')) setRegistrationTrack('classes');
        else if (target.includes('copy')) setRegistrationTrack('copytrading');
        return 'register';
      }
      if (target.includes('about')) return 'about';
      if (target.includes('telegram')) return 'telegram';
      if (target.includes('advertise') || target.includes('partner')) return 'advertise';
      if (target.includes('pricing') || target.includes('membership') || target.includes('price')) return 'pricing';
      if (target.includes('media') || target.includes('deck')) return 'mediakit';
      if (target.includes('blog') || target.includes('article') || target.includes('dispatch')) return 'blog';
      if (target.includes('contact') || target.includes('support')) return 'contact';
      if (target.includes('signal') || target.includes('forex')) return 'signals';
      if (target.includes('broker') || target.includes('free-vip')) return 'broker';
      if (target.includes('funding') || target.includes('prop')) return 'funding';
      if (target.includes('academy') || target.includes('education')) return 'academy';
      if (target.includes('performance') || target.includes('track')) return 'performance';
      if (target.includes('review') || target.includes('testimonial')) return 'reviews';
      if (target.includes('faq') || target.includes('help')) return 'faq';
      return 'home';
    };

    setCurrentPage(parseRouteFromUrl());

    const handlePopState = () => {
      setCurrentPage(parseRouteFromUrl());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (
    page: PageType, 
    track?: RegistrationTrack,
    options?: { classLevel?: ClassLevel; classDelivery?: ClassDelivery }
  ) => {
    if (track) setRegistrationTrack(track);
    if (options?.classLevel) setRegistrationClassLevel(options.classLevel);
    if (options?.classDelivery) setRegistrationClassDelivery(options.classDelivery);

    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}${track ? `-${track}` : ''}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleRegisterSuccess = (newUser: UserAccount) => {
    setUser(newUser);
  };

  const handleLoginSuccess = (loggedInUser: UserAccount) => {
    setUser(loggedInUser);
    navigateTo('signals');
  };

  return (
    <div className="min-h-screen bg-[#070912] text-slate-100 font-sans selection:bg-[#f5b842]/30 selection:text-[#f5b842] flex flex-col justify-between transition-colors duration-200">
      
      {/* Fixed Luxury Navigation Header for Volatus Capital */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(p) => navigateTo(p)}
        onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
        onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        user={user}
        onLogout={() => setUser(null)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(p) => navigateTo(p)}
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'register' && (
          <RegisterPage
            initialTrack={registrationTrack}
            initialClassLevel={registrationClassLevel}
            initialClassDelivery={registrationClassDelivery}
            onNavigate={(p, t) => navigateTo(p, t)}
            onRegisterSuccess={handleRegisterSuccess}
          />
        )}

        {currentPage === 'login' && (
          <LoginPage
            onNavigate={(p, t) => navigateTo(p, t)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={(p) => navigateTo(p)}
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'signals' && (
          <SignalsPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
            onNavigate={(p, t, opts) => navigateTo(p, t, opts)}
          />
        )}

        {currentPage === 'telegram' && (
          <TelegramPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
            onNavigate={(p) => navigateTo(p)}
          />
        )}

        {currentPage === 'advertise' && (
          <AdvertisePage
            onNavigate={(p) => navigateTo(p)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'mediakit' && (
          <MediaKitPage
            onNavigate={(p) => navigateTo(p)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={(p) => navigateTo(p)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={(p) => navigateTo(p)}
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'broker' && (
          <BrokerPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'funding' && (
          <FundingPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'academy' && (
          <AcademyPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'performance' && (
          <TrackRecordPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer (rendered across all standalone pages) */}
      {currentPage !== 'home' && (
        <Footer
          onNavigate={(p) => navigateTo(p)}
          onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
          onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
        />
      )}

      {/* Interactive Global Modals */}
      <BrokerVerificationModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
      />

      <TelegramModal
        isOpen={isTelegramModalOpen}
        onClose={() => setIsTelegramModalOpen(false)}
        onOpenBrokerVerify={() => {
          setIsTelegramModalOpen(false);
          setIsVerifyModalOpen(true);
        }}
      />
    </div>
  );
}


