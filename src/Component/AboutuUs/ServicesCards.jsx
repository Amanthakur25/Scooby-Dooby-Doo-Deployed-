import React from 'react'

function ServicesCards() {
    const arr = [
        {
            name:"Doogy Day Care Service",
            img:"https://i.pinimg.com/564x/7c/db/dc/7cdbdcc032c88c2fbf8d32d51c8d9352.jpg"
        },
        {
            name:"Boarding",
            img:"https://i.pinimg.com/564x/7c/db/dc/7cdbdcc032c88c2fbf8d32d51c8d9352.jpg"
        },
        {
            name:"Dog Walk",
            img:"https://i.pinimg.com/564x/7c/db/dc/7cdbdcc032c88c2fbf8d32d51c8d9352.jpg"
        },
        {
            name:"Dog pickup/Drop within City",
            img:"https://i.pinimg.com/564x/7c/db/dc/7cdbdcc032c88c2fbf8d32d51c8d9352.jpg"
        },

    ]
  return (
    <div className=' flex flex-col justify-center items-center pt-20 bg-white'>

        <div className=' py-[20px]'>
            <span className=" text-[50px] text-[#e87200] font-gochi-hand ">What We Offer</span>
        </div>
        <div className=' grid grid-cols-2 gap-y-10 gap-x-10 '>
        {arr.map((item, index) => (
            <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#ffb380] via-[#e87200] to-[#b55a00] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  
  <div className=" w-40 h-40 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
    <img src={item.img} alt={item.name} className=' object-cover rounded-full w-full h-full' />
  </div>
  <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span className="text-2xl font-semibold w-1/2">{item.name}</span>
    
  </div>
  <a className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Folow</a>
</div>
        ))}

</div>
      
    </div>
  )
}

export default ServicesCards
