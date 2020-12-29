import { IconType } from 'react-icons';

export interface Icon {
  icon: IconType;
}

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  imagePath: string;
  icons: Icon[];
  portfolioUrl: string;
}
