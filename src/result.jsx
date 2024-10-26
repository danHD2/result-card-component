function Result() {
    return (
        <div className='graphics p-12 rounded-b-3xl sm:rounded-3xl flex flex-col items-center bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-white'>
        <h2 className='leftTitle pb-8 text-xl text-lightLavender'>Your Result</h2>
        <div className='circle flex flex-col items-center rounded-full bg-gradient-to-b from-violetBlue to-persianBlue px-12 py-10'>
          <p className='result text-7xl font-bold'>76</p>
          <p className='of text-lightLavender'>of 100</p>
        </div>
        <p className='grade text-2xl py-2'>Great</p>
        <p className='description w-56 text-center text-lightLavender'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    )
}

export default Result