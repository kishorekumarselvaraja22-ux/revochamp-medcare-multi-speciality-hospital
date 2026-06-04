import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';

function FooterSection_8({ companyName, copyright, socialFacebook, socialTwitter, socialLinkedin }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);


  return (
      <section style={themeStyles} id="hospital_footer" className="footer-sec">
        <div className="container">
          <div className="footer-container">
            <div>
              <a href="#" className="footer-logo">
                <Icon name="bubble_chart" />
                <span>{companyName}</span>
              </a>
              <div className="footer-copyright" style={{ marginTop: '8px' }}>{copyright}</div>
            </div>
            <div className="footer-socials">
              <a href={socialTwitter} target="_blank" rel="noopener noreferrer"><Icon name="public" /></a>
              <a href={socialLinkedin} target="_blank" rel="noopener noreferrer"><Icon name="chat" /></a>
              <a href={socialFacebook} target="_blank" rel="noopener noreferrer"><Icon name="share" /></a>
            </div>
          </div>
        </div>
      </section>

  );
}

FooterSection_8.propTypes = {
  companyName: PropTypes.string,
  copyright: PropTypes.string,
  socialFacebook: PropTypes.string,
  socialTwitter: PropTypes.string,
  socialLinkedin: PropTypes.string,
};

export default React.memo(FooterSection_8);