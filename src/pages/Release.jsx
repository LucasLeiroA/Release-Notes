// pages/Release.js
import React from 'react';
import Header from '../components/Header/Header';
import ContentSection from '../components/ReleaseNotesSection/ReleaseNotesSection';
import './Release.css';
import RedesignedNotifications from '../components/RedesignedNotifications/RedesignedNotifications';
import { SelectedNoteProvider } from '../context/SelectedNoteContext';
import Tittle from '../components/Tittle/Tittle';
import Bugs from '../components/Bugs/Bugs';
import RedesignedTimeTracking from '../components/RedesignedTimeTracking/RedesignedTimeTracking';

function Release() {
  return (
    <SelectedNoteProvider>
      <div className="release-layout">
        <Header />
        <div className="container">
          <div className="main-content">
            <Tittle/>
            <RedesignedNotifications />
            <Bugs/>
            <RedesignedTimeTracking/>
            {/* Agrega más secciones aquí según sea necesario */}
          </div>
          <div className='sidebar'>
            <ContentSection />
           </div>
        </div>
      </div>
    </SelectedNoteProvider>
  );
}

export default Release;
