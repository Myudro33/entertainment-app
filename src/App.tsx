import React from 'react'
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import { Container } from './Styled'

const App = () => {
  const [page, setpage] = useState('home')
  return (
    <Container>
      <Sidebar page={page} setpage={setpage} />
    </Container>
  )
}

export default App