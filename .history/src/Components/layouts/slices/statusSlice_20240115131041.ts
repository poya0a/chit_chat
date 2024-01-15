import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Status {
    statusData: [
        {
            code: string,
            name: string,
            count: number
        }
    ]
}


const initialState: Status = {
    statusData: [
        {
            code: string,
            name: string,
            count: number
        }
    ]
};

export const getTermsList = createAsyncThunk<Terms>('terms/TermsInfoList', async () => {
    const res = await ax.get(requests.TERMS);
    let termsInfo = res.data.data;
    return termsInfo;
});


export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatusButton: (state, { payload }: PayloadAction<Status>) => {

    },
  }
});

export const { setStatusButton } = statusSlice.actions;
export default statusSlice;