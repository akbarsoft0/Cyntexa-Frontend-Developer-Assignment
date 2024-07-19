import React from 'react'

function Loader() {
  return (
    <section className="flex justify-center items-center h-[100vh]">
    <div className="relative flex items-center justify-center">
      <div className="w-28 h-28 border-4 border-slate-500 border-t-white rounded-full animate-spin"></div>
      <div className="absolute animate-bounce">
        <h1>Loading...</h1>
      </div>
    </div>
  </section>
  )
}

export default Loader