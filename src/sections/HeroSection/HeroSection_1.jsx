import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

function HeroSection_1({ title, subtitle, description, primaryButtonText, secondaryButtonText, imageUrl, alignment, stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label, trustTitle }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);
  const isCentered = true;


  return (
      <Section id="hospital_hero" className="hero-sec" style={{ ...themeStyles,  padding: '48px 0', background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb") no-repeat center center / cover', color: '#ffffff' }}>
        <div className="container">
          <div className="hero-center">
            <div className="hero-badge">{subtitle}</div>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-desc">{description}</p>
            <div className="hero-buttons" style={{ justifyContent: isCentered ? 'center' : 'flex-start' }}>
              <Button href="#">{primaryButtonText}</Button>
              <Button href="#" variant="secondary">{secondaryButtonText}</Button>
            </div>
          </div>
        </div>
      </Section>

  );
}

HeroSection_1.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  imageUrl: PropTypes.string,
  alignment: PropTypes.string,
  stat1Value: PropTypes.string,
  stat1Label: PropTypes.string,
  stat2Value: PropTypes.string,
  stat2Label: PropTypes.string,
  stat3Value: PropTypes.string,
  stat3Label: PropTypes.string,
  trustTitle: PropTypes.string,
};

export default React.memo(HeroSection_1);