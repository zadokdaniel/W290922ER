const oldUsers = [
    {
        id: 1,
        name: "daniel",
        address: {
            city: "tlv",
            street: "rotchild",
        },
    },
    {
        id: 2,
        name: "avi",
        address: {
            city: "tlv",
            street: "rotchild",
        },
    },
    {
        id: 3,
        name: "shalom",
        address: {
            city: "tlv",
            street: "rotchild",
        },
    },
];
const addToArray = () => {
    return [
        ...oldUsers,
        {
            id: 4,
            name: "yoram",
            address: { city: "haifa", street: "shalom shabazi" },
        },
    ];
};
const removeFromArray = (idToRemove) => {
    return oldUsers.filter((user) => user.id !== idToRemove);
};
const updateArray = (idToUpdate) => {
    return oldUsers.map((user) => {
        if (user.id === idToUpdate) {
            return Object.assign(Object.assign({}, user), { address: Object.assign(Object.assign({}, user.address), { city: "jerusalem" }) });
        }
        return user;
    });
};
