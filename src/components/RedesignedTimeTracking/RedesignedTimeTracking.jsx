import React from 'react'
import { useSelectedNote } from '../../context/SelectedNoteContext';
import RedesigedImage from '../../assets/images/image 10.png';
import './RedesignedTimeTracking.css'

function RedesignedTimeTracking() {
    const { selectedNote } = useSelectedNote();

  return (
    <div className="resigned-container pb-10">
    {selectedNote && (
      <div>
        <div className="notification-content">
          <div className="notification-line"></div> 
          <div className='ml-10'>
          <h1 className='tittle-Redesigned'>Redesigned Time Tracking</h1>
          <ul className='flex flex-row mt-3'>
            <li className='feat'>feat</li>
            <li className='date-feat flex items-center ml-5'>{selectedNote.releaseDate}</li>
          </ul>
          <p className='text-resignated'>With the revamped Time Tracking interface, you get a streamlined design for easier, efficient time tracking. Track time directly from the menu bar and have admins record time for other users, ensuring total time-tracking control.</p>
          <img className='imageNotification' src={RedesigedImage} alt="" />
          </div>
  
        </div>
      </div>
    )}
  </div>
  )
}

export default RedesignedTimeTracking