import { useState, useEffect, useMemo, useRef } from 'react'
import { Html, Sparkles } from '@react-three/drei'
import { useControls } from 'leva'
import { useGame } from '../hooks'
import { range } from '../utils'
import { Neon } from './Neon'
import { Flex } from './Flex'
import type { Color } from '../types'

export const Result = () => {
        const _ = useGame()
        const ref = useRef<any>()
        const [color, set] = useState([1, 1, 1] as Color)
        const rgb = useMemo(
                () => `rgb(${color.map((c) => c * 255).join(' ')})`,
                [color]
        )
        const sparclesProps = useControls(
                'Sparkles',
                {
                        size: 10,
                        opacity: 1,
                        speed: 0.1,
                        noise: 1,
                },
                { collapsed: true }
        )

        useEffect(() => {
                setTimeout(() => {
                        if (!ref.current) return
                        ref.current.parentElement.style.pointerEvents = 'none'
                }, 1)
                _(
                        range(_.n).reduce((acc, k) => {
                                acc[`l${k}`] = () => set(_.colors[k] as Color)
                                return acc
                        }, {})
                )
        }, [_])
        const size = 225
        const sub = 15
        const isFinished = _.users?.some((user) => user?.win)

        return (
                <>
                        {isFinished && (
                                <Sparkles
                                        scale={[1, 1, 1]}
                                        {...sparclesProps}
                                />
                        )}
                        <Html
                                ref={ref}
                                center
                                transform
                                rotation-x={-Math.PI / 2}
                                scale={0.1}
                        >
                                <axesHelper />
                                <Flex
                                        color="white"
                                        width={`${size}px`}
                                        height={`${size}px`}
                                        overflow="visible"
                                        fontSize="2rem"
                                >
                                        <Neon
                                                text
                                                c={rgb}
                                                position="absolute"
                                                transform={`translateY(${
                                                        size / 2 + sub
                                                }px) rotate(0deg)`}
                                                display={
                                                        _.users[1]?.reach ||
                                                        _.users[1]?.win
                                                                ? ''
                                                                : 'none'
                                                }
                                        >
                                                {_.users[1]?.win
                                                        ? 'Win'
                                                        : 'Reach'}
                                        </Neon>
                                        <Neon
                                                text
                                                c={rgb}
                                                position="absolute"
                                                transform={`translateX(${
                                                        size / 2 + sub
                                                }px) rotate(-90deg)`}
                                                display={
                                                        _.users[2]?.reach ||
                                                        _.users[2]?.win
                                                                ? ''
                                                                : 'none'
                                                }
                                        >
                                                {_.users[2]?.win
                                                        ? 'Win'
                                                        : 'Reach'}
                                        </Neon>
                                        <Neon
                                                text
                                                c={rgb}
                                                position="absolute"
                                                transform={`translateY(${
                                                        -size / 2 - sub
                                                }px) rotate(180deg)`}
                                                display={
                                                        _.users[3]?.reach ||
                                                        _.users[3]?.win
                                                                ? ''
                                                                : 'none'
                                                }
                                        >
                                                {_.users[3]?.win
                                                        ? 'Win'
                                                        : 'Reach'}
                                        </Neon>
                                        <Neon
                                                text
                                                c={rgb}
                                                position="absolute"
                                                transform={`translateX(${
                                                        -size / 2 - sub
                                                }px) rotate(90deg)`}
                                                display={
                                                        _.users[4]?.reach ||
                                                        _.users[4]?.win
                                                                ? ''
                                                                : 'none'
                                                }
                                        >
                                                {_.users[4]?.win
                                                        ? 'Win'
                                                        : 'Reach'}
                                        </Neon>
                                </Flex>
                        </Html>
                </>
        )
}
