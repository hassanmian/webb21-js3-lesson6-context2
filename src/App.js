import React, {createContext, useState, useEffect} from "react"
import { Route, Routes, Link } from "react-router-dom"
import NewsDetailPage from "./pages/NewsDetailPage"
import NewsListPage from "./pages/NewsListPage"
import StartPage from "./pages/StartPage"

const NameContext = createContext({})

function App() {
  const [name, setName] = useState("Pelle")
  const [newsList, setNewsList] = useState(null)

  useEffect(() => {
    const url = "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/news.json"
    fetch(url)
    .then(res => res.json())
    .then(data => setNewsList(data))
  }, [])
  
  return (
    <NameContext.Provider value={{name, setName, newsList, setNewsList}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            Hej, {name}
            <Link to="/">Start Page</Link>
            <Link to="/news">News Page</Link>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<StartPage />}/>
              <Route path="/news" element={<NewsListPage />} />
              <Route path="/news/:id" element={<NewsDetailPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </NameContext.Provider>
  );
}
export {NameContext}
export default App;
