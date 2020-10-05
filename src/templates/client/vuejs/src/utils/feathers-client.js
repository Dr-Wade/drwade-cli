import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import auth from "@feathersjs/authentication-client";
import io from "socket.io-client";
import { iff, discard } from "feathers-hooks-common";
import keys from './keys';

var socketsUrl = keys.API_BASE_PATH || location.origin;

if (!socketsUrl.endsWith("/")) socketsUrl += "/";

console.log("Sockets URL:", socketsUrl);
const socket = io(socketsUrl, { transports: ["polling"] });
const feathersClient = feathers()
  .configure(
    socketio(socket, {
      timeout: 20000,
    })
  )
  .configure(auth({ storage: window.localStorage }))
  .hooks({
    before: {
      all: [
        iff(
          (context) => ["create", "update", "patch"].includes(context.method),
          discard("__id", "__isTemp")
        ),
      ],
    },
  });

export default feathersClient;