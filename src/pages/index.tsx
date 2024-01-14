import Head from 'next/head'
import { Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'

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
            <Heading fontSize={'x-large'}>Moscha</Heading>
            <Heading fontSize={'x-large'}>Select chain</Heading>
          </GridItem>
          <GridItem w="100%" minH={'100vh'} bg={'gray.700'} p={4}>
            <Flex justifyContent={'flex-end'}>
              <Button>Connect Wallet</Button>
            </Flex>
            <Flex>Chat messages</Flex>
            <Flex>Chat form</Flex>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
