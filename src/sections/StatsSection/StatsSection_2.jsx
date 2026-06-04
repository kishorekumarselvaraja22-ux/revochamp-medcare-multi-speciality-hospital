import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';

function StatsSection_2({ sectionTitle, sectionSubtitle, stats, items }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);


  return (
      <Section id="hospital_stats"  style={{ ...themeStyles,  padding: '48px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>{sectionTitle}</h2>
            <p>{sectionSubtitle}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Icon name="people_alt" style={{ color: 'var(--primary)', fontSize: '24px' }} />
              <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary)' }}>10K+</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Happy Customers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Icon name="verified" style={{ color: 'var(--primary)', fontSize: '24px' }} />
              <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary)' }}>99.9%</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Uptime SLA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Icon name="public" style={{ color: 'var(--primary)', fontSize: '24px' }} />
              <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary)' }}>150+</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Countries Served</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Icon name="support_agent" style={{ color: 'var(--primary)', fontSize: '24px' }} />
              <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary)' }}>24/7</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Expert Support</span>
            </div>
          </div>
        </div>
      </Section>

  );
}

StatsSection_2.propTypes = {
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  stats: PropTypes.array,
  items: PropTypes.array,
};

export default React.memo(StatsSection_2);