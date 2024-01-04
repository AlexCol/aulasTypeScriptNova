/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ hook usestate
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
import React, {ChangeEvent, useState} from 'react'

const State = () => {
    const [text, setText] = useState<string | null>();
  
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setText(event.target.value);
    }

    return (
    <div>
        <p>O texto é: {text}</p>
        <input type="type" onChange={handleChange} />
    </div>
  )
}

export default State