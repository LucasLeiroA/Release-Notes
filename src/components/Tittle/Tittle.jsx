import React from 'react'
import { useSelectedNote } from '../../context/SelectedNoteContext';
import './Tittle.css'

function Tittle() {

  const { selectedNote } = useSelectedNote();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {selectedNote && (
        <div className='flex flex-col sm:flex-row items-center justify-between mt-10'> 
          <h3 className='tittle-release text-center sm:text-left mb-4 sm:mb-0 sm:mr-4 lg:mr-6'>
            Release {selectedNote.version}
          </h3>
          <select name="" id="" className='select-tittle px-2 w-full sm:w-auto'>
            <option value="">All</option>
            <option value="">Feat</option>
            <option value="">Fix</option>
          </select>
        </div>
      )}
      <hr className='mt-2'/>
    </div>
  )
}

export default Tittle;
