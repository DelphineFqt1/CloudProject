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

//Création du server : il écoute sur le port 8000
const monServer = server();
monServer.listen(8000);
//monServer.close();