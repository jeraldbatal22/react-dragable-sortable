import React from 'react'

const Card = ({status, item, setitems}) => {

  const handleDisable = () => {
    setitems(({items}) => ({
      items: items.map(res => (res.id === item.id ? {...res, status: true} : res )),
    }));
  }

  return (
    <div className={`card text-left  ${status && 'text-gray-500 bg-gray-300 cursor-not-allowed ' }`} disabled={status}  >
    <svg xmlns="http://www.w3.org/2000/svg" className="left cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>

    <div className={`center ${!status && 'active:text-red-500 cursor-pointer hover:text-blue-500'} `} onClick={handleDisable}>
    
      <div className="bg-gray-200 p-2 rounded-full mr-2.5" >
        <svg xmlns="http://www.w3.org/2000/svg"  className="svg text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      </div>

      <div>
        <h1 className={`font-bold`} >Bluetooth {item.id}</h1>
        <p className={` text-sm font-semibold`}>com.bluefletch.ems.bluetooth</p>
      </div>
      {/* text-gray-500 */}
    </div>

    <div className="right">
      <button className="rightContent mr-2.5 hover:bg-blue-300 focus:bg-gray-400 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg cursor-pointer "viewBox="0 0 20 20" fill="currentColor">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>

      <button className="rightContent mr-3.5 hover:bg-blue-300 focus:bg-gray-400 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>

  </div>
  )
}

export default Card
