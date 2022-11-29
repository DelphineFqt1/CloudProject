/**
 * Mandatory Hello World function.
 * @returns A string which contains "Hello world!"
 */
//export const helloWorld = (): string => {
//  return 'Hello world!';
//};

import http from 'http';
import si from 'systeminformation';
import {ISystemInformation} from './ISystemInformation';
import {server} from './server'

export async function callback() {
  let sys:ISystemInformation={
    cpu:undefined,
    system:undefined,
    mem:undefined,
    os:undefined,
    currentLoad:undefined,
    processes:undefined,
    diskLayout:[],
    networkInterfaces:[]
  }
  try {
    sys.cpu = await si.cpu();
    sys.system = await si.system();
    sys.mem = await si.mem();
    sys.os = await si.osInfo();
    sys.currentLoad = await si.currentLoad();
    sys.processes = await si.processes();
    sys.diskLayout = await si.diskLayout();
    sys.networkInterfaces = await si.networkInterfaces();
  }
  catch(error) { 
    console.error(error)
  }
  finally{
    return JSON.stringify(sys, null, 4);
  }
}

//Création du server : il écoute sur le port 8000
const monServer = server();
monServer.listen(8000);
//monServer.close();