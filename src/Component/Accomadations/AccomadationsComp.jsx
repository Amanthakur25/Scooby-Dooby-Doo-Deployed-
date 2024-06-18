import React from 'react'

const AccomadationsComp = () => {
  return (
    <div>
     <div className="accommodation-details mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Accommodation Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="details-card bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-orange-600">Amenities</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Spacious rooms
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Pet-friendly facilities
                            </li>
                            
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Complimentary breakfast
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                On-site parking
                            </li>
                        </ul>
                    </div>
                    <div className="details-card bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-orange-600">Location</h3>
                        <p className="text-gray-700">Conveniently located in the heart of the city with easy access to parks and pet-friendly attractions.</p>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold mb-2 text-orange-600">Nearby Attractions</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>Central Park</li>
                                <li>Dog-friendly cafes</li>
                                <li>Local dog parks</li>
                                <li>Pet supply stores</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

      
    </div>
  )
}

export default AccomadationsComp
