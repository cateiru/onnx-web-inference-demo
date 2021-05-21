import React from 'react';
import {Box} from '@chakra-ui/react';
import {Header} from './Header';

export const Frame: React.FC<{pageName: string}> = props => {
  return (
    <Box>
      <Header pageName={props.pageName} />
      {props.children}
    </Box>
  );
};
