import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ax from '../../../../common/api/ax';
import requests from '../../../../common/api/requests';
import { LoginForm } from '../loginForm.interface';
import storage from '../../../../common/utils/storage';

interface Result {
  result: boolean;
  msg: string;
  data: {
    devicekey: string;
    uid: string;
  };
}

interface PostFormState {
  login: boolean;
  devicekey: string;
  uid: string;
  message: string;
}

const initialState: PostFormState = {
  login: false,
  devicekey: '',
  uid: '',
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
      state.login = payload.result;
      if (payload.result) {
        storage.setAccessToken(payload.data.devicekey);
        storage.setRefreshToken(payload.data.uid);
      } else {
        state.message = payload.msg;
      }
    });
    builder.addCase(getLogout.fulfilled, (state, { payload }: PayloadAction<Result>) => {
      state.login = !payload.result;
      if (payload.result) {
        storage.removeToken();
      } else {
        state.message = payload.msg;
      }
    });
  }
});

export const { resetState } = loginSlice.actions;
export default loginSlice;
