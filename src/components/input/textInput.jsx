import React, { useState } from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const StyledInput = styled(TextField)(({ theme }) => ({
  width: '350px',
  marginBottom: '1rem',
  
  "& .error": {
    color:"red"
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));


const TextInput = ({ validateEmail ,isValidEmail }) => {
    console.log("isValidEmail0",isValidEmail)
  
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <StyledInput
        type="email"
        placeholder="Enter your email"
        onChange={validateEmail}
      />
      
      {/* <p className={`error`}>
        {!isValidEmail  && 'Please enter a valid email!'}
      </p> */}
    </Box>
  );
};

export default TextInput;
