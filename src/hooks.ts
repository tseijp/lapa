import { useRef, useState, createContext, useContext, useEffect } from 'react'
import type { GameStatus } from './types'

export const GameContext = createContext(null as unknown as GameStatus)

export const GameProvider = GameContext.Provider

export const useGame = () => useContext(GameContext)

export const useForceUpdate = () => {
        const [, set] = useState(-1)
        return useRef(() => set(Math.random())).current
}

export const useDebugImage = (src = 'https://i.imgur.com/spvdSgJ.jpg') => {
        useEffect(() => {
                const el = document.createElement('img')
                el.src = src
                el.style.position = 'fixed'
                el.style.top = '0'
                el.style.left = '0'
                el.style.opacity = '0.5'
                el.style.transform =
                        'translate(calc(50vw - 50%), calc(50vh - 50%))'
                document.body.appendChild(el)
        }, [src])
}

export const useLocationSearch = () => {
        const ret = {}
        new URLSearchParams(window.location.search).forEach((v, i) => {
                ret[i] = v
        })
        return ret as any
}
