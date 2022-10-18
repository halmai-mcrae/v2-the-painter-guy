import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const App = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />)
