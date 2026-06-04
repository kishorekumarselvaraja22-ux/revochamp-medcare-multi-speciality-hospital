import React from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { SectionTitle } from '@/components/SectionTitle';
import { Icon } from '@/components/Icon';

function TeamSection_3({ sectionTitle, sectionSubtitle, items }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);


  const teamMembers = items || [{"name":"Dr. Sarah Johnson","role":"Senior Cardiologist","description":"15+ years experience in cardiac care.","imageUrl":"https://images.unsplash.com/photo-1559839734-2b71ea197ec2"},{"name":"Dr. Michael Brown","role":"Neurologist","description":"Specialist in neurological disorders.","imageUrl":"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"},{"name":"Dr. Emily Davis","role":"Pediatrician","description":"Dedicated child healthcare expert.","imageUrl":"https://images.unsplash.com/photo-1594824476967-48c8b964273f"}];
  return (
      <Section id="hospital_doctors"  style={{ ...themeStyles,  padding: '48px 0' }}>
        <div className="container">
          <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
          <div className="grid grid-3">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="team-card">
                {member.imageUrl ? (
                  <img src={member.imageUrl} className="team-image" alt={member.name} />
                ) : (
                  <div className="team-image" style={{ background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="person" style={{ fontSize: '40px', color: 'white' }} /></div>
                )}
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <p className="team-desc">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
  );

}

TeamSection_3.propTypes = {
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  items: PropTypes.array,
};

export default React.memo(TeamSection_3);