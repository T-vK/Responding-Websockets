# Responding Websockets

This library provides a websocket interface that waits for the server to respond every time you send a message.  
The response message can be retrieved through a standard promise.  
Messages are always sent in the order in which you queue them.  
Due to the nature of promises, the interface is ansynchronous.  
A new message is only sent once the server responded with an answer.

## Usage  
Sends a message containing the string "e" and prints the response to the console.  

```
const WS_URI = `ws://${location.host}/d/ws/issue`
const socket = new RespondingSocket(WS_URI)

socket.queueMessage('e').then( res => {
    console.log(res.data)
})
```

## Example webpage
1. Flash espusb onto your ESP8266.
2. Connect to your ESP via wifi
3. Open example.html
4. Enter a message to send, for example "e"
5. Click "Send"
6.
7. Profit


### Disclaimer
Using websockets this way should generally be considered bad practice, so I do not recommend using this library.
