const app = require('./app');

const PORT = process.env.PORT || 8000;

console.log('process.env.PORT', process.env.PORT);

app.listen(PORT, () => {
    console.log(`Crypto app has started on port ${PORT}!`);
});
