import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import { useEffect, useState } from "react"
import axios from "axios"
import type { Contents } from "./interface/Contents"

function App() {
  const [contents, setContents] = useState<Contents | undefined>()
  useEffect(()=>{
    const fetchSocialMediaContents = async () => {
      const response = await axios.get('https://dummyjson.com/posts')
      setContents(await response.data)
    } 

    fetchSocialMediaContents()
  },[])

  return (
    <Routes>
      <Route element={<Home
        contents={contents}
      />} path="/"/>
    </Routes>
  )
}

export default App
