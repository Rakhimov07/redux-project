import { Button, Container, FormControl, FormLabel, Heading, Icon, Input, InputGroup, InputRightElement, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useEye } from '../hooks/useEye'

const Register = () => {
  const {show,setShow} = useEye()
  return <Container
  h={'100%'}
  mx={{base:'0',sm:'auto'}}
  spacing={{base:10,lg:32}}
  mt={{base:10,md:'auto'}}
  py={{base:10,sm:20}}
  lineHeight={1.1}
>
<Stack
spacing={{base:10,md:20}}
>
<Stack
bg={useColorModeValue('gray.50','gray.900')}
rounded={'xl'}
p={{ base: 4, sm: 6, md: 8 }}
spacing={{ base: 8 }}
maxW={{ lg: 'lg' }}
>
<Heading 
fontSize={{base:'2xl',md:'3xl',lg:'4xl'}} 
lineHeight={1.1}
color={useColorModeValue('gray.900','gray.200')}>
 Register
 <Text as={'span'} bgGradient={'linear(to-r,gray.400,facebook.400)'} bgClip={'text'}>
   !
 </Text>
</Heading>
<Text fontSize={{base:'sm',sm:'md'}} color={'gray.500'}>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi ullam veritatis ab vel. Similique molestias quo vero exercitationem provident possimus, blanditiis repudiandae fugit accusantium dolor ducimus eos laborum facilis?
</Text>
<FormControl>
 <FormLabel>Name</FormLabel>
 <Input type='text' placeholder='name' h={14}/>
</FormControl>
<FormControl>
 <FormLabel>Email</FormLabel>
 <Input placeholder='example@sammi.ac' type='email' h={14}/>
</FormControl>
<FormControl >
 <FormLabel>Password</FormLabel>
<InputGroup size='md'>
 <Input
 h={14}
   type={show ? 'text' : 'password'}
   placeholder='password'
 />
 <InputRightElement pt={4}>
   <Icon onClick={() => setShow(prev => !prev)} as={show ? AiOutlineEye :AiOutlineEyeInvisible}
   cursor={'pointer'}/>
 </InputRightElement>
</InputGroup>
</FormControl>
<Button h={14} 
color={'white'} 
bgGradient={'linear(to-r,gray.400,facebook.400)'}
_hover={{bgGradient:'linear(to-l,gray.500,facebook.500)'}}>
 Register
</Button>
</Stack>
</Stack>
</Container>
}

export default Register