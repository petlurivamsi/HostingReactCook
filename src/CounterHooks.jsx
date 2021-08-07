import React,{useState,useContext} from 'react'
import { ThemeContext } from './App'


export default function CounterHooks({initialCount}) {
        const [state, setstate] = useState({count:initialCount})    
        const style = useContext(ThemeContext)
    return (
        <div>
          <button style={style} onClick={()=>setstate(prevState=>{return {count:prevState.count-1}})}>-</button>
          <span>{state.count}</span>
          <button style={style} onClick={()=>setstate(prevState=>{return {count:prevState.count+1}})}>+</button>

        </div>
    )
}
