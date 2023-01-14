import './App.css';



function App() {
  return (
    <div className="App">
    <District name='Khulna' speciality='Shundorbon'></District>
    <District></District>
    <District></District>
    </div>
  );
}
const districtStyle={
  border : '2px solid black',
  borderRadius : '100px', 
  backgroundColor : 'yellow',
  margin : '20px',
  padding : '20px'
}
function District(props){
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Speciality: {props.speciality}</p>
    </div>
  )
}


export default App;
