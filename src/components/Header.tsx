import React from 'react';
import {IoMenu} from 'react-icons/io5';
import {pages, topPage} from '../utils/pages';
import {Link} from 'react-router-dom';
import * as colors from '../utils/colors';
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';

export const Header: React.FC<{pageName: string}> = ({pageName}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Box margin="0" backgroundColor={colors.headerBackGround}>
      <Flex padding="1rem">
        <Box>
          <IconButton
            onClick={onOpen}
            icon={<IoMenu />}
            aria-label="menu"
            size="lg"
            fontSize="2rem"
            variant="outline"
            border="none"
            outline="none"
            backgroundColor={colors.headerBackGround}
            color={colors.text}
            _hover={{backgroundColor: colors.headerBackGround}}
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                borderBottomWidth="1px"
                fontSize="1.8rem"
                textAlign="center"
                padding=".5rem 1rem .5rem 1rem"
              >
                <Link to={topPage.path} onClick={onClose} color={colors.text}>
                  ONNX Inference
                </Link>
              </DrawerHeader>
              <DrawerBody>
                <nav>
                  <UnorderedList margin="1.5rem 1rem 0 1rem">
                    <ListItem margin=".8rem 0 .7rem 0" listStyleType="none">
                      <Text
                        fontSize="1rem"
                        fontWeight="bold"
                        color={colors.text}
                      >
                        Demos
                      </Text>
                      <UnorderedList margin=".7rem 1.5rem .7rem 3rem">
                        {pages.map(element => (
                          <ListItem listStyleType="none">
                            <Link to={element.path} onClick={onClose}>
                              <Text fontSize="1rem" color={colors.text}>
                                {element.name}{' '}
                              </Text>
                            </Link>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </ListItem>
                  </UnorderedList>
                </nav>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box>
          <Text fontSize="2rem" marginLeft="2rem" fontWeight="bold">
            {pageName}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
