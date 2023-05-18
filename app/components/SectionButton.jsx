import React from 'react'

const getCategory = (id) => {
  switch (id) {
    case 1:
      return 'Placa de Video'
    case 2:
      return 'Motherboard'
    case 3:
      return 'Microprocesador'
    default:
      return 'Categoría desconocida'
  }
}

const SectionButton = ({ section, handleSection, selectedSection }) => (
  <button
    onClick={() => handleSection(section.id)}
    className={`flex w-52 text-gray-800 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer ${
      selectedSection === section.id ? 'bg-gray-300' : 'bg-gray-200'
    }`}
  >
    <p>{getCategory(section.id)}</p>
  </button>
)

export default React.memo(SectionButton)
