import React from 'react';
import {AuthProviders} from './AuthProviders';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProviders>
      <Routes />
    </AuthProviders>
  );
};
export default Providers;
