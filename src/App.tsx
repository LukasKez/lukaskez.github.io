import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ShareModal } from '@/components/share-modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto space-y-6'>
        <h1 className='text-3xl underline'>Vite + React</h1>
        <Card>
          <CardContent className="pt-4 flex flex-wrap place-content-center gap-3">
            <Button onClick={() => setCount((count) => count + 1)}>
              Count: {count}
            </Button>

            <ShareModal />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default App
