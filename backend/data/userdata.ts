import bcrypt from "bcryptjs";

const userdata = [
    // 5. Center Devils
    {
        "name": "Robert D. Nixon",
        "image": "https://i.pinimg.com/236x/aa/4f/14/aa4f1494ba69f716fb92f0115a6c5fb4.jpg",
        "email": "RobertDNixon@gmai.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2020-01-14").toISOString(),

    },
    {
        "name": "Lional Messi",
        "image": "https://i.pinimg.com/236x/87/0f/4c/870f4c67a5e58a423545d735cae171f6.jpg",
        "email": "lionelmessi102@gmai.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2011-02-19").toISOString(),

    },
    {
        "name": "Baltimore Samuel",
        "image": "https://i.pinimg.com/236x/a1/d4/5d/a1d45df6a902722ddef9189b237379f3.jpg",
        "email": "BaltimoreSamuel1010",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2001-10-29").toISOString(),


    },
    // Dwayne
    {
        "name": "Dwayne_ Johson",
        "image": "https://i.pinimg.com/236x/25/e9/bf/25e9bfb9b9f6ce040bf7f240d8b6ecbe.jpg",
        "email": "Dwayne_1000@yahoo.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2011-05-19").toISOString(),


    },
    {
        "name": "King Ade_111",
        "image": "https://i.pinimg.com/236x/29/62/9c/29629ce29d49e9f08294c42dbc0b0c91.jpg",
        "email": "Ade_111@yahoo.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2021-01-14").toISOString(),

    },
    {
        "name": "Choun Wyane10",
        "image": "https://i.pinimg.com/236x/50/3c/18/503c18fe81ae49ae14ab5b33480af3ff.jpg",
        "email": "Choun@gmai.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2011-07-14").toISOString(),

    },
    // Eddy
    {
        "name": "Eddy__ Akan",
        "image": "https://i.pinimg.com/236x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg",
        "email": "Eddy__@gmail.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2021-01-19").toISOString(),

    },
    {
        "name": "Patrick1 Mahomes",
        "image": "https://i.pinimg.com/236x/b8/2f/35/b82f35804c74f6925cd5ccc6f5a6af7a.jpg",
        "email": "Patrick1Mahomes@yahoo.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2011-1-14").toISOString(),

    },
    {
        "name": "Vivnuvics Jackson",
        "image": "https://i.pinimg.com/236x/46/d9/ca/46d9cad2612db0ee8d61cf4678231b77.jpg",
        "email": "Vivnuvics@gmail.com",
        hashedPassword: bcrypt.hashSync("12345", 10),
        createdAt: new Date("2021-02-19").toISOString(),

    },
]


export default userdata