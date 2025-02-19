import WebApp from "@twa-dev/sdk";
import { TonConnectUI } from "@tonconnect/ui";

const tonConnectUI = new TonConnectUI({ //connect application
    manifestUrl: 'https://simplefarm-game.github.io/webapp/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

document.getElementById("connectWallet").addEventListener("click", async () => {
    try {
        const result = await tonConnect.connectWallet();
        if (result && result.accounts.length > 0) {
            const walletAddress = result.accounts[0].address;
            document.getElementById("walletAddress").innerText = `Carteira: ${walletAddress}`;

            // Enviar para o backend para criar sessão
            const response = await fetch("backend.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ wallet: walletAddress })
            });

            const data = await response.json();
            console.log("Sessão criada:", data);
            alert("Sessão criada com sucesso!");
        }
    } catch (error) {
        console.error("Erro ao conectar a carteira:", error);
    }
});


WebApp.ready();