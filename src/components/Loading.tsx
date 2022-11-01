import { Center, Spinner } from 'native-base';
import { StatusBar } from 'expo-status-bar';

export function Loading(){
  return(
    <Center flex={1} bg="gray.900">
      <Spinner color="yellow.500" />
    </Center>
  )
}