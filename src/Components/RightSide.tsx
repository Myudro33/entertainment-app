import React from 'react'
import { RightSideWrapper } from '../Styled'
import { InputTypes } from '../Types'
import Input from './Input'

const RightSide = ({value,setvalue}:InputTypes) => {
  return (
    <RightSideWrapper>
        <Input value={value} setvalue={setvalue} />
    </RightSideWrapper>
  )
}

export default RightSide