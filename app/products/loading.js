export default function Loading() {
  return (
    <div className='h-full min-h-screen m-0 pt-40 flex flex-col items-center select-none bg-slate-100'>
      <h2 className='text-black text-4xl text-center font-bold'>
        NUESTROS PRODUCTOS
      </h2>

      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 items-center justify-around mb-5 md:flex-wrap'>
        <button className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'>
          <p className='p-3' />
        </button>
        <button className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'>
          <p className='p-3' />
        </button>
        <button className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'>
          <p className='p-3' />
        </button>
        <button className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'>
          <p className='p-3' />
        </button>
      </div>
    </div>
  )
}
