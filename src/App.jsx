import memory from '/src/assets/images/icon-memory.svg'
import reaction from '/src/assets/images/icon-reaction.svg'
import verbal from '/src/assets/images/icon-verbal.svg'
import visual from '/src/assets/images/icon-visual.svg'
import './App.css'

function App() {


  return (
    <>
      <div className='myCard drop-shadow-2xl flex items-center justify-center min-h-screen'>
        <div className='graphics flex flex-col items-center bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-white'>
          <h2 className='leftTitle py-5 text-xl'>Your Result</h2>
          <div className='circle'>
            <p className='result text-5xl'>76</p>
            <p className='of'>of 100</p>
          </div>
          <p className='grade text-2xl'>Great</p>
          <p className='description'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='summaryDiv'>
          <h2 className='sumarry'>Summary</h2>
          <div className='tabel'>
            <div className='reactionDiv'>
              <div className='reactionLeft'>
              <img src={reaction} alt="Reaction Icon" />
              <p className='reactionText'>Reaction</p>
              </div>
              <p className='reactionGrade'><strong>80</strong> / 100</p>
            </div>
            <div className='memoryDiv'>
              <div className='memoryLeft'>
              <img src={memory} alt="Memory Icon" />
              <p className='memoryText'>Memory</p>
              </div>
              <p className='memoryGrade'><strong>92</strong> / 100</p>
            </div>
            <div className='verbalDiv'>
              <div className='verbalLeft'>
              <img src={verbal} alt="Verbal Icon" />
              <p className='verbalText'>Verbal</p>
              </div>
              <p className='verbalGrade'><strong>61</strong> / 100</p>
            </div>
            <div className='visualDiv'>
              <div className='visualLeft'>
              <img src={visual} alt="Visual Icon" />
              <p className='visualText'>Visual</p>
              </div>
              <p className='visualGrade'><strong>72</strong> / 100</p>
            </div>            
          </div>
          <button className='button'>Continue</button>
        </div>
        
      </div>
      
    </>
  )
}

export default App
