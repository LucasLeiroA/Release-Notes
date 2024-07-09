// components/RedesignedNotifications/RedesignedNotifications.js

import React from 'react';
import { useSelectedNote } from '../../context/SelectedNoteContext';
import './RedesignedNotifications.css';
import NotificationSettingImage from '../../assets/images/image 9.png';

function RedesignedNotifications() {
  const { selectedNote } = useSelectedNote();

  return (
    <div className="notification-container mb-10">
      {selectedNote && (
        <div>
          <div className="notification-content">
            <div className="notification-line"></div> 
            <div className='ml-10'>
            <h1 className='tittle-resignated'>Redesigned notifications</h1>
            <ul className='flex flex-row mt-3'>
              <li className='feat'>feat</li>
              <li className='date-feat flex items-center ml-5'>{selectedNote.releaseDate}</li>
            </ul>
            <p className='text-resignated'>Customizing your notification settings is now easier than ever. Quickly change your settings using presets like Focused or Mentions only, or tailor them to fit your needs.</p>
            <img className='imageNotification' src={NotificationSettingImage} alt="" />
            </div>
    
          </div>
        </div>
      )}
    </div>
  );
}

export default RedesignedNotifications;
