import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chatpage from './pages/Chatpage'
import ChatProvider from './context/chatProvider'


function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/chats' element={<Chatpage />} />
            </Routes>
          </ChatProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
