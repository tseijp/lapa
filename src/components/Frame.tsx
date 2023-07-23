import { useGame } from '../hooks'

export const Frame = () => {
        const _ = useGame()
        return (
                <mesh
                        scale={[_._size, _.depth, _._size]}
                        position-y={-_.depth / 2}
                >
                        <boxGeometry />
                        <meshPhongMaterial color="black" />
                </mesh>
        )
}
