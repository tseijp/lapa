import { ReactNode, CSSProperties, createElement } from 'react'

export interface FlexProps extends CSSProperties {
        children?: ReactNode
        style?: CSSProperties
        onClick?: any
        onMouseEnter?: any
        onMouseLeave?: any
        as?: any
        row?: boolean
        wrap?: boolean
}

export const Flex = (props: FlexProps) => {
        const {
                children,
                onClick,
                onMouseEnter,
                onMouseLeave,
                as = 'div',
                wrap = false,
                row = false,
                gap = 0,
                top = 0,
                left = 0,
                width = '100%',
                height = '100%',
                margin = 0,
                padding = 0,
                display = 'flex',
                flexWrap = 'nowrap',
                position = 'relative',
                boxSizing = 'border-box',
                overflowX = 'hidden',
                overflowY = 'hidden',
                alignItems = 'center',
                flexDirection = 'column',
                justifyContent = 'center',
                ...other
        } = props
        const style = {
                gap,
                top,
                left,
                width,
                height,
                margin,
                padding,
                display,
                flexWrap: wrap ? 'wrap' : flexWrap,
                position,
                boxSizing,
                overflowX,
                overflowY,
                alignItems,
                flexDirection: row ? 'row' : flexDirection,
                justifyContent,
                ...other,
        }
        return createElement(
                as,
                { onClick, onMouseEnter, onMouseLeave, style },
                children
        )
}
