export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  medium: string;
  stackoverflow: string;
  facebook: string;
}

export interface BasicInfo {
  name: string;
  subtitle: string;
  workingOn: string;
  learning: string;
  collaborateOn: string;
  helpWith: string;
  askMeAbout: string;
  reachMe: string;
  funFact: string;
  showVisitorBadge: boolean;
}

export interface Links {
  portfolio: string;
  blog: string;
  resume: string;
}

export interface GithubEnhancements {
  statsCard: boolean;
  streakStats: boolean;
  topLanguagesCard: boolean;
  profileTrophy: boolean;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  svgPath: string;
}

export interface FormState {
  basicInfo: BasicInfo;
  links: Links;
  social: SocialLinks;
  selectedTechs: string[];
  enhancements: GithubEnhancements;
}

export interface StoreState extends FormState {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  updateBasicInfo: (info: Partial<BasicInfo>) => void;
  updateLinks: (links: Partial<Links>) => void;
  updateSocial: (social: Partial<SocialLinks>) => void;
  toggleTech: (techId: string) => void;
  updateEnhancements: (enh: Partial<GithubEnhancements>) => void;
}
