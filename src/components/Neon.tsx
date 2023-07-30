import { useMemo, createElement } from 'react'
import { range } from '../utils'
import type { CSSProperties, ReactNode } from 'react'

export interface NeonConfig {
        c?: string // color
        r?: number // radius
        i?: number // intensity
}

export const neon = (config: NeonConfig) => {
        const { c = '#ffffff', r = 5, i = 5 } = config
        return range(i)
                .map((_, i) => `0 0 ${r ** i}px ${c}`)
                .join(', ')
}

export interface NeonProps extends NeonConfig, CSSProperties {
        as?: any
        text?: boolean
        box?: boolean
        onClick?: any
        onMouseEnter?: any
        onMouseLeave?: any
        children?: ReactNode
}

export const Neon = (props: NeonProps) => {
        const {
                children,
                onClick,
                onMouseEnter,
                onMouseLeave,
                as = 'div',
                text,
                box,
                c,
                r,
                i,
                ...other
        } = props
        const color = useMemo(() => neon({ c, r, i }), [c, r, i])
        const style = {
                textShadow: text ? color : void 0,
                boxShadow: box ? color : void 0,
                ...other,
        }
        return createElement(
                as,
                { onClick, onMouseEnter, onMouseLeave, style },
                children
        )
}
