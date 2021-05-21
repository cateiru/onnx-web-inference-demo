import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import {TopPage} from './TopPage';

const App = () => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <TopPage />
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
