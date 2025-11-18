type ParagraphBlock = string | string[];

export interface SectionBlock {
  title?: string;
  text: ParagraphBlock[];
}

interface MainSectionBlock {
  title?: string;
  text: string;
}

interface MainSectionContent {
  sections: MainSectionBlock[];
}

export interface MainSectionProps {
  sectionContent: MainSectionContent;
}

interface ExtraSectionBlock {
  indexAfter: number;
  title?: string;
  text: ParagraphBlock[];
}

interface ExtraSectionContent {
  extra?: ExtraSectionBlock[];
}

export interface ExtraSectionProps {
  id: string;
  index: number;
  sectionContent: ExtraSectionContent;
}

export interface VoyaExtraProps {
  items: ExtraSectionBlock[];
}

export interface VyntExtraOneProps {
  items: ExtraSectionBlock[];
}

export interface VyntExtraTwoProps {
  items: ExtraSectionBlock[];
}