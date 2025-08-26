import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Pages/Landing';
import { Login } from '../Pages/Login';
import { Registration } from '../Pages/Registration';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
