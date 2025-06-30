import React from 'react';
import { CircularProgress, Box } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={{
        minHeight: '150vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={80} color="primary" />
    </Box>
  );
}

export default Loader;
