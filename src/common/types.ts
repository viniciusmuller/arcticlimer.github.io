import { IconType } from 'react-icons';

export interface Icon {
  icon: IconType;
}

export interface Navbar {
  children: React.ReactNode;
}

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Section {
  component: React.FunctionComponent;
  id: string;
}

export interface Project {
  name: string;
  description: string;
  about: string;
  landingImage: string;
  challenges: string[];
  icons: Icon[];
  otherImages?: string[];
  sourceCodeUrl?: string;
}
