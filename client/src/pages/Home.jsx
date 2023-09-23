import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    if (!data) {
      navigate('/chats');
    }
  }, [navigate])
  
  return (
    <>
      <Container maxW='xl' centerContent>
        <Box
          display='flex'
          justifyContent='center'
          p={3}
          bg='white'
          w='100%'
          m='40px 0 15px 0'
          borderRadius='lg'
          borderWidth='1px'
        >
          <Text
            fontSize='4xl'
            color='black'
            textAlign='center'
          >Message me...</Text>
        </Box>
        <Box
          bg='white'
          w='100%'
          color='black'
          p={4}
          borderRadius='lg'
          borderWidth='1px'
        >
          <Tabs variant='soft-rounded' >
            <TabList mb='1em'>
              <Tab width='50%'>Login</Tab>
              <Tab width='50%'>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* login */}
                <Login/>
              </TabPanel>
              <TabPanel>
                {/* sign up */}
                <Signup/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  )
}

export default Home