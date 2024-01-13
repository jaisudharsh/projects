import React from 'react'

const Online = () => {
  return (
    <section className='online w-[1050px] mx-auto flex items-center mt-[120px] justify-between'>
        <div className='w-2/5 flex flex-col'>
            <h2 className='text-4xl font-bold'>BHARATH MOBILE BANKING</h2>
            <p className='text-lg font-light my-9'>Benefit from our financial services everywhere
Please use Bank of Bharath Mobile!</p>
            <div className="scan-container flex items-center">
                <img className='w-2/5' src={require('../assets/images/online_section/qr_mobile.jpg')} alt="qr_mobile" />
                <p className='text-base ml-6 w-3/5'>With your phone's camera
Scan the QR code</p>
            </div>
        </div>
        <div className='w-1/2 h-full'>
            <img className='' src={require('../assets/images/online_section/mobile.png')} alt="qr_mobile" />
        </div>
    </section>
  )
}

export default Online