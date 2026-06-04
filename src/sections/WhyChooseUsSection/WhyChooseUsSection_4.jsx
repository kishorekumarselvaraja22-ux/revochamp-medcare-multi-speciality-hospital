import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';

function WhyChooseUsSection_4({ sectionTitle, sectionSubtitle, items }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);


  return (
      <Section id="hospital_why_us"  style={{ ...themeStyles,  padding: '48px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>{sectionTitle}</h2>
            <p>{sectionSubtitle}</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <Icon name="verified" style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '24px' }} />
              <h3 style={{ margin: '8px 0' }}>Expert Doctors</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}></p>
            </div>
            <div className="card">
              <Icon name="emergency" style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '24px' }} />
              <h3 style={{ margin: '8px 0' }}>24/7 Emergency</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}></p>
            </div>
            <div className="card">
              <Icon name="biotech" style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '24px' }} />
              <h3 style={{ margin: '8px 0' }}>Modern Equipment</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}></p>
            </div>
            <div className="card">
              <Icon name="savings" style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '24px' }} />
              <h3 style={{ margin: '8px 0' }}>Affordable Care</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}></p>
            </div>
          </div>
        </div>
      </Section>

  );
}

WhyChooseUsSection_4.propTypes = {
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  items: PropTypes.array,
};

export default React.memo(WhyChooseUsSection_4);