# API-NodeJS-SOAP-Correios-CEP

## Descrição

API para gerenciamento de projetos e tarefas realizadas por cada usuário.

## Principais recursos

*  Consulta CEP diretamente do WebService dos Correios
*  Configuração utilizando variáveis de ambiente
*  Requisição SOAP

## Endpoints

**Rota para consultar CEP.**

    GET {{ base_url  }}/consultaCEP/{{ cep }}

RESPOSTA

``` json
{
  "return": {
    "bairro": "Aclimação",
    "cep": "37901544",
    "cidade": "Passos",
    "complemento2": "- de 301/302 ao fim",
    "end": "Rua Albertino Ferreira Rosa",
    "uf": "MG"
  }
}
```
