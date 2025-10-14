export type SectionType = 'hero' | 'header' | 'footer' | 'card';

export type SectionData = {
  id: string; 
  type: SectionType;
  props: Record<string, any>;
}
