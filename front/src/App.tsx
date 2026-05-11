
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Thread from './pages/ThreadPage.tsx'
import MainPage from './pages/MainPage.tsx'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thread/new" element={<Thread />} />
        <Route path="/thread/:threadId" element={<Thread />} />
      </Routes >
    </>
  )
}

export default App
