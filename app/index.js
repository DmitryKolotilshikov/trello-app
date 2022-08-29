import { Desks } from './Desks.js';
import { DesksLogic } from './DesksLogic.js';
import { clock } from './utils/clock.util.js';


clock();
setInterval(clock, 1000);

new Desks(1).initialRender();

// const user = {
//     avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/594.jpg',
//     name: 'Alex',
//     desks: {
//       create: [
//         {
//           id: 3,
//           title: 'Typescript',
//           desc: 'Learn Typescript',
//           date: ''
//         },
//         {
//           id: 4,
//           title: 'EventLoop',
//           desc: 'Learn EventLoop',
//           date: ''
//         }
//       ],
//       progress: [
//         {
//           id: 2,
//           title: 'SOLID +',
//           desc: 'Learn SOLID',
//           date: ''
//         }
//       ],
//       done: [
//         {
//           id: 0,
//           title: 'HTML, CSS +',
//           desc: 'Learn HTML, CSS',
//           date: ''
//         }
//       ]
//     }
// }

// API.getUsers()
