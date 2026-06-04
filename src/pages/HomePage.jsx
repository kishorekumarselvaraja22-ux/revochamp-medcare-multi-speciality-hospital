import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import * as data from '@/constants/sections_data';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import HeaderSection_0 from '@/sections/HeaderSection/HeaderSection_0';
import HeroSection_1 from '@/sections/HeroSection/HeroSection_1';
import StatsSection_2 from '@/sections/StatsSection/StatsSection_2';
import TeamSection_3 from '@/sections/TeamSection/TeamSection_3';
import WhyChooseUsSection_4 from '@/sections/WhyChooseUsSection/WhyChooseUsSection_4';
import TestimonialsSection_5 from '@/sections/TestimonialsSection/TestimonialsSection_5';
import FaqSection_6 from '@/sections/FaqSection/FaqSection_6';
import ContactSection_7 from '@/sections/ContactSection/ContactSection_7';
import FooterSection_8 from '@/sections/FooterSection/FooterSection_8';

function HomePage({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <HomePageContent />
    </ThemeProvider>
  );
}

function HomePageContent() {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);
  return (
    <div className="app-theme" style={{ fontFamily: `${theme.bodyFont}, sans-serif`, backgroundColor: theme.backgroundColorHex, color: theme.textColorHex, minHeight: '100vh', ...themeStyles }}>
      <ErrorBoundary>
      <HeaderSection_0 {...data.headersection_0_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <HeroSection_1 {...data.herosection_1_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <StatsSection_2 {...data.statssection_2_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <TeamSection_3 {...data.teamsection_3_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <WhyChooseUsSection_4 {...data.whychooseussection_4_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <TestimonialsSection_5 {...data.testimonialssection_5_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <FaqSection_6 {...data.faqsection_6_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <ContactSection_7 {...data.contactsection_7_data} />
      </ErrorBoundary>
      <ErrorBoundary>
      <FooterSection_8 {...data.footersection_8_data} />
      </ErrorBoundary>
    </div>
  );
}

HomePage.propTypes = {
  theme: PropTypes.object,
};

export default React.memo(HomePage);