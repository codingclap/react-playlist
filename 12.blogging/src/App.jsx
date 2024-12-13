import { Client } from 'appwrite';
 

function App() {
   

  return (
    <>
        <h1>Blog App with Appwrite</h1>
        { console.log(import.meta.env.VITE_APPWRITE_URL) }
    </>
  )
}

export default App
