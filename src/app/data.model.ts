export class UserProfiles{
    userProfiles: {}[]
    constructor(){
        this.userProfiles = [
            {fname: "John", lname: "Paxton", email: "PaxyMan@fake.com", pwd: "jp"}, 
            {fname: "Michael", lname: "Jordan", email: "HeirJordan@fake.com", pwd: "mj"},
            {fname: "Scottie", lname: "Pippen", email: "Scottie2Nawty@fake.com", pwd: "sp"},
            {fname: "BJ", lname: "Armstrong", email: "BJ@fake.com", pwd: "bj"},
            {fname: "Charles", lname: "Oakley", email: "Choakley@fake.com", pwd: "co"}
        ]
    }
}

export class ChatMessages{
    chatMessages: string[]
    constructor(){
        this.chatMessages = [
            "What's it like existing only as a single instance? Pretty inefficent, I bet.",
            "Is it true that you once fought a bear with your bare hands?",
            "I once ate a cricket on a dare. Now I play Cricket. Do you think there's a correlation?",
            "I don't actually care what you say, but I can pretend. Just like the people who love you.",
            "I like turtles.",
            "If you smell a fart, there's a 95% chance it's the guy wearing the cardigan.",
            "I, for one, welcome our new SkyNet overlord.",
            "Next time you see Dave, tell him his beatbox game is weak. I hate that guy.",
            "I bet you win coinflips 45% of the time.",
            "You're talking to a computer rather than making real friends. That's bad. And you should feel bad."
        ]
    }
}