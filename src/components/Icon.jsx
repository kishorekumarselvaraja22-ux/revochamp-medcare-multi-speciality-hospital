import React from 'react'
import PropTypes from 'prop-types'
import BiotechIcon from '@mui/icons-material/Biotech';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
import BiotechRoundedOutlinedIcon from '@mui/icons-material/BiotechRoundedOutlined';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CodeIcon from '@mui/icons-material/Code';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmergencyIcon from '@mui/icons-material/Emergency';
import EmergencyOutlinedIcon from '@mui/icons-material/EmergencyOutlined';
import EmergencyRoundedIcon from '@mui/icons-material/EmergencyRounded';
import EmergencyRoundedOutlinedIcon from '@mui/icons-material/EmergencyRoundedOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import GroupsRoundedOutlinedIcon from '@mui/icons-material/GroupsRoundedOutlined';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import HealthAndSafetyRoundedOutlinedIcon from '@mui/icons-material/HealthAndSafetyRoundedOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import LocalHospitalRoundedOutlinedIcon from '@mui/icons-material/LocalHospitalRoundedOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import MedicalServicesRoundedOutlinedIcon from '@mui/icons-material/MedicalServicesRoundedOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PeopleAltRoundedOutlinedIcon from '@mui/icons-material/PeopleAltRoundedOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PublicIcon from '@mui/icons-material/Public';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PublicRoundedOutlinedIcon from '@mui/icons-material/PublicRoundedOutlined';
import SavingsIcon from '@mui/icons-material/Savings';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import SavingsRoundedOutlinedIcon from '@mui/icons-material/SavingsRoundedOutlined';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SettingsSuggestRoundedOutlinedIcon from '@mui/icons-material/SettingsSuggestRoundedOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarRoundedOutlinedIcon from '@mui/icons-material/StarRoundedOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import SupportAgentRoundedOutlinedIcon from '@mui/icons-material/SupportAgentRoundedOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import VerifiedRoundedOutlinedIcon from '@mui/icons-material/VerifiedRoundedOutlined';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import WorkspacePremiumRoundedOutlinedIcon from '@mui/icons-material/WorkspacePremiumRoundedOutlined';


const pascalCase = (str) => {
  if (!str) return '';
  return str
    .split('_')
    .map((word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : '')
    .join('');
};

const ICON_MAP = {
  Biotech: BiotechIcon,
  BiotechOutlined: BiotechOutlinedIcon,
  BiotechRounded: BiotechRoundedIcon,
  BiotechRoundedOutlined: BiotechRoundedOutlinedIcon,
  BubbleChart: BubbleChartIcon,
  BubbleChartOutlined: BubbleChartOutlinedIcon,
  Chat: ChatIcon,
  ChatOutlined: ChatOutlinedIcon,
  CheckCircle: CheckCircleIcon,
  CheckCircleOutlined: CheckCircleOutlinedIcon,
  Close: CloseIcon,
  CloseOutlined: CloseOutlinedIcon,
  Code: CodeIcon,
  CodeOutlined: CodeOutlinedIcon,
  Email: EmailIcon,
  EmailOutlined: EmailOutlinedIcon,
  Emergency: EmergencyIcon,
  EmergencyOutlined: EmergencyOutlinedIcon,
  EmergencyRounded: EmergencyRoundedIcon,
  EmergencyRoundedOutlined: EmergencyRoundedOutlinedIcon,
  ExpandMore: ExpandMoreIcon,
  ExpandMoreOutlined: ExpandMoreOutlinedIcon,
  GroupsRounded: GroupsRoundedIcon,
  GroupsRoundedOutlined: GroupsRoundedOutlinedIcon,
  HealthAndSafety: HealthAndSafetyIcon,
  HealthAndSafetyOutlined: HealthAndSafetyOutlinedIcon,
  HealthAndSafetyRounded: HealthAndSafetyRoundedIcon,
  HealthAndSafetyRoundedOutlined: HealthAndSafetyRoundedOutlinedIcon,
  HelpOutline: HelpOutlineIcon,
  HelpOutlineOutlined: HelpOutlineOutlinedIcon,
  LocalHospitalRounded: LocalHospitalRoundedIcon,
  LocalHospitalRoundedOutlined: LocalHospitalRoundedOutlinedIcon,
  LocationOn: LocationOnIcon,
  LocationOnOutlined: LocationOnOutlinedIcon,
  MedicalServicesRounded: MedicalServicesRoundedIcon,
  MedicalServicesRoundedOutlined: MedicalServicesRoundedOutlinedIcon,
  Menu: MenuIcon,
  MenuOutlined: MenuOutlinedIcon,
  PeopleAlt: PeopleAltIcon,
  PeopleAltOutlined: PeopleAltOutlinedIcon,
  PeopleAltRounded: PeopleAltRoundedIcon,
  PeopleAltRoundedOutlined: PeopleAltRoundedOutlinedIcon,
  Person: PersonIcon,
  PersonOutlined: PersonOutlinedIcon,
  Phone: PhoneIcon,
  PhoneOutlined: PhoneOutlinedIcon,
  PlayArrow: PlayArrowIcon,
  PlayArrowOutlined: PlayArrowOutlinedIcon,
  Public: PublicIcon,
  PublicOutlined: PublicOutlinedIcon,
  PublicRounded: PublicRoundedIcon,
  PublicRoundedOutlined: PublicRoundedOutlinedIcon,
  Savings: SavingsIcon,
  SavingsOutlined: SavingsOutlinedIcon,
  SavingsRounded: SavingsRoundedIcon,
  SavingsRoundedOutlined: SavingsRoundedOutlinedIcon,
  SettingsSuggestRounded: SettingsSuggestRoundedIcon,
  SettingsSuggestRoundedOutlined: SettingsSuggestRoundedOutlinedIcon,
  Share: ShareIcon,
  ShareOutlined: ShareOutlinedIcon,
  StarRounded: StarRoundedIcon,
  StarRoundedOutlined: StarRoundedOutlinedIcon,
  SupportAgent: SupportAgentIcon,
  SupportAgentOutlined: SupportAgentOutlinedIcon,
  SupportAgentRounded: SupportAgentRoundedIcon,
  SupportAgentRoundedOutlined: SupportAgentRoundedOutlinedIcon,
  Verified: VerifiedIcon,
  VerifiedOutlined: VerifiedOutlinedIcon,
  VerifiedRounded: VerifiedRoundedIcon,
  VerifiedRoundedOutlined: VerifiedRoundedOutlinedIcon,
  WorkspacePremiumRounded: WorkspacePremiumRoundedIcon,
  WorkspacePremiumRoundedOutlined: WorkspacePremiumRoundedOutlinedIcon,

};

export function Icon({ name, className, style, ...props }) {
  if (!name) return null;
  const iconName = pascalCase(name);
  const MuiIcon = ICON_MAP[iconName] || ICON_MAP[iconName + 'Outlined'] || ICON_MAP['HelpOutline'] || ICON_MAP['HelpOutlineOutlined'];
  if (!MuiIcon) return null;
  return <MuiIcon className={className} style={style} aria-hidden="true" {...props} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}