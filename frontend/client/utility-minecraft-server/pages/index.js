import Head from 'next/head'
import Image from 'next/image'
import { useState, button } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [displayVar, setDisplayVar] = useState('Initial State');
  
  async function getServerStatus(){
    const res = await fetch("http://localhost:9000/umsControl/status");
    if(res.ok){
      const json = await res.json();
      return await json.umsStatus;
    } else setDisplayVar('Unable to get status');
  }

  async function serverToggle(){
    const res = await fetch("http://localhost:9000/umsControl/toggle");
    if(res.ok){
      const json = await res.json();
      setDisplayVar(json.umsStatus);
    } else setDisplayVar('Unable to toggle server');
  }

  return (
    < div className={styles.container}>
      <button onClick={serverToggle}>
        Toggle Server
      </button>
      <button onClick={getServerStatus}>
        Get Server Status
      </button>
      <p>
        {displayVar}
      </p>
    </div>
  )
}
 