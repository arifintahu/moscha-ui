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
import { useEffect, useState } from 'react'
import { trimAddress } from '@/utils/helpers'
import { useChains } from '@/hooks/use-query'
import { postSession } from '@/api/session.action'
import { postChat } from '@/api/chat.action'

type Chat = {
  name: string
  message: string
}

export default function Home() {
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [isLoadingWallet, setIsLoadingWallet] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Chat[]>([])

  const { data: chains } = useChains()

  useEffect(() => {
    if (chains && chains.length) {
      setChainId(chains[0].id)
    }
  }, [chains])

  useEffect(() => {
    if (chats.length) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }, [chats])

  const connectKeplr = async () => {
    try {
      if (!window.keplr) {
        alert('Please install Keplr Extension')
        return
      }

      if (!chainId) {
        alert('Please select chain')
        return
      }

      setIsLoadingWallet(true)
      await window.keplr?.enable(chainId)
      const offlineSigner = window.keplr?.getOfflineSigner(chainId)

      const accounts = await offlineSigner?.getAccounts()
      if (!accounts?.length) {
        alert('Account not found')
        setIsLoadingWallet(false)
        return
      }

      const addr = accounts ? accounts[0].address : ''
      const data = await postSession(addr, chainId)

      setAddress(addr)
      setSessionId(data ? data.id : '')
      setIsLoadingWallet(false)
    } catch (err) {
      alert('Something error')
      console.error(err)
      setIsLoadingWallet(false)
    }
  }

  const handleSend = async () => {
    try {
      if (!sessionId) {
        alert('Please connect wallet')
        return
      }

      if (!message) {
        alert('Please enter message')
        return
      }

      setChats((oldChats) => [
        ...oldChats,
        {
          name: 'You',
          message,
        },
      ])
      const data = await postChat(sessionId, message)
      if (data && data.message) {
        setChats((oldChats) => [
          ...oldChats,
          {
            name: 'Moscha',
            message: data.message,
          },
        ])
      }

      setMessage('')
    } catch (err) {
      alert('Something error')
      console.error(err)
    }
  }

  const handleEnterSend = (key: string) => {
    if (key === 'Enter') {
      handleSend()
    }
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
                value={chainId}
                onChange={(e) => setChainId(e.target.value)}
              >
                {chains &&
                  chains.map((chain) => (
                    <option key={chain.id} value={chain.id}>
                      {chain.id}
                    </option>
                  ))}
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
                  <Button isLoading={isLoadingWallet} onClick={connectKeplr}>
                    Connect Wallet
                  </Button>
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
                  {chats.map((chat, index) => (
                    <Chat key={index} name={chat.name} message={chat.message} />
                  ))}
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
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    onKeyDown={(e) => handleEnterSend(e.key)}
                  />
                  <IconButton
                    fontSize={24}
                    aria-label="Send message"
                    icon={<ArrowUpIcon />}
                    onClick={handleSend}
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
