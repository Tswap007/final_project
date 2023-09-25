import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import MintPage from './components/MintPage/MintPage'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mint" element={<MintPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
