import { useState } from "react"

function App() {
  const [list, setList]=useState(['Diener', 'Yanne', 'Karol'])
  const [newItem, setNewItem] = useState('')

  const addToList = () => setList(list => [...list, newItem])

  return (
    <>
      <h1 className="title h2">hello world</h1>

      <input placeholder="Novo Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button type="button" onClick={addToList}>
        Adicionar
      </button>

      <ul>
        {list.map(item=> <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
