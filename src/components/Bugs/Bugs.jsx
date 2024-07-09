import React from 'react'
import { useSelectedNote } from '../../context/SelectedNoteContext';
import './Bugs.css'

function Bugs() {
    const { selectedNote } = useSelectedNote();
  return (
    <div className='bug-container pb-10'>
       {selectedNote && (
        <div>
          <div className="notification-content">
            <div className="notification-line"></div> 
            <div className='ml-10'>
            <h1 className='tittle-resignated'>Bugs</h1>
            <ul className='flex flex-row mt-3'>
              <li className='fix'>fix</li>
              <li className='date-feat flex items-center ml-5'>{selectedNote.releaseDate}</li>
            </ul>
            <p className='text-resignated'>In our continuous effort to make Hirefy the most reliable recruiting platform, we eliminate bugs in the platform! 🚫
            Here's a summary of some of the major fixes:
            </p>
            <ul className='list-disc ml-5 mt-5'>
                {selectedNote.sections.find(section => section.title === 'Bugs').knownIssues.map((bug, index) => (
                  <li className='lista mt-4' key={index}>{bug}</li>
                ))}
              </ul>
          
            </div>
    
          </div>
        </div>
      )}
    </div>
  )
}

export default Bugs