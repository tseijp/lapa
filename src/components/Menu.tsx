import { useState, useEffect, useMemo } from 'react'
import { useGame } from '../hooks'
import { range } from '../utils'
import { Neon } from './Neon'
import { Flex } from './Flex'
import type { Color } from '../types'

export const Menu = () => {
        const [color, set] = useState([1, 1, 1] as Color)
        const [disabled, setDisabled] = useState(false)
        const [i_, setI_] = useState(5)
        const [i0, setI0] = useState(3)
        const [i1, setI1] = useState(3)
        const [i2, setI2] = useState(3)
        const rgb = useMemo(
                () => `rgb(${color.map((c) => c * 255).join(' ')})`,
                [color]
        )
        const _ = useGame()

        useEffect(() => {
                _(
                        range(_.n).reduce((acc, k) => {
                                acc[`l${k}`] = () => set(_.colors[k] as Color)
                                return acc
                        }, {})
                )
                _({
                        start() {
                                setDisabled(true)
                        },
                        end() {
                                setDisabled(false)
                        },
                })
        }, [_])

        if (disabled) return null

        return (
                <Flex
                        position="fixed"
                        userSelect="none"
                        fontFamily="Courier New, Courier, monospace"
                        gap="2.5rem"
                        color="white"
                        paddingBottom="10rem"
                        fontSize="7.5rem"
                        textAlign="center"
                        onMouseEnter={() => setI_(11)}
                        onMouseLeave={() => setI_(6)}
                >
                        <Neon text i={i_} c={rgb}>
                                Launch
                        </Neon>
                        <Neon text i={i_} c={rgb}>
                                Party
                        </Neon>
                        <Flex row gap="5rem" height="15rem" color="white">
                                <Neon
                                        box
                                        c={rgb}
                                        i={i0}
                                        minWidth="7.5rem"
                                        minHeight="7.5rem"
                                        fontSize="1.5rem"
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        borderRadius="9999px"
                                        onMouseEnter={() => setI0(2)}
                                        onMouseLeave={() => setI0(3)}
                                >
                                        Tutorial
                                </Neon>
                                <Neon
                                        box
                                        i={i1}
                                        c={rgb}
                                        minWidth="7.5rem"
                                        minHeight="7.5rem"
                                        fontSize="2.5rem"
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        borderRadius="9999px"
                                        onClick={_.start}
                                        onMouseEnter={() => setI1(2)}
                                        onMouseLeave={() => setI1(3)}
                                >
                                        Play
                                </Neon>
                                <Neon
                                        box
                                        c={rgb}
                                        i={i2}
                                        minWidth="7.5rem"
                                        minHeight="7.5rem"
                                        fontSize="2rem"
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        borderRadius="9999px"
                                        onClick={() =>
                                                alert('SORRY, COMMING SOON!!!')
                                        }
                                        onMouseEnter={() => setI2(2)}
                                        onMouseLeave={() => setI2(3)}
                                >
                                        Online
                                </Neon>
                        </Flex>
                </Flex>
        )
}
