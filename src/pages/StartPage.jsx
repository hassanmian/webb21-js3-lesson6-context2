import React, {useContext} from 'react'
import { NameContext } from '../App'

export default function StartPage() {
    const {name, setName } = useContext(NameContext)
    return (
        <>
          <h1>Startpage</h1>  
          {name} 
          <form>
              <input 
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
          </form>
        </>
    )
}
