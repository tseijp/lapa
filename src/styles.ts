export const flex = {
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

export const half = {
        ...flex,
        width: '50%',
        height: '50%',
} as React.CSSProperties

export const row = {
        ...flex,
        flexDirection: 'row',
        width: 'calc(100% - 10rem)',
        height: '10rem',
} as React.CSSProperties

export const main = {
        ...flex,
        position: 'fixed',
        background: '#212121',
} as React.CSSProperties
