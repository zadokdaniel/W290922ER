export class MessagesManager {
    // constructor
    constructor(name) {
        this.messages = [];
        this.name = name;
        this.messages = [];
    }
    sendMessage(to, from, message) {
        this.messages = [
            ...this.messages,
            {
                to,
                from,
                message,
                createdAt: new Date(),
            },
        ];
        return this;
    }
    deleteMessages(name) {
        if (name) {
            this.messages = this.messages.filter((message) => message.to !== name);
        }
        else {
            this.messages = [];
        }
        return this;
    }
    getMessages(fromOrName, to) {
        if (typeof fromOrName === "string") {
            let name = fromOrName;
            console.log("name", name);
            return this.messages.filter((message) => message.to === name);
        }
        else if (fromOrName instanceof Date) {
            let from = fromOrName;
            console.log("*********** to **************", to);
            console.log("from", from, "to", to === undefined ? new Date() : to);
            return this.messages.filter((message) => message.createdAt > from &&
                message.createdAt < (to === undefined ? new Date() : to));
        }
        else {
            return this.messages;
        }
    }
}
// Unit Test
const a = new MessagesManager("my messages");
console.log("starting", new Date());
let id = 0;
const intervalId = setInterval(() => {
    console.log(id);
    a.sendMessage("daniel", "shalom", "messge " + id++);
}, 1000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("all", a.getMessages());
    console.log("by from", a.getMessages(new Date(Date.now() - 40 * 1000)));
    console.log("by from to: ", a.getMessages(new Date(Date.now() - 30 * 1000), new Date(Date.now() - 10 * 1000)));
    console.log("by name", a.getMessages("daniel"));
    console.log("finish", new Date());
}, 60 * 1000);
