import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { Icon } from '@/components/Icon';

function FaqSection_6({ sectionTitle, sectionSubtitle, items }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFaqIndex, setActiveFaqIndex] = useState(-1);

  const faqItems = items || [{"question":"Do you provide emergency services?","answer":"Yes, emergency services are available 24/7.","category":""},{"question":"Can I book appointments online?","answer":"Yes, appointments can be booked online anytime.","category":""},{"question":"Do you accept insurance?","answer":"Yes, we accept most major insurance providers.","category":""}];
  const filteredItems = faqItems.filter(item => {
    const matchesSearch = searchQuery.trim() === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
      <Section id="hospital_faq"  style={{ ...themeStyles,  padding: '48px 0' }}>
        <div className="container">
          <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
          <div style={{ maxWidth: '500px', margin: '0 auto 32px auto' }}>
            <input type="text" value={searchQuery} placeholder="Search FAQs..." style={{ width: '100%', padding: '12px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', boxSizing: 'border-box' }} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {filteredItems.map((item, idx) => (
              <div key={idx} className="faq-item-wrapper" data-category={item.category} style={{ marginBottom: '16px' }}>
                <div className={`faq-item ${activeFaqIndex === idx ? 'active' : ''}`} onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? -1 : idx)} role="button" tabIndex={0} aria-expanded={activeFaqIndex === idx} aria-controls={`faq-answer-${idx}`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveFaqIndex(activeFaqIndex === idx ? -1 : idx); } }}>
                  <div className="faq-q">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Icon name="help_outline" style={{ color: 'var(--primary)', fontSize: '20px' }} />{item.question}</span>
                    <Icon name="expand_more" />
                  </div>
                  <div className="faq-a" id={`faq-answer-${idx}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
  );

}

FaqSection_6.propTypes = {
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  items: PropTypes.array,
};

export default FaqSection_6;