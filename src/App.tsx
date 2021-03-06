
import * as React from 'react'

import NavBar from './components/NavBar';
import Title from './components/Title';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';


import './App.css';
import JoinUs from './components/JoinUs';
import Sponsors from './components/Sponsors';
import Connections from './components/Connections';
import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE, CONNECTIONS_ROUTE } from './constants/AppRouterConstants';

import {
  isBrowser, BrowserView
} from "react-device-detect";

var AppIntroClass = isBrowser ? "App-intro-desktop" : "App-intro";
var AppIntroTitleClass = isBrowser ? "App-intro-desktop-title" : "App-intro-title";
var SpeakerClass = isBrowser ? "speakers-desktop" : "speakers";
var JointusClass = isBrowser ? "join-us-desktop" : "join-us";
var AppIntroBg = isBrowser ? "" : "background-color-phone" ;
var AppIntroBgOpacity = isBrowser ? "" : "background-opacity-phone";
var SponsorsStyle = isBrowser ? "sponsors" : "sponsors-phone";

 export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <div className={AppIntroClass}>
        <div className={AppIntroTitleClass}>
          <BrowserView>
            {/*<div className="background-color" />
            <div className="background-opacity" /> */}
          </BrowserView>            
          <div className={AppIntroBg} />
          <div className={AppIntroBgOpacity} />
          <NavBar />
          <Title />      
        </div>
      </div>

      <div className="Keynotes" id={KEYNOTE_ROUTE}>
        <Keynotes />
      </div>
      <div className={SpeakerClass} id={SPEAKERS_ROUTE}>
        <BrowserView><div className="background-opacity" /></BrowserView>
        <Speakers />
      </div>

      <div className="agenda" id={AGENDA_ROUTE}>
        <Agenda />
      </div>
      <div className={JointusClass}>
        <BrowserView><div className="background-opacity" /></BrowserView>
        <JoinUs />
      </div>
      <div className={SponsorsStyle}>
        <Sponsors />
      </div>
      <div className="connections" id={CONNECTIONS_ROUTE}>
        <Connections />
      </div>
    </div>
  );
}

export default App;