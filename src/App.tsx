
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import { ImageContextProvider } from './pages/Home/components/context/ImageContext'
import Portfolio from './pages/Portfolio/Portfolio'
import { ProjectsContextProvider } from './pages/Portfolio/context/ProjectsContext'
import ProjectInfo from './pages/ProjectInfo/ProjectInfo'
import { ProjectInfoContextProvider } from './pages/ProjectInfo/context/ProjectInfoContext'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
      <ImageContextProvider>
        <HomePage />
      </ImageContextProvider>
      } />
      <Route path='/portfolio' element={
      <ProjectsContextProvider>
        <Portfolio />
      </ProjectsContextProvider>
      } />
      <Route path='/portfolio/:id' element={
      <ProjectInfoContextProvider>
        <ProjectInfo />
      </ProjectInfoContextProvider>
      } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
