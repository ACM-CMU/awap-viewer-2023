import React, {useState} from 'react';
import './SidePanel.css';
import LineChart from './LineChart.js';

export default function SidePanel(props) {

  const showFile = async (event) => {
    // object.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const replay_text = e.target.result
      try {
          var replay_object = JSON.parse(props.replayData)
      }
      catch(err) {
          console.log(err.message)
      }
      props.parentCallback(replay_object)
      alert(replay_text)
    };
    reader.readAsText(event.target.files[0])
  }

  return (
      <div className="side-panel">
          <h1>
            <font face="Impact" size="5">AWAP 2023 Viewer</font><br />
          </h1>
          <input type="file" onChange={showFile} />
          <h1>
            <LineChart />
          </h1>
      </div>
  )
}