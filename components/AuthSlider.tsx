// components/AuthSlider.tsx
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthSlider = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box width="100%" maxWidth={600} mx="auto" mt={5} boxShadow={3} p={3}>
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>
      <Box mt={2}>
        {tabIndex === 0 && <LoginForm />}
        {tabIndex === 1 && <SignupForm />}
      </Box>
    </Box>
  );
};

export default AuthSlider;
