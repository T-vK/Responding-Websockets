'use strict'

class RespondingSocket {
    constructor(wsUri=`ws://${location.host}`) {
        this.wsUri = wsUri
        this.eventStack = []
        this.currentMsgObj = {}
        this.ready = false
        
        this.setUpSocket()
    }
    setUpSocket() {
        this.ws = new WebSocket(this.wsUri)
        this.ws.onmessage = (evt) => {
            this.currentMsgObj.resolver(evt)
            this.sendNextMessage()
        }
        this.ws.onclose = () => {
            this.ready = false
            this.setUpSocket()
        }
        this.ws.onopen = () => {
            this.ready = true
            this.sendNextMessage()
        }
    }
    
    queueMessage(msg) {
        let promise = new Promise( (resolve,reject) => {
            this.eventStack.push({msg:msg,resolver:resolve})
        })
        if (this.currentMsgObj)
            this.sendNextMessage()
        return promise
    }
    sendNextMessage() {
        if (this.ready) {
            if (this.eventStack.length > 0) {
                this.currentMsgObj = this.eventStack.pop()
                this.ws.send(this.currentMsgObj.msg)
            } else
                this.currentMsgObj = {}
        }
    }
}

/*
//Example
const WS_URI = `ws://${location.host}/d/ws/issue`
const socket = new RespondingSocket(WS_URI)

//setInterval( () => {
    socket.queueMessage('WS').then( res => {
        console.log(res.data)
    })
//}, 3000)
*/
