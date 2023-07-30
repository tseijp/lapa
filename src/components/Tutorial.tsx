import { Flex } from './Flex'
import { Neon } from './Neon'
import type { CSSProperties } from 'react'

const imgStyle = {
        width: '50%',
        height: 'auto',
        objectFit: 'cover',
} as CSSProperties

export const Tutorial = ({ pagination }: { pagination: number }) => {
        if (pagination === 1)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        The Game Overview
                                </Neon>
                                <Neon text padding="1.5rem">
                                        This game is an original board game
                                        inspired by beloved classics like
                                        Mahjong. The objective is simple yet
                                        engaging: among four players, the first
                                        one to collect three sets of three
                                        colored pairs wins.
                                </Neon>
                        </Flex>
                )
        if (pagination === 2)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        Gameplay & Mechanics
                                </Neon>
                                <Neon text as="h3">
                                        Collecting Pairs
                                </Neon>
                                <Neon text padding="1.5rem">
                                        Players take turns choosing a tile from
                                        the 8x8 array in the center. Each player
                                        begins with eight tiles. You swap one of
                                        your tiles with the one you chose,
                                        revealing its color. The game ends when
                                        all tiles are revealed, or a player
                                        forms 3x3 color pairs in their hand.
                                </Neon>
                                <Flex row>
                                        <img src="/_0.jpg" style={imgStyle} />
                                        <img src="/_1.jpg" style={imgStyle} />
                                </Flex>
                        </Flex>
                )

        if (pagination === 3)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        Gameplay & Mechanics
                                </Neon>
                                <Neon text as="h3">
                                        Restrictions & Strategy
                                </Neon>
                                <Neon text padding="1.5rem">
                                        There are rules on which tiles you can
                                        choose. One is that it must be adjacent
                                        to an already revealed tile.
                                        Furthermore, you can't swap for a tile
                                        adjacent to one the same color as a
                                        complete set you hold. Lastly, you can
                                        swap with a tile discarded by the
                                        previous player.
                                </Neon>
                                <Flex row>
                                        <img src="/_2.jpg" style={imgStyle} />
                                        <img src="/_3.jpg" style={imgStyle} />
                                </Flex>
                        </Flex>
                )

        if (pagination === 4)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        Gameplay & Mechanics
                                </Neon>
                                <Neon text as="h3">
                                        Restrictions & Strategy
                                </Neon>
                                <Neon text padding="1.5rem">
                                        Balancing quick returns with the risk of
                                        enabling opponents to win forms the core
                                        strategy of the game. It incorporates
                                        the spirit of classic board games where
                                        players can impede each other's
                                        progress.
                                </Neon>
                        </Flex>
                )

        if (pagination === 5)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        Visuals
                                </Neon>
                                <Neon text padding="1.5rem">
                                        Inspired by the event theme, Party, the
                                        visuals echo a DJ event with a boiler
                                        room format where many surround a single
                                        DJ set.
                                </Neon>
                        </Flex>
                )

        if (pagination === 6)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        Inspiration & Uniqueness
                                </Neon>
                                <Neon text padding="1.5rem">
                                        The game's concept stems from the
                                        complexities of Mahjong. While
                                        preserving the interesting elements of
                                        the original game, this version
                                        eliminates the steep learning curve,
                                        making it fun and accessible, thus
                                        succeeding in its challenge of
                                        simplicity without losing depth.
                                </Neon>
                        </Flex>
                )
        if (pagination === 7)
                return (
                        <Flex height="75%" gap="1rem" textAlign="left">
                                <Neon text as="h2">
                                        Closing Thoughts
                                </Neon>
                                <Neon text padding="1.5rem">
                                        This game is a journey that starts with
                                        simple rules but ends with dynamic
                                        strategy and unexpected results. Be
                                        ready for a memorable party!
                                </Neon>
                        </Flex>
                )
        return null
}
