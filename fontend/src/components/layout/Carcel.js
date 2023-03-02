import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', zIndex: 10, overflow: 'hidden' }}>
      <CircularProgress color='secondary'/>
    </Box>
  );
}