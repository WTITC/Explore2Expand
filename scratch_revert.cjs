const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:\\Users\\PRAHARSHA KANAPARTHI\\Downloads\\Explore2Expand Website', 'src', 'pages');

const filesToUpdate = [
  'Branding.jsx', 'Partnerships.jsx', 'CaseStudies.jsx', 'ApplyPage.jsx',
  'JoinMissions.jsx', 'PartnersPage.jsx', 'ConnectPage.jsx', 'MissionSeries.jsx',
  'ProgramTracks.jsx', 'TalentPathways.jsx', 'UpcomingCohorts.jsx', 'MarketEntry.jsx',
  'ExportGateways.jsx', 'AllianceFrameworks.jsx', 'DelegationPathways.jsx', 'Charter.jsx',
  'Vision.jsx', 'GlobalLandscape.jsx', 'OpportunityCartography.jsx'
];

const targetStr = '<div className="page-wrapper" style={{ background: \'var(--white)\' }}>';
const replacementStr = "<div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>";

filesToUpdate.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetStr)) {
      content = content.replace(targetStr, replacementStr);
      fs.writeFileSync(filePath, content);
      console.log(`Reverted ${file}`);
    }
  }
});
