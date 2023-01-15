import { useEffect, useState } from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
    <District name='Khulna' speciality='Shundorbon'></District>
    <District></District>
    <District></District>
    </div>
  );
}

function LoadPosts(){
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>Posts : {posts.length}</h1>
      {
        posts.map(post => <p>{post.title}</p>)
      }
    </div>
  )
}

const districtStyle={
  border : '2px solid black',
  borderRadius : '100px', 
  backgroundColor : 'lightyellow',
  margin : '20px',
  padding : '20px'
}
const districtStyle1={
  border : '2px solid black',
  borderRadius : '100px', 
  backgroundColor : 'yellow',
  margin : '20px',
  padding : '20px'
}
function District(props){
  const [power,setPower] = useState(1)
  const increasePower = () => setPower(power * 5);
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Speciality: {props.speciality}</p>
      <h4>Power: {power} </h4>
      <button style={districtStyle1} onClick={increasePower}>Boost</button>
    </div>
  )
}

export default App;
