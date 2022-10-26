import React, { useState} from 'react';

const express = require("express");
const app = express();

export default function MyPage(){
    
    const StartupCommand = "cd .. && cd minecraft-server && java -Xmx1024M -Xms1024M -jar server.jar nogui";
    const {spawn} = require('node:child_process');
    let child = null;
    function ToggleServer(){
        if(child == null){ //Turn server on
            child = spawn(StartupCommand,{cwd:__dirname});
            return
        }
        //Turn server off
        child.kill();
        child = null;
    }

    const util = require('minecraft-server-util');
    

    // The port and options arguments are optional, the
    // port will default to 25565 and the options will
    // use the default options.
    const [serverStatus, setServerStatus] = useState(null)
    return <div>
    <button onClick={()=> ToggleServer()}> Toggle the Server </button>
    <button onClick={()=> {
        const x = fetch("/api/backend_functions").then((res)=>res.json());
        setServerStatus(x)
        }
        }> Refresh Server Status</button>
    <p> {serverStatus} </p>
  </div>
  }