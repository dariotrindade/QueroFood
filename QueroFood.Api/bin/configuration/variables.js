const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://admin:querofood@cluster0-5mjfy.mongodb.net/querofood?retryWrites=true&w=majority'
        // connection: process.env.connection || 'mongodb+srv://admin:querofood@cluster0-m9wh5.mongodb.net/querofood?retryWrites=true&w=majority'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|54e797f748004590281f26438e1bdaa0'
    }
}
module.exports = variables;
