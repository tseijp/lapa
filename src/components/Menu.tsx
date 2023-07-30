import { useState, useEffect, useMemo } from 'react'
import { useGame } from '../hooks'
import { range } from '../utils'
import { Neon } from './Neon'
import { Flex } from './Flex'
import { Tutorial } from './Tutorial'
import type { Color } from '../types'

export const Menu = () => {
        const [color, set] = useState([1, 1, 1] as Color)
        const [disabled, setDisabled] = useState(false)
        const [pagination, setPagination] = useState(0)
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
                                        fontSize="1.5rem"
                                        minWidth="7.5rem"
                                        minHeight="7.5rem"
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        borderRadius="9999px"
                                        onClick={() =>
                                                setPagination((p) =>
                                                        p ? 0 : 1
                                                )
                                        }
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
                        <Flex
                                fontSize="1rem"
                                position="fixed"
                                display={pagination ? 'flex' : 'none'}
                                onClick={() => setPagination(0)}
                        >
                                <Neon
                                        width="90%"
                                        height="90%"
                                        borderRadius="2.5rem"
                                        boxSizing="border-box"
                                        overflowY="scroll"
                                        justifyContent="space-between"
                                        backdropFilter="blur(15px)"
                                        backgroundColor="rgba(0,0,0, 0.5)"
                                        onClick={(e: any) =>
                                                e.stopPropagation()
                                        }
                                >
                                        <Tutorial pagination={pagination} />
                                        <Flex
                                                height="10rem"
                                                row
                                                gap="5rem"
                                                bottom="5rem"
                                        >
                                                <Neon
                                                        box
                                                        i={3}
                                                        fontSize="3rem"
                                                        minWidth="5rem"
                                                        minHeight="5rem"
                                                        borderRadius="9999px"
                                                        alignItems="center"
                                                        flexDirection="column"
                                                        justifyContent="center"
                                                        display={
                                                                pagination <= 1
                                                                        ? 'none'
                                                                        : 'flex'
                                                        }
                                                        onClick={() =>
                                                                setPagination(
                                                                        (p) =>
                                                                                p -
                                                                                1
                                                                )
                                                        }
                                                >
                                                        ◀︎
                                                </Neon>
                                                <Neon
                                                        box
                                                        i={3}
                                                        fontSize="3rem"
                                                        minWidth="5rem"
                                                        minHeight="5rem"
                                                        borderRadius="9999px"
                                                        alignItems="center"
                                                        flexDirection="column"
                                                        justifyContent="center"
                                                        display="flex"
                                                        onClick={() =>
                                                                setPagination(
                                                                        (p) =>
                                                                                (p +
                                                                                        1) %
                                                                                8
                                                                )
                                                        }
                                                >
                                                        ▶︎
                                                </Neon>
                                        </Flex>
                                </Neon>
                        </Flex>
                </Flex>
        )
}
