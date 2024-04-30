import { useAppSelector, useAppDispatch } from "@store/store";
import { actToggleAlertPopup } from "./alertPopupSlice";

const AlertPopup = () => {
  const dispatch = useAppDispatch();
  const alertPopup = useAppSelector((state) => state.alertPopup);

  return (
    <div className="Alert">
      <div className="container">
        {alertPopup.popupTitle && (
          <div className="header">
            <h1>{alertPopup.popupTitle}</h1>
          </div>
        )}
        <div className="content">{alertPopup.popupText}</div>
        <div className="buttons">
          {alertPopup.leftButton && (
            <button
              className="left"
              onClick={
                alertPopup.leftButton?.callback
                  ? () => {
                      alertPopup.leftButton?.callback!();
                      dispatch(actToggleAlertPopup(null));
                    }
                  : () => {
                      dispatch(actToggleAlertPopup(null));
                    }
              }
            >
              {alertPopup.leftButton?.text
                ? alertPopup.leftButton?.text
                : "취 소"}
            </button>
          )}
          <button
            className="right"
            onClick={
              alertPopup.rightButton?.callback
                ? () => {
                    alertPopup.rightButton?.callback!();
                    dispatch(actToggleAlertPopup(null));
                  }
                : () => {
                    dispatch(actToggleAlertPopup(null));
                  }
            }
            style={{
              borderBottomRightRadius: "5px",
              borderBottomLeftRadius: alertPopup.leftButton ? "0" : "5px",
              width: alertPopup.leftButton ? "50%" : "100%",
            }}
          >
            {alertPopup.rightButton?.text
              ? alertPopup.rightButton?.text
              : "확 인"}
          </button>
        </div>
      </div>
      <div className="dim" />
    </div>
  );
};

export default AlertPopup;
