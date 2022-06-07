
import './App.css';


function App() {
  const MobileOp = ['Android', 'Blackberry', 'iPhone', 'Window Phone'];
  const MobileManufac = [
    { name: "Samsung", style: "square" },
    { name: "HTC", style: "square" },
    { name: "Micromax", style: "circle" },
    {name: "Apple", style: "disc"}
  ]
  return (
    <div className="App">
      <div>
         <h1>Mobile Operating System</h1>
      {MobileOp.map((e) => {
        return <System  opSystem={ e } /> // {key:value}
      })}
        
        <div>
          <h1>Mobile Manfacturers</h1>
          {MobileManufac.map((e) => {
            return <li className={e.style} > {e.name} </li>
          })}
   </div>

     </div>
    </div>
  );
}
// componenents
function System(parameter) {
   return <li>{parameter.opSystem}</li>
 }

export default App;
