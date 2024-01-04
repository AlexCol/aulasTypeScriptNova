/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ desestruturando props
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

import React, { ReactElement } from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) : ReactElement => {
  return (
    <div>Meu segundo componente: {props.name}</div>
  )
}

export default SecondComponent