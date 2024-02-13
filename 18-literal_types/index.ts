type protocolReq = 'http' | 'https'
type portReq = 3000 | 3001
// type Config = {protocol: protocolReq, port: portReq}
interface IConfig {
  protocol: protocolReq,
  port: portReq
  log: (msg: string) => void
}

// type Role = {
  //   role: string
// }
// type ConfigWithRole = Config & Role

interface IRole {
  role: string
}

interface IConfig {
  date: Date
}

interface IConfigWithRole extends IConfig, IRole {}

const serverConfig: IConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  date: new Date(),
  log: (msg: string): void => console.log(msg)
  
}

// const backupConfig: ConfigWithRole = {
//   protocol: 'http',
//   port: 3000,
//   role: 'sys-admin'
// }

type StartFunction = (
  protocol: protocolReq,
  port: portReq,
  log: (msg: string) => void) => string

const port3000: number = 3000
const port3001: number = 3001

const startServer: StartFunction = (
  protocol: protocolReq,
  port: portReq,
  log: (msg: string) => void
): 'Server started' => {
  log(`Server started on ${protocol}://server:${port}`);
  
  return 'Server started'
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log)

interface Styles {
  [key: string]: string
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px',
}

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