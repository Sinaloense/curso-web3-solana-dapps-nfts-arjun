# Sección 2
## Iniciar proyecto
`npm init -y`

## Instalar solana web3
`npm i @solana/web3.js`




# Sección 3
## Instalar WSL (Windows Subsystem for Linux)
`wsl --install`



## Instalar NVM y NodeJS en Linux

### Instalar Curl
`sudo apt-get install curl`

### Instalar NVM
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

### Reiniciar la terminar de Ubuntu en WSL

### Instalar la ultima version de NodeJS
`nvm install --lts`



## Instalar Rust en Linux
`curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`

### Verificar instalación
`rustup --version`

### Verificar que el compliador de rust esta instalado
`rustc --version`

### Verificar que cargo esta instalado
`cargo --version`



## Instalar Solana en Linux
`sh -c "$(curl -sSfL https://release.solana.com/v1.10.8/install)"`

### Verificar instalación
`solana --version`

### Ejecutar validador de Solana para prueba
`solana-test-validator`



## Instalar Mocha en Linux
`npm install -g mocha`


## Instalar Anchor en Linux
### pt1
`npm install --global yarn`
### pt2
`sudo apt-get update && sudo apt-get upgrade && sudo apt-get install -y pkg-config build-essential libudev-dev libssl-dev`
### pt3
`cargo install --git https://github.com/project-serum/anchor anchor-cli --locked`

### Verificar instalación
`anchor --version`



## Crear proyecto de prueba en Linux
`anchor init myepicproject --javascript`
###
`cd myepicproject`

### Crear wallet
`solana-keygen new`

### Ver wallet
`solana address`

### Compilar programa, deploy local del programa y probar programa
`anchor test`



### Crear wallet
`solana-keygen new`

### Ver wallet
`solana address`

### Ver balance de wallet
`solana balance --url devnet`

### Ver balance de wallet
https://explorer.solana.com/?cluster=devnet

### Asignar tokens a la wallet
`solana airdrop 2 { walletAddress } --url devnet`



## Instalar spl-token-cli
`cargo install spl-token-cli`

### Crear token (regresara un tokenAddress, hay que guardarlo)
`spl-token create-token --url devnet`

### Crear cuenta dentro de la wallet que pueda almacenar el token creado (Regresara un tokenAccountAddress, hay que guardarlo)
`spl-token create-account { tokenAddress } --url devnet`

### Ver balance del token
`spl-token balance { tokenAddress } --url devnet`

### Mintear tokens (1000 tokens)
`spl-token mint { tokenAddress } 1000 --url devnet`

### Ver suministro en circulacion del token
`spl-token supply { tokenAddress } --url devnet`

### Renunciar a la habilidad de crear mas tokens, comando irreversible
`spl-token authorize { tokenAddress } mint --disable --url devnet`

### Quemar tokens (solo se pueden quemar los tokens propios)
`spl-token burn { tokenAccountAddress } 100 --url devnet`

### Enviar tokens a wallet de terceros (50 tokens)
`spl-token burn { tokenAddress } 50 { thirdPartyWalletAddress } --url devnet --allow-unfunded-recipient --fund-recipient`