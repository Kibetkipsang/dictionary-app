import { useEffect, useState } from 'react'
import { Button } from './components/ui/button';
import { Input } from "@/components/ui/input"

interface Word{
  word: string
}

function App() {
  const [word, setWord] = useState("")
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setWord(e.target.value)
  }

  useEffect()
  return (
    <>
      <div className='bg-green-500 text-white min-h-screen p-3'>
        <div className='flex flex-col items-center border border-white m-4 mt-5 p-7'>
          <h1 className='text-3xl font-bold'>Welcome To The Dictionary</h1>
          <p className='text-2xl '>One stop word definer!</p>
        </div>
        <div className='w-1/2 mx-auto '>
          <form className='flex flex-row gap-5'>
            <Input
            type='text'
            placeholder='type a word you want to search..'
            onChange={handleChange}
            value={word}
            className='bg-gray-100 text-gray-900'
            />
            <Button className='bg-orange-500 hover:bg-orange-700'>Search</Button>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default App;
