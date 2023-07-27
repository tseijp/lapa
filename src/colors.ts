import { GameStatus, UserItem, PadItem } from './types'
import { hasNextColor } from './utils'

export const switchUserLuminance = (_: GameStatus, self: UserItem) => {
        const { visible, active, pk } = self
        if (!visible) return 0.1
        if (active) return 5
        if ((_.t % 4) + 1 !== pk) return 1
        if (_.select === self) return 5
        return 1
}

export const switchPadLuminance = (_: GameStatus, self: PadItem) => {
        const { visible } = self
        if (_.select === self) return 3
        if (!visible) if (!hasNextColor(_, self)) return 0.1
        return 1.5
}

// export const changeLuminance = (rgb: number[], target: number) => {
//         const maxVal = Math.max(...rgb)
//         const adjustRate = target / maxVal
//         return rgb.map((val) => (val === maxVal ? val * adjustRate : val))
// }

export const changeLuminance = (rgb: number[], target: number) => {
        const current = (rgb[0] + rgb[1] + rgb[2]) / 3
        const maxVal = Math.max(...rgb)
        const adjustRate = target / current
        return rgb.map((val) => (val === maxVal ? val * adjustRate : val))
}
