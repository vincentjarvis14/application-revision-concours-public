// Types pour le contenu des fiches
export interface ContentSection {
  title: string;
  text: string;
  subsections?: ContentSection[];
}

export interface Fiche {
  id: number;
  title: string;
  theme: 'urbanisme' | 'environnement';
  sections: ContentSection[];
}

export interface ThemeSection {
  name: string;
  fiches: Fiche[];
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  sections: ThemeSection[];
}
