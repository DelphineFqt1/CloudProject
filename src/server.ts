import http from 'http';
import {callback} from './callback';

export function server() {
    const server = http.createServer(async (req, res) => {
      if(req.url === '/api/v1/sysinfo') {
        console.log (req.url)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let result = await callback();
        res.end(result); //end the response
      } else {
        res.end("Erreur 404");
      }
    });
    return server;
}