import { Html } from '@react-three/drei'
import { Flex } from './Flex'
import { Neon } from './Neon'

export const Fallback = () => {
        return (
                <Html fullscreen>
                        <Flex
                                fontFamily="Courier New, Courier, monospace"
                                row
                                color="#ffffff"
                                fontSize="5rem"
                                alignItems="flex-end"
                                paddingBottom="2.5rem"
                        >
                                <Neon text bottom={0}>
                                        Loading ...
                                </Neon>
                        </Flex>
                </Html>
        )
}
