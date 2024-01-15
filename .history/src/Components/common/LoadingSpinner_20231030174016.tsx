import React from 'react';
import { BeatLoader } from 'react-spinners';
import { useAppSelector } from '../../store/store';

const LoadingSpinner = () => {
  const { loading } = useAppSelector((state) => state.loading);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - 140px)',
        margin: '60px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        opacity: 1,
        transition: 'all 0.5s ease-in-out',
        zIndex: 999,
        display: loading ? 'block' : 'none'
      }}
    >
      <div
        className="spinner"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <BeatLoader size={12} color="#543AC4" margin={5} loading={loading} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
