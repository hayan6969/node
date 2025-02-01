import React from 'react'


const blocksData = [
    {
        title : "Fundemental exercise",
        context : "Establishing the legal, organizational, and technical framework to ensure a stable and scalable platform foundation. This includes creating a strong brand identity and crafting a strategic roadmap that aligns innovation with long-term sustainability",
    },
    {
        title : "Fundemental exercise",
        context : "Establishing the legal, organizational, and technical framework to ensure a stable and scalable platform foundation. This includes creating a strong brand identity and crafting a strategic roadmap that aligns innovation with long-term sustainability",
    },
    {
        title : "Fundemental exercise",
        context : "Establishing the legal, organizational, and technical framework to ensure a stable and scalable platform foundation. This includes creating a strong brand identity and crafting a strategic roadmap that aligns innovation with long-term sustainability",
    },
    {
        title : "Fundemental exercise",
        context : "Establishing the legal, organizational, and technical framework to ensure a stable and scalable platform foundation. This includes creating a strong brand identity and crafting a strategic roadmap that aligns innovation with long-term sustainability",
    },
    {
        title : "Fundemental exercise",
        context : "Establishing the legal, organizational, and technical framework to ensure a stable and scalable platform foundation. This includes creating a strong brand identity and crafting a strategic roadmap that aligns innovation with long-term sustainability",
    },
]
function Blocks() {
  return (
    <div>
  {blocksData.map((e, index) => (
    <div
      key={index}
      className={`flex items-center justify-between p-10 relative  
        ${index % 2 === 0 ? 'bg-gray-900 text-white ' : 'bg-gray-800 text-white'} 
        ${index % 2 === 0 ? 'rounded-l-[20%] pl-[8%]' : 'rounded-r-[20%] pr-[8%]'}
        ${index%2==0  ? 'flex-row ' : 'flex-row-reverse'}`}
      style={{
        clipPath: index % 2 === 0 
          ? 'polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)' 
          : 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
        border: '2px solid orange',
      }}
    >
      {/* Text Section */}
      <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'} max-w-[60%]`}>
        <h1 className="heading font-bold text-2xl">{e.title}</h1>
        <p className="para mt-4 text-lg">{e.context}</p>
      </div>

      {/* Number Section */}
      <div className="w-[30%] flex justify-center items-center">
        <h1 className="text-[8vw] text-orange-500 font-extrabold">{index + 1}</h1>
      </div>
    </div>
  ))}
</div>

  )
}

export default Blocks