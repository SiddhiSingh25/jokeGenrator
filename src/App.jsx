import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
   let url = `https://official-joke-api.appspot.com/random_joke`
  let [joke, setJoke] = useState({});
  useEffect(()=>{ 
    async function firstJoke() {
      let response = await fetch(url);
      let data = await response.json();
      setJoke({setup : data.setup, punchline : data.punchline });
    }
    firstJoke()
  },[])
  async function Genrate(params) {
    let response = await fetch(url);
    let data =  await response.json();
    console.log(data.setup);
    console.log(data.punchline)
    setJoke({setup : data.setup, punchline : data.punchline });
  }
  
  return (
    <>
    <div className='w-[40vw] h-[60vh] flex items-center justify-between rounded px-4 py-20 flex-col bg-yellow-500'>
    <h1 className='text-6xl pb-3 font-bold'>Random Joke</h1>
      <h4 className='text-2xl'>{joke.setup}</h4>
      <h4 className='text-2xl'>{joke.punchline}</h4>
      <button onClick={Genrate}>Click me</button>
    </div>
    </>
  )
}

export default App
