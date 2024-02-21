"use strict";
const serverNewConfig = {
    protocol: 'https',
    port: 3001,
};
const backupNewConfig = {
    protocol: 'http',
    port: 3000
};
const startNewServer = (config) => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
    return 'Server started';
};
startNewServer(serverNewConfig);
startNewServer(backupNewConfig);
