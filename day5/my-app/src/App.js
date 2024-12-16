import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import { useState, useEffect } from 'react';
import Post from './Post';

function App() {

  const [name, setName] = useState("");
  const [posts, setPosts] = useState(null);

  function handleChange(e){
    setName(e.target.value);
  }

  useEffect(() => {
    const posts = [
      {
        post: "post1",
        comments: [
          {
            comment: "looks good"
          }, 
          {
            comment: "i hate it"
          },
          {
            comment: "straight to jail"
          }, 
          {
            comment: "beep boop"
          }
        ]
      },
      {
        post: "post2",
        comments: [
          {
            comment: "ererwer"
          }, 
          {
            comment: "asdfasdf"
          },
          {
            comment: "swerwer"
          }, 
          {
            comment: "beep boop"
          }
        ]
      },
      {
        post: "post3",
        comments: [
          {
            comment: "l343245od"
          }, 
          {
            comment: "i ha13245123it"
          },
          {
            comment: "s234236 to jail"
          }, 
          {
            comment: "be4545op"
          }
        ]
      },
      {
        post: "post4",
        comments: [
          {
            comment: "lo23423"
          }, 
          {
            comment: "asdfasdfasd it"
          },
          {
            comment: "straight sdfghsdfhjail"
          }, 
          {
            comment: "beep boop"
          }
        ]
      }
    ]
    setPosts(posts);
  },[])

  console.log(posts)

  const mylist = [
    "a",
    "b",
    "c"
  ]

  return (
    <div className="App">
      <header className="App-header">
        {mylist.map(l => <li>{l}</li>)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello secret={"SECRET"}/>
        <h1>{name}</h1>
        <input type='text' onChange={handleChange}/>


        {posts?.map(p => <Post post={p}/>)}



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
