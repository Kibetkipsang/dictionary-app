
import React, { useState } from 'react'
import { Button } from './components/ui/button';
import { Input } from "@/components/ui/input"
import useDictionaryQuery from './UseDictionary';
import { Spinner } from './components/ui/spinner';


interface Word{
  word: string
}

function App() {
  const [word, setWord] = useState("")
 
  const {data, isLoading, isError, refetch} = useDictionaryQuery(word);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setWord(e.target.value)
  }

  function handleSearch(e: React.FormEvent){
    e.preventDefault();
    refetch();
  }

  return (
    <>
      <div className='bg-green-500 text-white min-h-screen p-3'>
        <div className='flex flex-col items-center border border-white m-4 mt-5 p-7'>
          <h1 className='text-3xl font-bold'>Welcome To The Dictionary</h1>
          <p className='text-2xl '>One stop word definer!</p>
        </div>
        <div className='w-1/2 mx-auto '>
          <form className='flex flex-row gap-5' onSubmit={handleSearch}>
            <Input
            type='text'
            placeholder='type a word you want to search..'
            onChange={handleChange}
            value={word}
            className='bg-gray-100 text-gray-900'
            />
            <Button className='bg-orange-500 hover:bg-orange-700' type='submit' disabled={isLoading}>
              <div className='flex align-center gap-2 justify-center'>
                {isLoading && <Spinner/>}
                {isLoading ? <p>Searching...</p> : <p>Search</p>}
              </div>
            </Button>
          </form>
         <div>
           <div className='m-4 p-2  font-bold '>
            {isLoading && <p>Loading Please Wait...</p>}
            {isError && <p className='m-4 p-2 text-red-500 font-bold bg-white rounded-md'>Cannot find results of your search. Please try finding another word.</p>} 
           </div>
          <div>
            {data && (
            <div className="mt-5 bg-blue-700 text-white p-4 rounded">
              <h3 className="text-2xl font-bold">{data[0].word.charAt(0).toUpperCase() + data[0].word.slice(1)}</h3>
              <p>Pronounciation: {data[0].phonetic}</p>

              <div className='bg-orange-500 rounded p-4 m-2'>
                <p className="mt-2 text-white">
               <span className='font-bold'>Definition:</span> {data[0].meanings[0].definitions[0].definition}
              </p>
              <div className='bg-orange-600 p-2 rounded m-2'>
                <p className="mt-2 text-white">
               <span className='font-bold'>Example:</span> {data[0].meanings[0].definitions[0].example || `Example for the word ( ${word} ) is not provided.`}
              </p>
              </div>
              </div>
            </div>
          )}
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default App;
