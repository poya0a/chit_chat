interface AlertPopupData {
  popupText: string;
  isActOpen?: boolean;
  popupTitle?: string;
  leftButton?: {
    text?: string;
    callback?: () => void;
  };
  rightButton?: {
    text?: string;
    callback?: () => void;
  };
}

export type { AlertPopupData };
