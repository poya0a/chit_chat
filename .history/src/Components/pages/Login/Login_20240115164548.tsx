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
import logo from '../../../assets/images/logo.png';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const useFormMethod = useForm();
  const { login, message } = useAppSelector((state) => state.login);

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
    // const publicKeyResponse = await ax.get(requests.PUBLIC_KEY);
    // const { resultCode, resultMsg } = publicKeyResponse.data;
    // if (resultCode) {
    //   const encryptor = new JSEncrypt();
    //   encryptor.setPublicKey(resultMsg);
    //   const encryptedUserId = encryptor.encrypt(data.userId);
    //   const encryptedUserPassword = encryptor.encrypt(data.userPw);

    //   const form: LoginForm = {
    //     deviceId: device.getDeviceUUID(),
    //     userId: encryptedUserId,
    //     userPw: encryptedUserPassword
    //   };
      
    // }
    const form: LoginForm = {
        email: data.userId,
        password: data.userPw,
        deviceid: data.userId,
        device: "WEB",
    }
    dispatch(postLogin(form));
  };

  const onError = (error: any, e: any) => {
    console.log(error);
  };

  return (
    <div className='loginWrap'>
      <img src={logo} alt="CHITCHAT" />
      <FormProvider {...useFormMethod}>
        <form onSubmit={useFormMethod.handleSubmit(onSubmit, onError)}>
          <div className="formArea">
            <BasicInput data={idData} />
            <BasicInput data={passwordData} />
          </div>
          <div className="buttonArea">
            <button className='whiteButton'>로그인</button>
            <button className='blueButton'>회원 가입</button>
          </div>
          <div className="informationArea">
            <Link to="/auth/find_id">아이디 찾기</Link>
            <Link to="/auth/find_password">비밀번호 찾기</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Login;
