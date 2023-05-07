// import React, { useEffect, useState } from "react";


// const LogService = {
//   poll(callback) {  
//     // 절대경로
//     fetch("http://localhost:8080/Users/gimbeomsu/git/test/logs/log2.log")
//     .then(response => {
//       return response.text();
//     })
//     .then(data => {
//       const logs = data.split("\n").map(line => line.trim());
//       (function loop(i) {
//         const log = logs[i];
//         console.log(i);
//         if (log) {
//           callback(log);
//           setTimeout(() => {
//             loop(i + 1);
//           }, 100);
//         }
//       })(0);
//       });
//   }
// }; 
// export default LogService;
