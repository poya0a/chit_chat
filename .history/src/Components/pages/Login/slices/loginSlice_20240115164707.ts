import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ax from '../../../../common/api/ax';
import requests from '../../../../common/api/requests';
import { LoginForm } from '../loginForm.interface';
import storage from '../../../../common/utils/storage';

interface Result {
  resultCode: boolean;
  resultMsg: string;
  data: {
    devicekey: string;
    uid: string;
  };
}

interface PostFormState {
  login: boolean;
  message: string;
}

const initialState: PostFormState = {
  login: false,
  message: ''
};

export const postLogin = createAsyncThunk('login/postForm', async (form: LoginForm) => {
  const res = await ax.post(requests.LOGIN, form);
  let result = res.data;
  return result;
});

export const getLogout = createAsyncThunk('login/getLogout', async () => {
  const res = await ax.get(requests.LOGOUT);
  let result = res.data;
  return result;
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetState: (state) => {
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.fulfilled, (state, { payload }: PayloadAction<Result>) => {
      state.login = payload.resultCode;
      if (payload.resultCode) {
        storage.setAccessToken(payload.data.devicekey);
        storage.setRefreshToken(payload.data.uid);
      } else {
        state.message = payload.resultMsg;
      }
    });
    builder.addCase(getLogout.fulfilled, (state, { payload }: PayloadAction<Result>) => {
      state.login = !payload.resultCode;
      if (payload.resultCode) {
        storage.removeToken();
      } else {
        state.message = payload.resultMsg;
      }
    });
  }
});

export const { resetState } = loginSlice.actions;
export default loginSlice;
