import Head from 'next/head'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
} from '@chakra-ui/react'
import Chat from '@/components/Chat'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moscha</title>
        <meta name="description" content="Moscha - Chat bot cosmos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid templateColumns="300px 1fr">
          <GridItem w="100%" minH={'100vh'} bg={'gray.900'} p={4}>
            <Box position={'fixed'}>
              <Heading fontSize={'x-large'} mb={4}>
                Moscha
              </Heading>
              <Select
                placeholder="Select chain"
                defaultValue={'theta-testnet-001'}
              >
                <option value="theta-testnet-001">Cosmos Hub Testnet</option>
                <option value="orai-testnet-001">Orai Testnet</option>
              </Select>
            </Box>
          </GridItem>
          <GridItem w="100%" minH={'100vh'} bg={'gray.700'}>
            <Box
              as="header"
              position={'fixed'}
              w="calc(100% - 300px)"
              zIndex={99}
              bg={'gray.700'}
              p={4}
            >
              <Flex justifyContent={'flex-end'}>
                <Button>Connect Wallet</Button>
              </Flex>
            </Box>

            <Box w={'100%'} p={4}>
              <Box
                mx={'auto'}
                maxW={{ base: 'lg', md: 'xl', lg: '3xl' }}
                mt={'75px'}
              >
                <Stack gap={10}>
                  <Chat name="You" message="Hello world!" />
                  <Chat name="Moscha" message="Hi!" />
                  <Chat name="You" message="Hello world!" />
                  <Chat name="Moscha" message="Hi!" />
                  <Chat name="You" message="Hello world!" />
                  <Chat name="Moscha" message="Hi!" />
                  <Chat name="You" message="Hello world!" />
                  <Chat name="Moscha" message="Hi!" />
                  <Chat name="You" message="Hello world!" />
                  <Chat name="Moscha" message="Hi!" />
                  <Chat name="You" message="Hello world!" />
                  <Chat name="Moscha" message="Hi!" />
                </Stack>
              </Box>
            </Box>
            <Flex>Chat form</Flex>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
