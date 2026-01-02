const { ipcRenderer, contextBridge } = require('electron')
console.log('preload script')
contextBridge.exposeInMainWorld('cbm', {
    window: {
        minimize: () => ipcRenderer.send('window:minimize'),
        maximize: () => ipcRenderer.send('window:maximize'),
        close: () => ipcRenderer.send('window:close'),
        setZoom: (zoom) => ipcRenderer.send('window:setZoom', zoom),
    }
})