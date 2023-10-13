import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container mx-auto'>
      <h1 className='text-3xl underline'>Vite + React</h1>
      <div className="card">
        <button className='transition-colors bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2 ' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
    </>
  )
}

export default App
