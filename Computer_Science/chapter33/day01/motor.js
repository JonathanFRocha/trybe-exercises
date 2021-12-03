let data;
const run = (
  input,
  estado,
  phoneNumber,
  cpf,
  origem,
  elegivel,
  validacaoSimulacoes,
  bancosValidos,
  score
) => {
  const estrutura = {
    respostas: [
      {
        estado: "boas_vindas",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_cpf}}`,
        tipo: "text/plain",
        tracking: `boas vindas//${input || "-"}`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "fgts_analise_proposta",
      },
      {
        estado: "solicita_cpf",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_cnpj}}`,
        tipo: "text/plain",
        tracking: `Solicitacao cpf exibicao//Quantidade//Solicitacao cpf digitado//${
          input || "-"
        }`,
        mergeContact: `CPF|${input || "-"}`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_cnpj",
      },
      {
        estado: "solicita_cnpj",
        inputs: [],
        inputText: [],
        resposta: ``,
        tipo: "text/plain",
        tracking: `Solicitacao cnpj exibicao//Quantidade//Solicitacao cnpj digitado//${
          input || "-"
        }`,
        mergeContact: `CNPJ|${input || "-"}`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "informe_fgts",
      },
      {
        estado: "informe_fgts",
        inputs: ["1", "2"],
        inputText: ["sim-1", "não-2"],
        resposta: [
          {
            id: "1",
            resposta: `{{resource.fgts_solicita_dtNascimento}}`,
            estado: "informe_fgts",
            mergeContact: `broadcastOrigem|-|convenio|TIME FGTS`,
            tracking: `FGTS volume//${
              input || "-"
            }//FGTS detalhado//${phoneNumber}|${cpf}|${input || "-"}`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_nomeCompleto",
          },
          {
            id: "2",
            resposta: ``,
            estado: "informe_fgts",
            mergeContact: `broadcastOrigem|-|convenio|TIME FGTS`,
            tracking: `FGTS volume//${
              input || "-"
            }//FGTS detalhado//${phoneNumber}|${cpf}|${input || "-"}`,
            time: "",
            tipo: "",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "download_fgts_app",
          },
        ],
        mergeContact: `broadcastOrigem|-|convenio|TIME FGTS`,
        tipo: "text/plain",
        tracking: `FGTS invalido volume//${
          input || "-"
        }//FGTS Invalido detalhado//${phoneNumber}|${cpf}|${input || "-"}`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "informe_fgts",
      },
      {
        estado: "valida_dados",
        inputs: [],
        inputText: [],
        resposta: ``,
        tipo: "text/plain",
        tracking: "",
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: `${
          elegivel === "true" ? "verifica_simulacao" : "usuario_nao_elegivel"
        }`,
      },
      {
        estado: "usuario_nao_elegivel",
        inputs: [],
        inputText: [],
        resposta: ``,
        tipo: "text/plain",
        tracking: "",
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "download_fgts_app",
      },
      {
        estado: "download_fgts_app",
        inputs: [],
        inputText: [],
        resposta: `${
          elegivel ? "Sem problema!" : ""
        } {{resource.download_app_fgts}}`,
        tipo: "text/plain",
        tracking: `Download app exibicao//Quantidade//Download app digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "fgts_estimulo",
      },
      {
        estado: "fgts_estimulo",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_estimulo}}`,
        tipo: "text/plain",
        tracking: `Fgts estimulo quantidade//Quantidade//Fgts estimulo digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "atendimento_humano",
      },
      {
        estado: "verifica_simulacao",
        inputs: simulacaoOptions.createInputs(validacaoSimulacoes).inputs,
        inputText: simulacaoOptions.createInputs(validacaoSimulacoes)
          .inputsText,
        resposta: simulacaoOptions.createRespostas(
          validacaoSimulacoes,
          input,
          phoneNumber,
          cpf
        ),
        mergeContact: ``,
        tipo: "application/vnd.lime.collection+json",
        tracking: `Menu seleciona simulacao invalido volume//${
          input || "-"
        }//Menu seleciona simulacao invalido detalhado//${phoneNumber}|${cpf}|${
          input || "-"
        }`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "verifica_simulacao",
      },
      {
        estado: "solicita_nomeCompleto",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_dtNascimento}}`,
        tipo: "text/plain",
        tracking: `Solicitacao nome completo exibicao//Quantidade//Solicitacao nome completo digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_dataNascimento",
      },
      {
        estado: "solicita_dataNascimento",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_cep}}`,
        tipo: "text/plain",
        tracking: `Solicitacao data nascimento exibicao//Quantidade//Solicitacao data nascimento digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_cep",
      },
      {
        estado: "solicita_cep",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_numeroResidencia}}`,
        tipo: "text/plain",
        tracking: `Solicitacao cep exibicao//Quantidade//Solicitacao cep digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_numeroResidencia",
      },
      {
        estado: "solicita_numeroResidencia",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_enderecoComplemento}}`,
        tipo: "text/plain",
        tracking: `Solicitacao numero residencia exibicao//Quantidade//Solicitacao numero residencia digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_complementoEndereco",
      },
      {
        estado: "solicita_complementoEndereco",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_banco_menu}}`,
        tipo: "application/vnd.lime.select+json",
        tracking: `Solicitacao complemento residencia exibicao//Quantidade//Solicitacao complemento residencia digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_banco_menu",
        data: input,
        validInput: true,
      },
      {
        estado: "solicita_banco_menu",
        inputs: ["1", "2", "3", "4", "5", "6", "7", "8"],
        inputText: [
          "itaú-1",
          "brasil-2",
          "santander-3",
          "bradesco-4",
          "caixa-5",
          "safra-6",
          "digital-7",
          "outros-8",
        ],
        resposta: [
          {
            id: "1",
            resposta: `{{resource.fgts_solicita_tipo_conta}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|itau`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_tipoConta",
          },
          {
            id: "2",
            resposta: `{{resource.fgts_solicita_tipo_conta}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|brasil`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_tipoConta",
          },
          {
            id: "3",
            resposta: `{{resource.fgts_solicita_tipo_conta}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|santander`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_tipoConta",
          },
          {
            id: "4",
            resposta: `{{resource.fgts_solicita_tipo_conta}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|bradesco`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_tipoConta",
          },
          {
            id: "5",
            resposta: `{{resource.fgts_solicita_tipo_conta}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|caixa`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_tipoConta",
          },
          {
            id: "6",
            resposta: `{{resource.fgts_solicita_tipo_conta}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|safra`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_tipoConta",
          },
          {
            id: "7",
            resposta: `{{resource.fgts_banco_digital}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|digital`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "informa_sobre_banco_digital",
          },
          {
            id: "8",
            resposta: `{{resource.fgts_solicita_banco}}`,
            estado: "solicita_banco_menu",
            mergeContact: ``,
            tracking: `Solicita banco menu volume//${
              input || "-"
            }//Solicita banco menu detalhado//${phoneNumber}|${cpf}|outros`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_banco_outros",
          },
        ],
        tipo: "application/vnd.lime.select+json",
        tracking: `Solicita banco menu invalido exibicao//Quantidade//Solicita banco menu invalido digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: `{{resource.fgts_solicita_banco_menu_invalido}}`,
        estadoDestino: "solicita_banco_menu",
      },
      {
        estado: "solicita_banco_outros",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_tipo_conta}}`,
        tipo: "application/vnd.lime.select+json",
        tracking: `Solicita banco menu outros exibicao//Quantidade//Solicita banco menu outros digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_tipoConta",
      },
      {
        estado: "solicita_tipoConta",
        inputs: ["1", "2"],
        inputText: ["corrente-1", "poupança-2"],
        resposta: [
          {
            id: "1",
            estado: "solicita_tipoConta",
            resposta: `{{resource.fgts_solicita_agencia}}`,
            mergeContact: ``,
            tracking: `Solicita tipo conta volume//${
              input || "-"
            }//Solicita tipo conta detalhado//${phoneNumber}|${cpf}|${
              input || "-"
            }`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_agencia",
          },
          {
            id: "2",
            estado: "solicita_tipoConta",
            resposta: `{{resource.fgts_solicita_agencia}}`,
            mergeContact: ``,
            tracking: `Solicita tipo conta volume//${
              input || "-"
            }//Solicita tipo conta detalhado//${phoneNumber}|${cpf}|${
              input || "-"
            }`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_agencia",
          },
        ],
        mergeContact: ``,
        tipo: "application/vnd.lime.select+json",
        tracking: `Solicita tipo conta invalido volume//${
          input || "-"
        }//Solicita tipo conta invalido detalhado//${phoneNumber}|${cpf}|${
          input || "-"
        }`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: `{{resource.fgts_solicita_tipo_conta_invalido}}`,
        estadoDestino: "solicita_tipoConta",
      },
      {
        estado: "informa_sobre_banco_digital",
        inputs: ["1", "2"],
        inputText: ["sim-1", "nao-2"],
        resposta: [
          {
            id: "1",
            estado: "informa_sobre_banco_digital",
            resposta: `{{resource.fgts_solicita_banco_menu}}`,
            mergeContact: ``,
            tracking: `Informa sobre banco digital volume//${
              input || "-"
            }//Informa sobre banco digital detalhado//${phoneNumber}|${cpf}|${
              input || "-"
            }`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_banco_menu",
          },
          {
            id: "2",
            estado: "informa_sobre_banco_digital",
            resposta: ``,
            mergeContact: ``,
            tracking: `Informa sobre banco digital volume//${
              input || "-"
            }//Informa sobre banco digital detalhado//${phoneNumber}|${cpf}|${
              input || "-"
            }`,
            time: "",
            tipo: "",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "atendimento_humano",
          },
        ],
        mergeContact: ``,
        tipo: "application/vnd.lime.select+json",
        tracking: `Informa sobre banco digital invalido volume//${
          input || "-"
        }//Informa sobre banco digital invalido detalhado//${phoneNumber}|${cpf}|${
          input || "-"
        }`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: `{{resource.fgts_banco_digital_invalido}}`,
        estadoDestino: "informa_sobre_banco_digital",
      },
      {
        estado: "solicita_agencia",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_solicita_conta}}`,
        tipo: "text/plain",
        tracking: `Solicitacao agencia exibicao//Quantidade//Solicitacao agencia digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "solicita_conta",
      },
      {
        estado: "solicita_conta",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_confirma_dados_bancarios}}`,
        tipo: "application/vnd.lime.select+json",
        tracking: `Solicitacao numero conta exibicao//Quantidade//Solicitacao numero conta digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "confirma_dados_bancarios",
      },
      {
        estado: "confirma_dados_bancarios",
        inputs: ["1", "2"],
        inputText: ["confirmo-1", "não confirmo-2"],
        resposta: [
          {
            id: "1",
            estado: "confirma_dados_bancarios",
            resposta: `{{resource.fgts_formalizacao_contrato}}`,
            mergeContact: ``,
            tracking: `Confirma dados bancarios volume//${
              input || "-"
            }//Confirma dados bancarios detalhado//${phoneNumber}|${cpf}|${
              input || "-"
            }`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "atendimento_humano",
          },
          {
            id: "2",
            estado: "confirma_dados_bancarios",
            resposta: `{{resource.fgts_solicita_banco_menu}}`,
            mergeContact: ``,
            tracking: `Confirma dados bancarios volume//${
              input || "-"
            }//Confirma dados bancarios detalhado//${phoneNumber}|${cpf}|${
              input || "-"
            }`,
            time: "",
            tipo: "application/vnd.lime.select+json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_banco_menu",
          },
        ],
        mergeContact: ``,
        tipo: "application/vnd.lime.select+json",
        tracking: `Confirma dados bancarios invalido volume//${
          input || "-"
        }//Confirma dados bancarios invalido detalhado//${phoneNumber}|${cpf}|${
          input || "-"
        }`,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: `{{resource.fgts_confirma_dados_bancarios_invalido}}`,
        estadoDestino: "confirma_dados_bancarios",
      },
      {
        estado: "fgts_formalização",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_analise_proposta_resposta}}`,
        tipo: "text/plain",
        tracking: `Fgts formalizado exibicao//Quantidade`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "fgts_analise_proposta",
      },
      {
        estado: "fgts_analise_proposta",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_analise_proposta_resposta}}`,
        tipo: "text/plain",
        tracking: `Fgts analise proposta exibicao//Quantidade`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "fgts_analise_proposta",
      },
      {
        estado: "fgts_nps",
        inputs: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        inputText: [
          "0-0",
          "1-1",
          "2-2",
          "3-3",
          "4-4",
          "5-5",
          "6-6",
          "7-7",
          "8-8",
          "9-9",
          "10-10",
        ],
        resposta: [
          {
            id: "0",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 0 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_motivos_nps",
          },
          {
            id: "1",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 1 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_motivos_nps",
          },
          {
            id: "2",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 2 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_motivos_nps",
          },
          {
            id: "3",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 3 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "4",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 4 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "5",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 5 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "6",
            resposta: `{{resource.fgts_nps_nota_motivos}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 6 | Detratores`,
            time: "",
            tipo: "application/json",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "7",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 7 | Neutros//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "8",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 8 | Neutros//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "9",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 9 | Promotores//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "10",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "fgts_nps",
            mergeContact: ``,
            tracking: `ST survey answer//NPS Bot | 10 | Promotores//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
        ],
        tipo: "text/plain",
        tracking: `Pesquisa satisfacao input inesperado//${input}`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: `{{resource.fgts_nps_nota_texto_invalido}}`,
        estadoDestino: "fgts_nps",
      },
      {
        estado: "solicita_motivos_nps",
        inputs: ["1", "2", "3", "4", "5", "6"],
        inputText: [
          "tempo de espera-1",
          "tempo de atendimento-2",
          "tempo de formalização-3",
          "descontentamento taxa-4",
          "não consegui empréstimo-5",
          "outros-6",
        ],
        resposta: [
          {
            id: "1",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "solicita_motivos_nps",
            mergeContact: ``,
            tracking: `ST survey reason//NPS Bot|${score}|${input}//Pesquisa satisfacao resposta selecao//Tempo de espera//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "2",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "solicita_motivos_nps",
            mergeContact: ``,
            tracking: `ST survey reason//NPS Bot|${score}|${input}//Pesquisa satisfacao resposta selecao//Tempo de atendimento//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "3",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "solicita_motivos_nps",
            mergeContact: ``,
            tracking: `ST survey reason//NPS Bot|${score}|${input}//Pesquisa satisfacao resposta selecao//Tempo de formalização//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "4",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "solicita_motivos_nps",
            mergeContact: ``,
            tracking: `ST survey reason//NPS Bot|${score}|${input}//Pesquisa satisfacao resposta selecao//Descontentamento taxa//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "5",
            resposta: `{{resource.fgts_nps_finalizacao}}`,
            estado: "solicita_motivos_nps",
            mergeContact: ``,
            tracking: `ST survey reason//NPS Bot|${score}|${input}//Pesquisa satisfacao resposta selecao//Não consegui empréstimo//Finalizacao agradecimento exibicao//Quantidade`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "fgts_nps_finalização",
          },
          {
            id: "6",
            resposta: `{{resource.fgts_nps_nota_motivos_outros}}`,
            estado: "solicita_motivos_nps",
            mergeContact: ``,
            tracking: `ST survey reason//NPS Bot|${score}|${input}//Pesquisa satisfacao resposta selecao//Outros`,
            time: "",
            tipo: "text/plain",
            cabecalho: ``,
            opcoesDeMenu: ``,
            estadoDestino: "solicita_motivos_nps_outros",
          },
        ],
        tipo: "application/json",
        tracking: `Pesquisa satisfacao resposta selecao//input inesperado//Pesquisa satisfacao resposta input inesperado//${input}`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: `{{resource.fgts_nps_nota_motivos_invalido}}`,
        estadoDestino: "solicita_motivos_nps",
      },
      {
        estado: "solicita_motivos_nps_outros",
        inputs: [],
        inputText: [],
        resposta: `{{resource.fgts_nps_finalizacao}}`,
        tipo: "text/plain",
        tracking: `Pesquisa satisfacao outros exibicao//Exibicao//Pesquisa satisfacao outros input//${input}//Finalizacao agradecimento exibicao//Quantidade`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "fgts_nps_finalização",
      },
      {
        estado: "fgts_nps_finalização",
        inputs: [],
        inputText: [],
        resposta: ``,
        tipo: "text/plain",
        tracking: ``,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "finalizar",
      },
      {
        estado: "fgts_finalização",
        inputs: [],
        inputText: [],
        resposta: ``,
        tipo: "text/plain",
        tracking: `Finalizacao exibicao//Quantidade`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "finalizar",
      },
      {
        estado: "atendimento_humano",
        inputs: [],
        inputText: [],
        resposta: ``,
        tipo: "text/plain",
        tracking: `horario de atentimento exibicao//Quantidade//Solicitacao outros valores digitado//${
          input || "-"
        }`,
        mergeContact: ``,
        time: "",
        cabecalho: ``,
        opcoesDeMenu: ``,
        estadoDestino: "inicio",
      },
    ],
  };

  const res = estrutura;
  const currentState = res.respostas.filter((e) => e.estado === estado)[0];

  if (estado === "solicita_cnpj") {
    if (cnpjIsValid(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.estadoDestino = estado;
      currentState.resposta = `{{resource.fgts_solicita_cnpj_invalido}}`;
      return currentState;
    }
  }

  if (estado === "solicita_cpf") {
    if (cpfIsValid(input)) {
      if (origem === "#emprestimoGarantiaFgts" || origem === "#testeRoteador") {
        const informeFgts = res.respostas.filter(
          (e) => e.estado === "informe_fgts"
        )[0];
        informeFgts.validInput = true;
        informeFgts.data = data;
        return informeFgts;
      }
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.estadoDestino = estado;
      currentState.resposta = `{{resource.fgts_solicita_cpf_invalido}}`;
      return currentState;
    }
  }

  if (estado === "solicita_dataNascimento") {
    if (isDateValid(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.estadoDestino = estado;

      currentState.resposta = `{{resource.fgts_solicita_dtNascimento_invalido}}`;
      currentState.tipo = "text/plain";
      return currentState;
    }
  }

  if (estado === "solicita_nomeCompleto") {
    if (isNameValid(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.estadoDestino = estado;

      currentState.resposta = `{{resource.fgts_solicita_nome_completo_invalido}}`;

      return currentState;
    }
  }

  if (estado === "solicita_cep") {
    if (isCepValid(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.estadoDestino = estado;
      currentState.resposta = `{{resource.fgts_solicita_cep_invalido}}`;
      return currentState;
    }
  }

  if (estado === "solicita_numeroResidencia") {
    if (isValidNumber(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.estadoDestino = estado;
      currentState.resposta = `{{resource.fgts_solicita_numeroResidencia_invalido}}`;
      return currentState;
    }
  }

  if (estado === "solicita_banco_outros") {
    if (bankIsValid(input, bancosValidos)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.resposta = `{{resource.fgts_solicita_banco_invalido}}`;
      currentState.tipo = "text/plain";
      currentState.estadoDestino = estado;
      return currentState;
    }
  }

  if (estado === "solicita_agencia") {
    if (bankAgencyIsValid(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.resposta = `{{resource.fgts_solicita_agencia_invalido}}`;
      currentState.estadoDestino = estado;
      return currentState;
    }
  }

  if (estado === "solicita_conta") {
    if (accountNumberIsValid(input)) {
      currentState.validInput = true;
      currentState.data = data;
      return currentState;
    } else {
      currentState.valid = false;
      currentState.resposta = `{{resource.fgts_solicita_conta_invalido}}`;
      currentState.tipo = "text/plain";
      currentState.estadoDestino = estado;
      return currentState;
    }
  }

  if (estado && !currentState.inputs.includes(input)) {
    // if (currentState.invalido) {
    //   return {
    //     tipo: "text/plain",
    //     resposta: novoEstadoAux[0].invalido.resposta,
    //     estadoDestino: novoEstadoAux[0].invalido.estadoDestino,
    //   };
    // }

    return currentState;
  } else {
    if (currentState.inputs.includes(input)) {
      const current = currentState.resposta.filter((e) => e.id == input)[0];
      current.data = input;
      return current;
    } else {
      let arraySplitado = [];

      currentState.inputText.forEach((e) => {
        arraySplitado.push({ id: e.split("-")[1], texto: e.split("-")[0] });
      });

      const id = arraySplitado.filter((e) => e.texto == input);

      if (id.length > 0) {
        let filter = id[0].id;

        return currentState.resposta.filter((e) => e.id == filter)[0];
      } else {
        return false;
      }
    }
  }
};

function getOnlyNumbers(value) {
  return value.replace(/[^0-9]/gi, "");
}

const isValidNumber = (value) => {
  const numbers = getOnlyNumbers(value);
  data = numbers;
  if (numbers) return numbers;
  return false;
};

const validarCPF = (strCPF) => {
  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
};

const cpfIsValid = (input) => {
  const unexpected = "Input inesperado";
  const validCpf = true;
  const invalidCpf = false;

  input = input.replace(/[^\d]+/g, "");

  try {
    if (input.length != 11) {
      return invalidCpf;
    }

    if (!validarCPF(input)) {
      return invalidCpf;
    }
    data = input;
    return validCpf;
  } catch (e) {
    return unexpected;
  }
};

function cnpjIsValid(cnpj) {
  cnpj = getOnlyNumbers(cnpj);
  if (
    !cnpj ||
    cnpj.length != 14 ||
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;
  data = cnpj;
  return true;
}

const getFormattedDate = (input) => {
  var hasNumber = /\d+/g;
  var isValid = false;
  const invalid = "Input inesperado";
  const error = "Error ";
  var date = invalid;
  var aux;

  const optionsRegex = {
    "(janeiro|jan)": "01",
    "(fevereiro|fev)": "02",
    "(marco|março|mar)": "03",
    "(abril|abr)": "04",
    "(maio|mai)": "05",
    "(junho|jun)": "06",
    "(julho|jul)": "07",
    "(agosto|ago)": "08",
    "(setembro|set)": "09",
    "(outubro|out)": "10",
    "(novembro|nov)": "11",
    "(dezembro|dez)": "12",
  };

  if (!hasNumber.test(input)) {
    return {
      isValid: isValid,
      match: invalid,
    };
  }

  for (var key in optionsRegex) {
    const matching = new RegExp(key, "i");

    if (matching.test(input)) {
      aux = getDate(input, optionsRegex[key]);
      if (aux != invalid && aux != error) {
        isValid = true;
        date = aux;
      }
    }
  }

  if (isValid === false) {
    date = getDate(input, null);
  }
  if (date != invalid && date != error) {
    isValid = true;
  }

  data = date;
  return {
    isValid: isValid,
  };
};

function getDate(date, monthAdd) {
  const numberPattern = /\d+/g;
  const separator = RegExp("(\\|+|\\s+|-+|\\.+|/)");
  var datePattern = RegExp(
    "[0-9]+" +
      "(\\|+|\\s+|-+|\\.+|/)" +
      "[0-9]+" +
      "(\\|+|\\s+|-+|\\.+|/)" +
      "[0-9]+"
  );
  const removeTwoDigits = RegExp("^[0-9]{2}");
  const removeOneDigit = RegExp("^[0-9]{1}");
  const invalid = "Input inesperado";
  const error = "Error";
  var numbers;
  var aux;
  var year;
  var month;
  var day;

  try {
    if (monthAdd != null) {
      month = monthAdd;
      numbers = date.match(numberPattern);
      aux = "";
      for (var i = 0; i < numbers.length; i++) {
        aux += numbers[i];
      }

      if (aux.length == 3 || aux.length == 5) {
        day = "0";
        day += aux.match(removeOneDigit)[0];
        aux = aux.replace(removeOneDigit, "");
        year = aux;
      } else if (aux.length == 4 || aux.length == 6) {
        day = aux.match(removeTwoDigits)[0];
        aux = aux.replace(removeTwoDigits, "");
        year = aux;
      }
    } else if (datePattern.test(date)) {
      aux = date.match(datePattern)[0];
      day = aux.split(separator)[0];
      month = aux.split(separator)[2];
      year = aux.split(separator)[4];
    } else {
      return invalid;
    }

    if (day == null || month == null || year == null) {
      return invalid;
    }

    checkDate = new Date(year + "/" + month + "/" + day);
    if (checkDate == "Invalid Date") {
      return invalid;
    }

    if (day.length == 1) {
      day = "0" + day;
    }

    if (month.length == 1) {
      month = "0" + month;
    }

    if (year.length == 2) {
      year = "20" + year;
    }

    return day + "/" + month + "/" + year;
  } catch (e) {
    return error;
  }
}

const isDateValid = (value) => {
  return getFormattedDate(value).isValid;
};

const getName = (input) => {
  let valid = false;
  let value = false;

  let rm = /(^o\s+|\s+e\s+|\s+é\s+|^é\s+|\s*meu\s*|\s*nome\s*é\s*|\s*esse\s*é\s*|\s*esse\s*|\s*nome\s*|\s*aqui\s*|\s*está\s*|\s*está\s*o\s*|\s*ok\s*|\s*tudo\s*bem\s*)/gi; //Remove alguns termos de resposta do usuario
  let re = /([a-zA-Z\u00C0-\u00FF ']{3,40}\s([a-zA-Z\u00C0-\u00FF ']{3,40}))/; //Captura nome
  let smallTalks = /^bom dia$|^boa tarde$|^boa noite$/i;

  let name = input.replace(rm, "");
  name = name.replace(/ +(?= )/g, ""); //Remove espacos adicionais

  if (re.test(name) == true && !smallTalks.test(name))
    if (name.match(re)[0] != " ") {
      valid = true;
      value = name.match(re)[0];
    }
  return value;
};

const isNameValid = (value) => {
  const name = getName(value);
  data = name;
  if (name) {
    return true;
  }
  return false;
};

const isCepValid = (cep) => {
  cep = cep.replace(/[^0-9]/gi, "");
  if (cep.length !== 8) {
    return false;
  }
  data = cep;
  return true;
};

const bankIsValid = (codigoBanco, bancosValidos) => {
  const { bancos } = JSON.parse(bancosValidos);
  const bankCode = codigoBanco.replace(/[^\,0-9]/gi, "");
  const bankCodeLengthIsOk = bankCode.length === 3;

  const isValidBankCode = bancos.find((banco) => banco.id === bankCode);
  if (!bankCodeLengthIsOk || !isValidBankCode) return false;
  data = codigoBanco;
  return codigoBanco;
};

const bankAgencyIsValid = (agencia) => {
  const bankAgency = agencia.replace(/[^\,0-9]/gi, "");
  if (bankAgency.length < 4 || bankAgency.length > 4) return false;
  data = bankAgency;
  return bankAgency;
};

const accountNumberIsValid = (numeroConta) => {
  numeroConta = numeroConta.replace(/-/g, "");
  if (!numeroConta.match(/^([a-zA-Z0-9]+)$/)) return false;
  if (numeroConta.length > 15) return false;
  data = numeroConta;
  return numeroConta;
};

const createOptions = (validacaoSimulacoes) => {
  if (!validacaoSimulacoes) return { inputs: [], inputsText: [] };

  validacaoSimulacoes = JSON.parse(validacaoSimulacoes);
  const { simulacoes } = validacaoSimulacoes;

  const OUT_OF_YEAR = 6;
  const inputs = [];
  const inputsText = [];

  for (let i = 1; i <= simulacoes; i++) {
    inputs.push(`${i}`);
    if (i == simulacoes) break;
    inputsText.push(
      `${OUT_OF_YEAR - i} ${OUT_OF_YEAR - i == 1 ? "ano" : "anos"}-${i}`
    );
  }

  const alterarValor = `alterar valor-${simulacoes}`;
  inputsText.push(alterarValor);

  return { inputs, inputsText };
};

const createRespostas = (validacaoSimulacoes, input, phoneNumber, cpf) => {
  if (!validacaoSimulacoes) return;

  validacaoSimulacoes = JSON.parse(validacaoSimulacoes);
  const { simulacoes } = validacaoSimulacoes;

  const respostas = [];

  for (let i = 1; i < simulacoes; i++) {
    respostas.push({
      id: i,
      estado: "verifica_simulacao",
      resposta: `{{resource.fgts_solicita_nome_completo}}`,
      mergeContact: ``,
      tracking: `Menu seleciona Simulacao banco volume//${
        input || "-"
      }//Menu seleciona Simulacao detalhado//${phoneNumber}|${cpf}|${
        input || "-"
      }`,
      time: "",
      tipo: "text/plain",
      cabecalho: ``,
      opcoesDeMenu: ``,
      estadoDestino: "solicita_nomeCompleto",
    });
  }

  respostas.push({
    id: simulacoes,
    estado: "verifica_simulacao",
    resposta: ``,
    mergeContact: ``,
    tracking: `Menu seleciona Simulacao volume//${
      input || "-"
    }//Menu seleciona Simulacao detalhado//${phoneNumber}|${cpf}|${
      input || "-"
    }`,
    time: "",
    tipo: "",
    cabecalho: ``,
    opcoesDeMenu: ``,
    estadoDestino: "atendimento_humano",
  });

  return respostas;
};

const simulacaoOptions = {
  createInputs: createOptions,
  createRespostas,
};
