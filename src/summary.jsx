import data from '../data.json'

const colors = ['lightRed', "orangeyYellow", "greenTeal", "cobaltBlue"];

function Summary() {
    return (
        <div className='summaryDiv p-12'>
          <h2 className='summary text-xl font-semibold'>Summary</h2>
          <div className='tabel'>
          {data.map((item, index) => (
            <div key={index} className={`p-2 flex rounded bg-lightRedTwo`}>
                <img className='pr-4' src={item.icon} alt="icon" />
                <p className={`text-${colors[index]}`} >{item.category}</p>
                <p>{item.score} / 100</p>
            </div>
          ))}
                  
          </div>
          <button className='button'>Continue</button>
        </div>
    )
}

export default Summary

