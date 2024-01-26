import React, { useEffect } from 'react';
import ax from '../../../common/api/ax';
import requests from '../../../common/api/requests';
import JSEncrypt from 'jsencrypt';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { BasicInputType } from '../../common/input/input.interface';
import BasicInput from '../../common/input/BasicInput';
import device from '../../../common/utils/device';
import { LoginForm } from './loginForm.interface';
import { postLogin, resetState } from './slices/loginSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
// import CapsuleButton from '../../common/button/CapsuleButton';
// import Alert from '../../common/popup/Alert';
// import { openAlert } from '../../common/popup/slices/alertSlice';
import logo from '../../../assets/images/logo/logo_purple.svg';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const useFormMethod = useForm();
  const { login, message } = useAppSelector((state) => state.login);

  const loginButton = {
    text: '로그인',
    height: 44,
    style: {
      button: {
        width: "100%",
        height: "54px",
        padding: '0',
        background: "transparent linear-gradient(180deg, #543AC4 0%, #31189A 100%) 0% 0% no-repeat padding-box",
        borderRadius: "27px"
      },
      text: {
        color: '#ffffff'
      }
    }
  };

  const joinButton = {
    text: '회원가입',
    height: 44,
    callback: () => navigate('/auth/terms'),
    style: {
      button: {
        marginTop: "16px",
        width: "100%",
        height: "54px",
        border: '1px solid #DBDBDB',
        padding: '0',
        borderRadius: "27px"
      },
      text: {
        color: '#1f1f1f'
      }
    }
  };

  const idData: BasicInputType = {
    labelName: '아이디',
    isRequired: true,
    isDisabled: false,
    type: 'text',
    id: 'userId',
    placeholder: '아이디를 입력해 주세요',
    name: 'userId'
  };

  const passwordData: BasicInputType = {
    labelName: '비밀번호',
    isRequired: true,
    isDisabled: false,
    type: 'password',
    id: 'userPw',
    placeholder: '비밀번호를 입력해 주세요',
    name: 'userPw'
  };

  const onSubmit = async (data: any) => {
    const publicKeyResponse = await ax.get(requests.PUBLIC_KEY);
    const { resultCode, resultMsg } = publicKeyResponse.data;
    if (resultCode) {
      const encryptor = new JSEncrypt();
      encryptor.setPublicKey(resultMsg);
      const encryptedUserId = encryptor.encrypt(data.userId);
      const encryptedUserPassword = encryptor.encrypt(data.userPw);

      const form: LoginForm = {
        deviceId: device.getDeviceUUID(),
        userId: encryptedUserId,
        userPw: encryptedUserPassword
      };
      dispatch(postLogin(form));
    }
  };

  const onError = (error: any, e: any) => {
    console.log(error);
  };

  const alertData = {
    open: true,
    text: message,
    rightButton: {
      text: '확 인',
      callback: () => {
        dispatch(resetState());
      }
    }
  };

  useEffect(() => {
    if (!login && message !== '') {
      dispatch(openAlert(alertData));
    }
  }, [login, message]);

  return (
    <div className='loginWrap'>
      <img src={logo} alt="FITIN" />
      <FormProvider {...useFormMethod}>
        <form onSubmit={useFormMethod.handleSubmit(onSubmit, onError)}>
          <div className="loginArea">
            <BasicInput data={idData} />
            <BasicInput data={passwordData} />
          </div>
          <div className="buttonArea">
            <button></button>
          </div>
          <div className="findUserInformation">
            <Link to="/auth/find_id">아이디 찾기</Link>
            <Link to="/auth/find_password">비밀번호 찾기</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Login;
