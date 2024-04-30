import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import device from "@utils/device";
import { useAppDispatch, useAppSelector } from "@store/store";
import logo from "@assets/images/logo.gif";
import { ErrorMessage } from "@hookform/error-message";
import { getErrorMassage } from "@utils/errorMessage";
import requests from "@api/requests";
import { AlertPopupData } from "@components/common/popup/popup.interface";
import { actToggleAlertPopup } from "@components/common/popup/alertPopupSlice";
import storage from "@utils/storage";
import ax from "@api/ax";
import AlertPopup from "@components/common/popup/AlertPopup";

interface LoginForm {
  email: string;
  password: string;
  deviceid: string;
  device: string;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    getValues,
    setError,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const alertPopup = useAppSelector((state) => state.alertPopup);
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const alertPopupData: AlertPopupData = {
    popupText: "",
  };

  useEffect(() => {
    const getAutoLogin = storage.getStorage("auto-login") === "Y";
    const getUserEmail = storage.getStorage("user-email");
    const getUserPassword = storage.getStorage("user-password");

    if (getAutoLogin && getUserEmail && getUserPassword) {
      doLogin({ userEmail: getUserEmail, userPassword: getUserPassword });
    } else {
      return;
    }
  }, []);

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data: FieldValues = getValues();

    // 빈 값 확인
    const hasEmptyValue = Object.keys(data).some(
      (fieldName) =>
        data[fieldName] === undefined ||
        data[fieldName] === "" ||
        data[fieldName] === null
    );
    if (hasEmptyValue) {
      Object.keys(data).forEach((fieldName) => {
        const value = data[fieldName];
        if (value === undefined || value === "" || value === null) {
          setError(fieldName as keyof LoginForm, {
            type: "custom",
            message: getErrorMassage(fieldName),
          });
        }
      });
    } else {
      doLogin(data);
    }
  };

  const doLogin = async (data: FieldValues) => {
    console.log(data);
    const form: LoginForm = {
      email: data.userEmail,
      password: data.userPassword,
      deviceid: data.userEmail,
      device: device.getDevice(),
    };

    const res = await ax.post(requests.LOGIN, form);

    const resultData = res.data as {
      result: string;
      data?: {
        uid: string;
        devicekey: string;
      };
    };

    if (resultData.result == "success") {
      if (autoLogin) {
        storage.setStorage("user-email", data.userEmail);
        storage.setStorage("user-password", data.userPassword);
      } else {
        storage.removeToken();
      }
      storage.setStorage("auto-login", autoLogin ? "Y" : "N");
      storage.setUid(resultData.data!.uid);
      storage.setDeviceKey(resultData.data!.devicekey);
      navigate("/");
    } else {
      alertPopupData.popupText = `아이디 (이메일 주소) 와 비밀번호를 확인해 주세요.`;
      dispatch(actToggleAlertPopup(alertPopupData));
    }
  };

  return (
    <main className="Login">
      <img src={logo} alt="BRIT CHAT" />
      <form>
        <div className="Input">
          <label htmlFor="userEmail">아이디</label>
          <input
            {...register("userEmail", { required: true })}
            type="text"
            id="userEmail"
            placeholder="아이디를 입력해 주세요."
            autoComplete="off"
          />
          <ErrorMessage
            errors={errors}
            name="userEmail"
            render={({ message }) => (
              <p className={"errorMessage"}>{message}</p>
            )}
          />
        </div>
        <div className="Input">
          <label htmlFor="userPassword">비밀번호</label>
          <input
            {...register("userPassword", { required: true })}
            type="password"
            id="userPassword"
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="off"
          />
          <ErrorMessage
            errors={errors}
            name="userPassword"
            render={({ message }) => (
              <p className={"errorMessage"}>{message}</p>
            )}
          />
        </div>
        <div className="Checkbox">
          <input
            type="checkbox"
            id="autoLogin"
            checked={autoLogin}
            onChange={() => setAutoLogin(!autoLogin)}
          />
          <label htmlFor="autoLogin">자동 로그인</label>
        </div>
        <div className="Button">
          <button type="submit" className="blue" onClick={onSubmit}>
            로그인
          </button>
          <button className="white">회원 가입</button>
        </div>
        <div className="Link">
          <Link to="/auth/find_id">아이디 찾기</Link>
          <Link to="/auth/find_password">비밀번호 찾기</Link>
        </div>
      </form>
      {alertPopup.isActOpen && <AlertPopup />}
    </main>
  );
}

export default Login;
