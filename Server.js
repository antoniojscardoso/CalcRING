const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/calcular-frete", async (req, res) => {
    const { cep, peso, altura, largura, comprimento } = req.query;
    const cepOrigem = "01001000"; // CEP da loja (altere para o seu)

    // Serviços: 04014 = SEDEX, 04510 = PAC
    const urlCorreios = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo?nCdEmpresa=&sDsSenha=&nCdServico=04014,04510&sCepOrigem=${cepOrigem}&sCepDestino=${cep}&nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${larg