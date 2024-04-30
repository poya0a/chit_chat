import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertPopupData } from "./popup.interface";
import { onScrollLock, onScrollUnlock } from "@utils/comUtils";

const initialState: AlertPopupData = {
  isActOpen: false,
  popupTitle: "",
  popupText: "",
  leftButton: { text: "", callback: () => {} },
  rightButton: { text: "", callback: () => {} },
};

export const alertPopupSlice = createSlice({
  name: "alertPopup",
  initialState,
  reducers: {
    /**
     * @use AlertPopupData에 필수값인 popupText값만 입력 시 : { popupTitle: "", button: { text: '확인', callback: actCloseAlertPopup } }
     * @param {AlertPopupData} payload || @param {null} payload
     */
    actToggleAlertPopup: (
      state,
      { payload }: PayloadAction<AlertPopupData | null>
    ) => {
      if (payload) {
        state.isActOpen = true;
        state.popupTitle = payload.popupTitle;
        state.popupText = payload.popupText;
        state.leftButton = payload.leftButton;
        state.rightButton = payload.rightButton;
        onScrollLock();
      } else {
        Object.assign(state, initialState);
        onScrollUnlock();
      }
    },
  },
});

export const { actToggleAlertPopup } = alertPopupSlice.actions;
export default alertPopupSlice;
