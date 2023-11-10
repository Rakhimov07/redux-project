import { Flex, HStack, Icon, IconButton, Image, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo, navigation} from '../../config/constants'
import {BsFillSunFill,BsFillMoonFill,} from 'react-icons/bs'
const Navbar = () => {
  const textHoverColor = useColorModeValue('facebook.200','white')
  const textColor = useColorModeValue('gray.900','facebook.200')
  const {toggleColorMode,colorMode} = useColorMode()
  return <Flex 
  borderBottom={'1px'}
  borderBottomColor={useColorModeValue('gray.400','gray.700')}
  px={{base:5,md:10}}
  justify={'space-between'} 
  align={'center'} 
  pos={'fixed'}
  top={0}
  left={0}
  right={0}
  h={'10vh'}
   backgroundColor={useColorModeValue('gray.200','gray.900')}
   >
   <HStack>
    <Link to={'/'}>
      <Image src={logo} alt='logo' />

    </Link>
   </HStack>
   <HStack gap={5}>
    {navigation.map(item => (
      <Link key={item.name} to={item.route}>
        <Text fontSize={{base:'md',md:'17px'}}  color={textColor} _hover={{textDecoration:'underline',color:textHoverColor}}>
          {item.name}
        </Text>
      </Link>
    ))}
   <IconButton
          onClick={toggleColorMode}
           aria-label='color-mode' 
           icon={colorMode === 'light' ? <BsFillMoonFill/>:<BsFillSunFill/>}
           colorScheme={'facebook'}
           variant={'outline'}
           />
   </HStack>
  </Flex>
}

export default Navbar