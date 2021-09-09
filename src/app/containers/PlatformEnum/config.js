import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StreetviewIcon from '@material-ui/icons/Streetview';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUniversity, faUser, faUserSecret } from "@fortawesome/free-solid-svg-icons";
////////////////
// Roles
// Portal or Platforms
//////////////////
const portals = {
  id: 'portals',
  defaultPlatform: {
    code: 'visitors',
    title: 'Visitor Portal',
    subtitle: 'Visitors Portal views',
    icon: <VisibilityIcon />,
  },
  options: [
    {
      code: 'Settings',
      title: 'Settings Portal',
      subtitle: 'Configure basic info of system',
      icon: <FontAwesomeIcon icon={faCogs} />,
      color: 'blue'
    },
    {
      code: 'Headquarters',
      title: 'Headquarters Portal',
      subtitle: 'denotes the location where most, if not all, of the important functions of an organization are coordinated',
      icon : <FontAwesomeIcon icon={faUniversity} />
    },
    {
      code: 'Authors',
      title: 'Authors Portal',
      subtitle: 'who can Upload Upload newsfeed and events',
      icon: <ContactMailIcon />,
    },
    {
      code: 'audits',
      title: 'Accounting Statement Portal',
      subtitle: 'Report for serviceable and consumable',
      icon: <FontAwesomeIcon icon={faUserSecret} />,
    },
    {
      code: 'Reports',
      title: 'Reports Portal',
      subtitle: 'Status of Activities and Evens',
      icon: <DescriptionIcon />,
    },
    {
      code: 'pos',
      title: 'POS Portal',
      subtitle: 'Point og Sale',
      icon: <StreetviewIcon />,
    },
    {
      code: 'audience',
      title: 'Audience Portal',
      subtitle: 'Audience',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
  ],
};

function checkPortal(access) {
  const portalList = portals.options.filter(portal => access.includes(portal.code))
  return portalList ? portalList : portals.defaultPlatform;
}

const grantedPortal=(role)=> {
  let access = '';
  switch (role) {
    case 'dev':
      access = ['Settings', 'Headquarters', 'audits', 'audience'];
      break;
    case 'superadmin':
      access = ['Settings', 'Headquarters', 'audits', 'audience'];
      break;
    case 'ADMIN':
      access = ['Headquarters', 'audits', 'audience'];
      break;
    case 'receptionist':
      access = ['pos', 'audience'];
      break;
    default:
      access = ['audience']
  }
  return checkPortal(access)
}

export default grantedPortal;
