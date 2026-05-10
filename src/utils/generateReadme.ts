import type { FormState } from '../interfaces';
import { technologies } from './technologies';

export function generateReadme(state: FormState): string {
  const { basicInfo, links, social, selectedTechs, enhancements } = state;
  const {
    name,
    subtitle,
    workingOn,
    learning,
    collaborateOn,
    helpWith,
    askMeAbout,
    reachMe,
    funFact,
    showVisitorBadge,
  } = basicInfo;

  // Badge de visitas
  const visitorBadge =
    showVisitorBadge && social.github
      ? `![Visitors](https://komarev.com/ghpvc/?username=${social.github}&label=Visitors&color=0e75b6&style=flat)`
      : '';

  // Tecnologías seleccionadas con tamaño controlado
  const selectedTechObjects = technologies.filter((t) =>
    selectedTechs.includes(t.id),
  );
  const techSection =
    selectedTechObjects.length > 0
      ? `## 🛠️ Tech Stack\n\n<div align="left">\n${selectedTechObjects.map((t) => `<img src="${t.svgPath}" alt="${t.name}" width="40" height="40" style="margin: 4px;" />`).join(' ')}\n</div>\n\n`
      : '';

  // GitHub Enhancements (igual que antes)
  const ghUsername = social.github;
  let enhancementsSection = '';
  if (ghUsername) {
    if (enhancements.statsCard) {
      enhancementsSection += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${ghUsername}&show_icons=true&theme=radical)\n\n`;
    }
    if (enhancements.streakStats) {
      enhancementsSection += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${ghUsername}&theme=radical)\n\n`;
    }
    if (enhancements.topLanguagesCard) {
      enhancementsSection += `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUsername}&layout=compact&theme=radical)\n\n`;
    }
    if (enhancements.profileTrophy) {
      enhancementsSection += `![Trophies](https://github-profile-trophy.vercel.app/?username=${ghUsername}&theme=radical&no-frame=true&row=2&column=3)\n\n`;
    }
  }

  // Construir README
  let readme = `# ${name || 'Developer'}\n\n`;
  if (subtitle) readme += `> ${subtitle}\n\n`;
  if (visitorBadge) readme += `${visitorBadge}\n\n`;

  readme += techSection;

  if (workingOn) readme += `- 🔭 I’m currently working on: **${workingOn}**\n`;
  if (learning) readme += `- 🌱 I’m currently learning: **${learning}**\n`;
  if (collaborateOn)
    readme += `- 👯 I’m looking to collaborate on: **${collaborateOn}**\n`;
  if (helpWith) readme += `- 🤝 I’m looking for help with: **${helpWith}**\n`;
  if (askMeAbout) readme += `- 💬 Ask me about: **${askMeAbout}**\n`;
  if (reachMe) readme += `- 📫 How to reach me: **${reachMe}**\n`;
  if (funFact) readme += `- ⚡ Fun fact: **${funFact}**\n`;

  if (links.portfolio || links.blog || links.resume) {
    readme += `\n## 🔗 Links\n`;
    if (links.portfolio)
      readme += `- Portfolio: [${links.portfolio}](${links.portfolio})\n`;
    if (links.blog) readme += `- Blog: [${links.blog}](${links.blog})\n`;
    if (links.resume)
      readme += `- Resume/CV: [${links.resume}](${links.resume})\n`;
  }

  const socialLinks: string[] = [];
  if (social.github)
    socialLinks.push(`[GitHub](https://github.com/${social.github})`);
  if (social.linkedin)
    socialLinks.push(`[LinkedIn](https://linkedin.com/in/${social.linkedin})`);
  if (social.twitter)
    socialLinks.push(`[Twitter](https://twitter.com/${social.twitter})`);
  if (social.instagram)
    socialLinks.push(`[Instagram](https://instagram.com/${social.instagram})`);
  if (social.medium)
    socialLinks.push(`[Medium](https://medium.com/@${social.medium})`);
  if (social.stackoverflow)
    socialLinks.push(
      `[Stack Overflow](https://stackoverflow.com/users/${social.stackoverflow})`,
    );
  if (social.facebook)
    socialLinks.push(`[Facebook](https://facebook.com/${social.facebook})`);
  if (socialLinks.length) {
    readme += `\n## 🌐 Social\n${socialLinks.join(' · ')}\n`;
  }

  if (enhancementsSection) {
    readme += `\n## 📊 GitHub Stats\n\n${enhancementsSection}`;
  }

  readme += `\n---\n*README generated with [My Custom Generator](https://github.com/nelsonacb)*`;
  return readme;
}
