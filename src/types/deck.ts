export type SlideTheme = "dark" | "light";

export interface SlideMeta {
  id: number;
  label: string;
  theme: SlideTheme;
  bg: string;
  speakerNotes?: string;
}

export interface DeckState {
  currentSlide: number;
  totalSlides: number;
  isNotesOpen: boolean;
  isOverviewOpen: boolean;
  isFullscreen: boolean;
  isAutoPlay: boolean;
  autoPlayInterval: number;
}
