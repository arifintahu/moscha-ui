import { Avatar, Flex, Heading, Stack, Text } from '@chakra-ui/react'

export default function Chat({
  name,
  message,
}: {
  name: string
  message: string
}) {
  return (
    <Flex gap={4}>
      <Avatar name={name} src="https://bit.ly/broken-link" boxSize={8} />
      <Stack>
        <Heading fontSize={'lg'} mt={1}>
          {name}
        </Heading>
        <Text>{message}</Text>
      </Stack>
    </Flex>
  )
}
