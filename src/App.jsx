import { useReducer, useState } from 'react'
import './App.css'

function App() {

  const cart = [
    {
      id: Math.random(),
      name: "iphone"

    },
    {
      id: Math.random(),
      name: "samsung"
    },

    {
      id: Math.random(),
      name: "xiaomi"
    }
  ]
  function reducer(state, action) {

    switch (action.type) {
      case "create":
        if (action.payload) {
          return [
            ...state,
            {
              id: Math.random(),
              name: action.payload
            }
          ]

        } else {
          console.log("you need to fill data");
        }
        break;
      default:
        console.log("there is no such a type");
        break;

    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, cart)
  const [item, setItem] = useState('')

  function handleChangeItem(e) {
    setItem(e.target.value)
  }

  function handleClickItem() {
    dispatch({ type: "create", payload: item });
  }


  return (
    <>
      <ul>
        {state?.map((s) => {
          return <li key={s.id}>{s.name}</li>
        })}

        <input type="text" placeholder='enter your text' onChange={handleChangeItem} value={item} />
        <button onClick={handleClickItem}>create</button>
      </ul>
    </>
  )
}

export default App
