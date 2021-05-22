import React from 'react';
import {Box, Center, Button, Spinner, Text} from '@chakra-ui/react';
import {Header} from './Header';
import {ModelLoad} from '../@types/atoms';
import * as colors from '../utils/colors';

interface props {
  pageName: string;
  isModelLoad: ModelLoad;
  cameraButton: () => void;
}

export const Frame: React.FC<props> = props => {
  return (
    <Box width="100%" height="100%">
      <Header pageName={props.pageName} />
      <Center margin="4rem" hidden={props.isModelLoad !== ModelLoad.loading}>
        <Spinner size="xl" thickness="4px" color={colors.primary} />
        <Text marginLeft="1rem" fontSize="1.5rem" color={colors.text}>
          Loading Model
        </Text>
      </Center>
      <Box marginTop="4rem" hidden={props.isModelLoad === ModelLoad.loading}>
        <Center margin="1rem 0 1rem 0">
          <Button
            backgroundColor={colors.primary}
            color={colors.textWhite}
            onClick={props.cameraButton}
            _hover={{color: colors.text, backgroundColor: colors.buttonHover}}
          >
            Camera ON
          </Button>
        </Center>
        <Center>
          <Box
            width="400px"
            height="400px"
            border="4px"
            borderRadius="10px"
            borderColor={colors.text}
          >
            {props.children}
          </Box>
        </Center>
      </Box>
    </Box>
  );
};
