import logo from './logo.svg';
import './App.css';

function App() {
  const service=[
    {name:"Service" , link:"https://reactjs.org/docs/getting-started.html"},
    {name:"Projects", link:"https://reactjs.org/community/support.html"},
    {name:"About", link:"https://reactjs.org/"}]
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
         <div className="disflex">{service.map((e)=>{
          return <Service service={e.name} link={e.link}/>
        })}</div>
        <button>Contact</button>
      </div>
    );
  }
  
  function Service(pros1){
    return <a className='test' href={pros1.link}>{pros1.service}</a>
  }
 
export default App;


