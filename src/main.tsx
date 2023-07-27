import { createRoot } from 'react-dom/client'
import { extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import { App } from './App'

extend({ UnrealBloomPass })

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
