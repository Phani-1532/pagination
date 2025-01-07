import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([])

  const [perPage, setPerPage]  = useState([]) // this is using for setting limit to pages how to many pages it will show using slice

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {setData(res.data); setPerPage(res.data.slice(0,10))})
  })

  const pageHandler =  (pageNumber) => {
    setPerPage(data.slice((pageNumber*10) - 10, pageNumber*10))
  }

  return (
    <div className="App">
      {data.length >= 1 ? <div>
        {perPage.map(post =><div className='post' key={post.id}> {post.title}</div>)} <br></br>
        <Pagination data={data} pageHandler = {pageHandler} />
      </div> : <h1>Data not yet Loaded</h1>}
    </div>
  );
}

export default App;
