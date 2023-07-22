import * as React from 'react'

export const useForceUpdate = () => {
        const set = React.useState(-1)[1]
        return React.useRef(() => set(Math.random)).current
}
