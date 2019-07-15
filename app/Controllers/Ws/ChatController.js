'use strict'

class ChatController {
    constructor ({ socket, request, auth }) {
        this.socket = socket
        this.request = request
        this.auth = auth
    }

    onMessage(message){
        console.log(message, this.auth.user)
        this.socket.broadcastToAll('message', {...message,username: this.auth.user.username})
    }

}

module.exports = ChatController
