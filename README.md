# Responding Websockets

This library provides a websocket interface that waits for the server to respond every time you send a message.  
The response message can be retrieved through a standard promise.  
Messages are always sent in the order in which you queue them.  
Due to the nature of promises, the interface is ansynchronous.  
A new message is only sent once the server responded with an answer.

## Example  
Sends a message containing the string "WS" and prints the response to the console.  

```
const WS_URI = `ws://${location.host}/d/ws/issue`
const socket = new RespondingSocket(WS_URI)

socket.queueMessage('WS').then( res => {
    console.log(res.data)
})
```

##Example webpage
1. Flash into ESP8266.
2. Use pc or smartphone to access ESP8266 access point/wifi
3. Go to 192.168.4.1
4. Click on button
5. Profit ???

### Disclaimer
Using websockets this way should generally be considered bad practice, so I do not recommend using this library.
