import { IconType } from 'react-icons';

export interface Icon {
  name: string;
  icon: IconType;
}

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  landingImage: string;
  challenges: string[];
  icons: Icon[];
  otherImages?: string[];
  sourceCodeUrl?: string;
}
