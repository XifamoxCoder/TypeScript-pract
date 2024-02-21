"use strict";
const serverConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    date: new Date(),
    log: (msg) => console.log(msg)
};
const port3000 = 3000;
const port3001 = 3001;
const startServer = (protocol, port, log) => {
    log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
const styles = {
    position: 'absolute',
    top: '20px',
    left: '50px',
};
// type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in'
// type AnimationID = string | number
// function createAnimation(
//   id: AnimationID,
//   animName: string,
//   timingFunc: AnimationTimingFunc = 'ease',
//   duration: number,
//   iterCount: "infinite" | number
// ): void {
//   // const elem = document.querySelector(`#${id}`) as HTMLElement
//   // if (elem) {
//     console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
//     // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`
//   // }
// }
// createAnimation('id', 'fade', undefined, 13, 13)
