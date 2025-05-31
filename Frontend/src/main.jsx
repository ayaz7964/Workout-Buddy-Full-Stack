import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {WorkoutConTextProvider} from './Context/workoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutConTextProvider>
  <App />
    </WorkoutConTextProvider>
  
  </StrictMode>,
)
