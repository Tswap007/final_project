import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import MintPage from './components/MintPage/MintPage'
import Governace from './components/GovernancePage/Governance'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/governace" element={<Governace />} />
          {/* <Route element={NotFound} /> */}
        </Routes>
      </Layout>
    </>
  )
}

export default App
