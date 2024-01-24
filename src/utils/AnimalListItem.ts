interface AudioObject {
  [key: string]: string;
}

interface SyllableLanguage {
  text: string[];
  audio: AudioObject;
}

export interface AnimalListItem {
  id: string;
  value: string;
  clicked: boolean;
  image: string;
  name: {
    en: {
      text: string;
      audio: string;
    };
    es: {
      text: string;
      audio: string;
    };
  };
  tiles: {
    en: string[];
    es: string[];
  };
  syllables: {
    en: SyllableLanguage;
    es: SyllableLanguage;
  };
  soundEffect: string[];
  funFacts: {
    en: string[];
    es: string[];
  };
  isLiked: boolean;
  category: string;
  background: string;
}
