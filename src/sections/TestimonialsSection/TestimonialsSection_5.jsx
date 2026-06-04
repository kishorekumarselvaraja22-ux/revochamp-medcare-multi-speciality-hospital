import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { SectionTitle } from '@/components/SectionTitle';
import { Icon } from '@/components/Icon';

function TestimonialsSection_5({ sectionTitle, sectionSubtitle, items }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
      <Section id="hospital_testimonials"  style={{ ...themeStyles,  padding: '48px 0' }}>
        <div className="container">
          <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
          <div className="grid grid-3">
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500" alt="Video thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.6 }} />
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                  <Icon name="play_arrow" style={{ color: '#fff', fontSize: '24px' }} />
                </div>
              </div>
              <div style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ color:'#F59E0B',marginBottom:'12px', fontSize:'0.9rem' }}>★★★★★</div>
                <p style={{ fontStyle:'italic',color:'rgba(255,255,255,0.75)',marginBottom:'16px', fontSize: '0.95rem', lineHeight: '1.4' }}>""</p>
                <div style={{ fontWeight:'bold' }}></div>
                <div style={{ color:'var(--primary)',fontSize:'0.85rem' }}></div>
              </div>
            </div>
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500" alt="Video thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.6 }} />
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                  <Icon name="play_arrow" style={{ color: '#fff', fontSize: '24px' }} />
                </div>
              </div>
              <div style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ color:'#F59E0B',marginBottom:'12px', fontSize:'0.9rem' }}>★★★★★</div>
                <p style={{ fontStyle:'italic',color:'rgba(255,255,255,0.75)',marginBottom:'16px', fontSize: '0.95rem', lineHeight: '1.4' }}>""</p>
                <div style={{ fontWeight:'bold' }}></div>
                <div style={{ color:'var(--primary)',fontSize:'0.85rem' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

  );
}

TestimonialsSection_5.propTypes = {
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  items: PropTypes.array,
};

export default TestimonialsSection_5;