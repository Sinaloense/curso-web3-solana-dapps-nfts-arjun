const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

// Crear wallet
const wallet = new Keypair();

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey

const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance = await connection.getBalance(publicKey);
        // console.log(`Wallet balance: ${ walletBalance }`);
        console.log(`Wallet balance: ${ walletBalance / LAMPORTS_PER_SOL }`);
    } catch(err) {
        console.log(err);
    }
}

const airDropSol = async (amount) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const lamports = amount * LAMPORTS_PER_SOL;
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, lamports);
        await connection.confirmTransaction(fromAirDropSignature);
    } catch(err) {
        console.log(err);
    }
}

const main = async () => {
    await getWalletBalance();
    await airDropSol(2);
    await getWalletBalance();
}

main();