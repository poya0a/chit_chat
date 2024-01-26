import { RegisterOptions } from 'react-hook-form';

interface BasicInputType {
  // input setting
  labelName: string;
  isRequired: boolean;
  isDisabled: boolean;
  type: string;
  id: string;
  placeholder?: string;

  // register setting
  name: string;
  register?: RegisterOptions;
}

interface DupleInputType {
  // input setting
  labelName: string;
  isRequired: boolean;
  type: string;
  id: string;
  placeholder: string;

  // register setting
  name: string;
  requestUrl: string;
  register: RegisterOptions;
}

export type { BasicInputType, DupleInputType };
