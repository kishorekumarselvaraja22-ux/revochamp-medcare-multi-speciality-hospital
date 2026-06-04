import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';

function ContactSection_7({ email, phone, address, showMap, showForm }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);
  const isSimple = false;


  return (
      <Section id="hospital_contact"  style={{ ...themeStyles,  padding: '48px 0' }}>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info" style={{ textAlign: isSimple ? 'center' : 'left' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Contact</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Icon name="phone" style={{ color: 'var(--primary)' }} /><span>{phone}</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Icon name="email" style={{ color: 'var(--primary)' }} /><span>{email}</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Icon name="location_on" style={{ color: 'var(--primary)' }} /><span>{address}</span></div>
              </div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                  <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '${theme.buttonRadius}px', color: '#fff' }} />
                </div>
                <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                  <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '${theme.buttonRadius}px', color: '#fff' }} />
                </div>
                <div style={{ marginBottom: '24px', textAlign: 'left' }}>
                  <textarea placeholder="Your Message" rows={5} required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '${theme.buttonRadius}px', color: '#fff', fontFamily: 'inherit' }}></textarea>
                </div>
                <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Submit Form</button>
              </form>
            </div>
        
          </div>
        </div>
      </Section>

  );
}

ContactSection_7.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  showMap: PropTypes.bool,
  showForm: PropTypes.bool,
};

export default React.memo(ContactSection_7);