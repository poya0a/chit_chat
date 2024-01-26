import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { BasicInputType } from './input.interface';
import { ErrorMessage } from '@hookform/error-message';

const BasicInput = ({ data }: { data: BasicInputType }) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors }
  } = useFormContext();
  const [className, setClassName] = useState<string>('');
  const value = watch(data.name);

  const isValidPassed = async (name: string, trueFunc: () => void, falseFunc?: () => void) => {
    const isValid: boolean = await trigger(name);

    if (isValid) {
      trueFunc();
    } else {
      falseFunc && falseFunc();
    }
  };

  useEffect(() => {
    if (errors[data.name] && true) {
      setClassName('error');
    } else if (value && value.length > 0) {
      isValidPassed(data.name, () => {
        setClassName('confirmed');
      });
    } else {
      setClassName('');
    }
  }, [errors[data.name], value]);

  return (
    <div className="inputArea">
      <label htmlFor={data.id} className={data.isRequired ? 'required' : ''}>
        {data.labelName}
      </label>
      <input
        {...register(data.name, data.register)}
        type={data.type}
        id={data.id}
        placeholder={data.placeholder}
        disabled={data.isDisabled}
        autoComplete="off"
        className={className}
      />
      <ErrorMessage
        errors={errors}
        name={data.name}
        render={({ message }) => <p className={'errorMessage'}>{message}</p>}
      />
    </div>
  );
};

export default BasicInput;
