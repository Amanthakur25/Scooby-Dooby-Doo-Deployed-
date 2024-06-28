import React from 'react'

const BenefitComp = () => {
  return (
    <div>
     <div className="benefits mt-12 mb-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Why Choose Dog-Friendly Accommodations</h2>
                <div className="flex max-md:flex-col flex-wrap justify-around max-md:justify-center max-md:items-center">
                    <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-1/2 md:w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/dog.png" alt="Dog-Friendly" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Dog-Friendly</h3>
                        <p>Enjoy a comfortable stay with your dogs without any restrictions.</p>
                    </div>
                    <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-1/2 md:w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Comfort" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Comfort</h3>
                        <p>Experience top-notch amenities designed for both you and your dogs.</p>
                    </div>
                    <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-1/2 md:w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/park-bench.png" alt="Convenience" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Convenience</h3>
                        <p>Located near parks and dog-friendly attractions for a delightful stay.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BenefitComp
