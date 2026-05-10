import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  StoreState,
  BasicInfo,
  Links,
  SocialLinks,
  GithubEnhancements,
} from '../interfaces';

const initialBasicInfo: BasicInfo = {
  name: '',
  subtitle: '',
  workingOn: '',
  learning: '',
  collaborateOn: '',
  helpWith: '',
  askMeAbout: '',
  reachMe: '',
  funFact: '',
  showVisitorBadge: false,
};

const initialLinks: Links = {
  portfolio: '',
  blog: '',
  resume: '',
};

const initialSocial: SocialLinks = {
  github: '',
  linkedin: '',
  twitter: '',
  instagram: '',
  medium: '',
  stackoverflow: '',
  facebook: '',
};

const initialEnhancements: GithubEnhancements = {
  statsCard: false,
  streakStats: false,
  topLanguagesCard: false,
  profileTrophy: false,
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      basicInfo: initialBasicInfo,
      links: initialLinks,
      social: initialSocial,
      selectedTechs: [],
      enhancements: initialEnhancements,
      currentStep: 0,

      setCurrentStep: (step) => set({ currentStep: step }),
      updateBasicInfo: (info) =>
        set((state) => ({ basicInfo: { ...state.basicInfo, ...info } })),
      updateLinks: (links) =>
        set((state) => ({ links: { ...state.links, ...links } })),
      updateSocial: (social) =>
        set((state) => ({ social: { ...state.social, ...social } })),
      toggleTech: (techId) =>
        set((state) => ({
          selectedTechs: state.selectedTechs.includes(techId)
            ? state.selectedTechs.filter((id) => id !== techId)
            : [...state.selectedTechs, techId],
        })),
      updateEnhancements: (enh) =>
        set((state) => ({ enhancements: { ...state.enhancements, ...enh } })),
    }),
    {
      name: 'readme-generator-draft',
    },
  ),
);
