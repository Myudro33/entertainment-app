import React from 'react'
import { useState } from 'react'
import RightSide from './Components/RightSide'
import Sidebar from './Components/Sidebar'
import { Container } from './Styled'

const App = () => {
  const [page, setpage] = useState<string>('home')
  const [value, setvalue] = useState<string>('')  
  return (
    <Container>
      <Sidebar page={page} setpage={setpage} />
      <RightSide value={value} setvalue={setvalue} />
    </Container>
  )
}

export default App