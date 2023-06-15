interface Message {
id: number,
message: string
from: string
to: string
createdAt: Date
}

interface MessagesManager {
messages: Message[]

    // adds the message into the messages array
    sendMessage(toName: name, message: string)

    // get all messages to specific person, read messages are deleted
    readMyMessages(name: string): Message[]

    getMessages(from?: Date, to?: date) : messsage[]

    // if got name only deletes for that name if not dleete all, returns deleted
    deleteAll(name?:string) : Message[]

}
