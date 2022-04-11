const app = require('./src/app');

async function main() {
    await app.listen(5000);
    console.log('Server is running')
}

main();
