import Head from 'next/head'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'
import Chat from '@/components/Chat'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { trimAddress } from '@/utils/helpers'

export default function Home() {
  const [address, setAddress] = useState('')
  const connectKeplr = async () => {
    if (!window.keplr) {
      alert('Please install Keplr Extension')
    }

    const chainId = 'theta-testnet-001'

    await window.keplr?.enable(chainId)
    const offlineSigner = window.keplr?.getOfflineSigner(chainId)

    const accounts = await offlineSigner?.getAccounts()
    if (!accounts?.length) {
      alert('Account not found')
    }
    setAddress(accounts ? accounts[0].address : '')
  }

  return (
    <>
      <Head>
        <title>Moscha</title>
        <meta name="description" content="Moscha - Chat bot cosmos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid templateColumns="250px 1fr">
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
              w="calc(100% - 250px)"
              zIndex={99}
              bg={'gray.700'}
              p={4}
            >
              <Flex justifyContent={'flex-end'}>
                {address ? (
                  <Text>{trimAddress(address)}</Text>
                ) : (
                  <Button onClick={connectKeplr}>Connect Wallet</Button>
                )}
              </Flex>
            </Box>

            <Box w={'100%'} p={4}>
              <Box
                mx={'auto'}
                maxW={{ base: 'lg', md: 'xl', lg: '3xl' }}
                my={'75px'}
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
                  <Chat
                    name="Moscha"
                    message="In the Cosmos ecosystem, we have numerous app chains, each possessing its own sovereignty. The challenge arises as the number of chains grows, making it cumbersome to manage accounts across multiple chains. To address this, we propose the development of an IBC module capable of executing transactions on other chains directly from a single chain. This concept mirrors the interchain account idea but eliminates the need for creating proxy accounts. Our focus is on establishing a method to verify authenticity from the source chain to the destination chain using the same wallet."
                  />
                </Stack>
              </Box>
            </Box>
            <Box
              position={'fixed'}
              w="calc(100% - 250px)"
              bottom={0}
              zIndex={99}
              bg={'gray.700'}
              px={4}
              pb={4}
            >
              <Flex justifyContent={'center'}>
                <Flex
                  p={2}
                  borderColor={'gray.500'}
                  borderWidth={1}
                  borderRadius={'xl'}
                  w={'3xl'}
                >
                  <Input
                    placeholder="Message Moscha..."
                    border={'none'}
                    _focusVisible={{
                      outline: 'none',
                    }}
                  />
                  <IconButton
                    fontSize={24}
                    aria-label="Send message"
                    icon={<ArrowUpIcon />}
                  />
                </Flex>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
