import { status } from "minecraft-server-util"

function getServerStatus(){
    const util = require("minecraft-server-util");
    const options = {
        timeout: 1000 * 1, // timeout in milliseconds
        enableSRV: true // SRV record lookup
    };
    return util.status('localhost', 25565, options)
        .then((result) => ServerStatus = result)
        .catch((error) => ServerStatus = error);
}

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }