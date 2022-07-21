import React from 'react';
import {useAlert} from './alert/AlertContext'

export default function Main(){
    const {show} = useAlert()
    return (
        <>
            <h1>Hello thin in primer contaxt</h1>
            <button onClick={()=> show('This text is in Main.js')}>Creat alert</button>
        </>
    )
}

