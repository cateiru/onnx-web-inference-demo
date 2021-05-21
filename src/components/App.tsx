import {ChakraProvider, extendTheme, Box} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {pages, topPage} from '../utils/pages';
import {background} from '../utils/colors';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
});

const App = () => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Box backgroundColor={background}>
            <Switch>
              {pages.map(element => (
                <Route path={element.path}>{element.page}</Route>
              ))}
              <Route path={topPage.path}>{topPage.page}</Route>
            </Switch>
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
