import React from 'react'
import { useEvent } from 'reev/react'
import { rand, range } from './utils'
import { useForceUpdate } from './hooks'

export const App = () => {
        const update = useForceUpdate()
        const _ = useEvent({
                N: 100,
                n: 6,
                l: 4,
                p: 4,
                i: 0,
                _0: range(6).map(() => rand(4)),
                _1: range(6).map(() => rand(4)),
                _2: range(6).map(() => rand(4)),
                _3: range(6).map(() => rand(4)),
                pad: range(6 ** 2).map(() => rand(4)),
                state: range(4 ** 2).map(() => -1),
                clickPad(i: number) {
                        const target = _['_' + _.i]
                        if (
                                target.filter((x: number) => x === _.pad[i])
                                        .length <= 2
                        )
                                return
                        for (let ii = 0, count = 0; ii < target.length; ii++) {
                                if (target[ii] !== _.pad[i]) continue
                                if (count >= 3) break
                                target[ii] = rand(_.p)
                                count++
                        }
                        _.state[i] = _.i
                        console.log(i, _.i, _.state, _.state[i])
                        _.i = (_.i + 1) % 4
                        update()
                },
                clickMine(playerIndex: number, i: number) {
                        const target = _['_' + playerIndex]
                        target[i] = rand(_.p)
                        _.i = (_.i + 1) % 4
                        update()
                },
        }) as any

        const switchColor = (i: number) => {
                switch (_.state[i]) {
                        case 0:
                                return '#00e2e2'
                        case 1:
                                return '#e200e2'
                        case 2:
                                return '#e2e200'
                        case 3:
                                return '#00e200'
                        default:
                                return '#e2e2e2'
                }
        }

        const repeat = `repeat(${_.l}, 1fr)`

        const Player0 = (i: number) => (
                <div key={i} style={flex}>
                        <div
                                onClick={() => _.clickMine(0, i)}
                                style={{
                                        ...flex,
                                        ...half,
                                        background:
                                                _.i === 0
                                                        ? '#00e2e2'
                                                        : '#002e2e',
                                }}
                        >
                                {_._0[i]}
                        </div>
                </div>
        )

        const Player1 = (i) => (
                <div onClick={() => _.clickMine(1, i)} key={i} style={flex}>
                        <div
                                style={{
                                        ...flex,
                                        ...half,
                                        background:
                                                _.i === 1
                                                        ? '#e200e2'
                                                        : '#2e002e',
                                }}
                        >
                                {_._1[i]}
                        </div>
                </div>
        )

        const Player2 = (i: number) => (
                <div key={i} style={flex}>
                        <div
                                onClick={() => _.clickMine(2, i)}
                                style={{
                                        ...flex,
                                        ...half,
                                        background:
                                                _.i === 2
                                                        ? '#e2e200'
                                                        : '#2e2e00',
                                }}
                        >
                                {_._2[i]}
                        </div>
                </div>
        )

        const Player3 = (i: number) => (
                <div key={i} style={flex}>
                        <div
                                onClick={() => _.clickMine(3, i)}
                                style={{
                                        ...flex,
                                        ...half,
                                        background:
                                                _.i === 3
                                                        ? '#00e200'
                                                        : '#002e00',
                                }}
                        >
                                {_._3[i]}
                        </div>
                </div>
        )

        const Pad = (i: number) => (
                <div key={i} style={flex}>
                        <div
                                onClick={() => _.clickPad(i)}
                                style={{
                                        ...flex,
                                        ...half,
                                        background: switchColor(i),
                                }}
                        >
                                {_.pad[i]}
                        </div>
                </div>
        )

        return (
                <div style={main}>
                        <div style={p2}>{range(_.n).map(Player2)}</div>
                        <div style={{ ...flex, flexDirection: 'row' }}>
                                <div style={{ ...flex, width: '10rem' }}>
                                        {range(_.n).map(Player3)}
                                </div>
                                <div
                                        style={{
                                                ...flex,
                                                display: 'grid',
                                                background: '#2e2e2e',
                                                gridTemplateRows: repeat,
                                                gridTemplateColumns: repeat,
                                        }}
                                >
                                        {range(_.l ** 2).map(Pad)}
                                </div>
                                <div style={{ ...flex, width: '10rem' }}>
                                        {range(_.n).map(Player1)}
                                </div>
                        </div>
                        <div style={row}>{range(_.n).map(Player0)}</div>
                </div>
        )
}

const flex = {
        display: 'flex',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
} as React.CSSProperties

const half = {
        width: '50%',
        height: '50%',
} as React.CSSProperties

const row = {
        ...flex,
        flexDirection: 'row',
        width: 'calc(100% - 10rem)',
        height: '10rem',
} as React.CSSProperties

const main = {
        ...flex,
        position: 'fixed',
        background: '#212121',
} as React.CSSProperties

const p2 = {
        ...flex,
        flexDirection: 'row',
        width: 'calc(100% - 10rem)',
        height: '10rem',
} as React.CSSProperties
