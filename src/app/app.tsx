import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DatabaseInstance } from './database/database'
import { Home } from './pages/home/home'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

(async () => {
  await DatabaseInstance.initialize()

  root.render(
    <StrictMode>
      <Home />
    </StrictMode>
  )
})()
