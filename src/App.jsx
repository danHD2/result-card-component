import Result from './result'
import Summary from './summary'
import data from '../data.json'
import './App.css'

function App() {


  return (
    <>
      <div className='myCard drop-shadow-2xl flex items-center justify-center min-h-screen font-HankenGrotesk'>
       <div className='flex flex-col w-full sm:w-auto sm:flex-row shadow-2xl shadow-cobaltBlueTwo rounded-3xl'>
       <Result />
        <Summary data={data}/>
       </div>
      
        
      </div>
      
    </>
  )
}

export default App
