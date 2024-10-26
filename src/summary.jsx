

const colors = ['text-lightRed', "text-orangeyYellow", "text-greenTeal", "text-cobaltBlue"];
const bgColors = ['bg-lightRedTwo', "bg-orangeyYellowTwo", "bg-greenTealTwo", "bg-cobaltBlueTwo"]

function Summary({ data }) {
    return (
        <div className='summaryDiv sm:w-80 h-full p-5 sm:p-12 flex flex-col'>
          <div>
          <h2 className='summary text-xl font-semibold pb-5'>Summary</h2>
          <div className='tabel'>
          {data.map((item, index) => (
            <div key={index} className={`p-2 flex my-4 justify-between rounded-lg ${bgColors[index]}`}>
              <div className='info flex'>
                <img className='pr-4' src={item.icon} alt="icon" />
                <p className={`${colors[index]}`} >{item.category}</p>
              </div>
              <div>
                <strong className='text-darkGrayBlue opacity-100'>{item.score}</strong><strong className='text-darkGrayBlue opacity-50'> / 100</strong>
              </div>
            </div>
          ))}                  
          </div>
          </div>
          <button className='button bg-darkGrayBlue text-white p-3 mt-5 w-full rounded-full hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue'>Continue</button>
        </div>
    )
}



export default Summary

