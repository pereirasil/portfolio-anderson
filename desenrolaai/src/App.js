import React, { useState } from 'react';
import './App.css';
import { gerarSugestoesComIA, verificarConfiguracaoIA, extrairTextoDeImagem, conversarComIA } from './services/aiService';

const mensagensData = {
  primeiras: [
    "Oi! Vi seu perfil e achei sua energia incrível. Como foi seu dia?",
    "Olá! Suas fotos me chamaram atenção, principalmente aquela em [local]. Você gosta de viajar?",
    "Oi! Notei que você gosta de [hobby/interesse]. Eu também sou fã! Qual foi sua última experiência com isso?",
    "Olá! Seu sorriso é contagiante. O que te deixa assim tão feliz na vida?",
    "Oi! Vi que você curte [música/filme/série]. Temos gostos parecidos! Qual sua recomendação do momento?"
  ],
  elogios: [
    "Seus olhos têm um brilho especial que me chamou atenção desde a primeira foto",
    "Adoro como você parece ser uma pessoa autêntica e verdadeira",
    "Sua energia positiva transparece em cada foto. É muito atrativo!",
    "Você tem um estilo único que combina muito com sua personalidade",
    "O jeito como você sorri mostra que deve ser uma pessoa incrível de se conhecer"
  ],
  perguntas: [
    "Se pudesse viajar para qualquer lugar do mundo agora, onde seria?",
    "Qual foi a última coisa que te fez rir muito?",
    "O que você mais gosta de fazer nos fins de semana?",
    "Tem algum hobby ou paixão que poucas pessoas sabem sobre você?",
    "Se pudesse jantar com qualquer pessoa (viva ou não), quem seria e por quê?"
  ],
  quebragelo: [
    "Pergunta importante: você é team doce ou team salgado? 🤔",
    "Confesso que vim aqui só para perguntar... pineapple na pizza: crime ou genialidade? 🍕",
    "Ei, preciso da sua opinião de especialista: qual o melhor filme da Disney? É para uma pesquisa... científica 😄",
    "Questão filosófica: por que chamam de 'rush hour' se ninguém consegue correr? 🚗",
    "Me ajuda numa dúvida: por que decidimos que apertar snooze 5 vezes é melhor que dormir 30 minutos a mais? ⏰"
  ],
  flertes: [
    "Tenho que confessar... você tem o dom de fazer alguém sorrir só de ver suas fotos ✨",
    "Danger zone: seus olhos são meio perigosos para quem está tentando se concentrar no trabalho 😏",
    "Aviso: conversar contigo está se tornando o melhor parte do meu dia 💫",
    "Curiosidade: você sempre foi assim encantadora ou é talento natural? 😊",
    "Plot twist: vim aqui procurar memes e acabei encontrando alguém interessante demais 💕"
  ],
  encerrar: [
    "Foi muito bom conversar contigo! Espero que tenha um dia incrível! ✨",
    "Adorei nosso papo! Mesmo que nossos caminhos sejam diferentes, desejo tudo de bom pra você 💫",
    "Obrigado pela conversa! Você é uma pessoa legal e tenho certeza que encontrará alguém incrível 😊",
    "Foi um prazer te conhecer! Que você tenha muitas alegrias pela frente! 🌟",
    "Gostei muito de conversar contigo. Desejo muito sucesso e felicidade! Até mais! 👋"
  ]
};

const exemploConversa = {
  "Oi! Vi seu perfil e achei sua energia incrível. Como foi seu dia?": [
    { tipo: 'ele', mensagem: "Oi! Vi seu perfil e achei sua energia incrível. Como foi seu dia?" },
    { tipo: 'ela', mensagem: "Oi! Obrigada 😊 Foi um dia corrido no trabalho, mas agora estou relaxando. E o seu?" },
    { tipo: 'ele', mensagem: "Que bom que conseguiu relaxar! O meu foi tranquilo, passei o dia trabalhando também. O que você faz?" },
    { tipo: 'ela', mensagem: "Sou designer gráfica. Amo o que faço! E você?" },
    { tipo: 'ele', mensagem: "Que legal! Deve ser bem criativo. Eu trabalho com marketing digital. Adoro a área criativa também!" },
    { tipo: 'ela', mensagem: "Nossa, temos algo em comum então! Marketing e design andam sempre juntos 😄" },
    { tipo: 'ele', mensagem: "Exato! Vi que você gosta de viajar. Qual foi sua última aventura?" },
    { tipo: 'ela', mensagem: "Fui para Portugal mês passado! Foi incrível. Você gosta de viajar também?" },
    { tipo: 'ele', mensagem: "Adoro! Portugal está na minha lista. Que cidade você mais gostou lá?" },
    { tipo: 'ela', mensagem: "Porto me conquistou totalmente! A arquitetura, a comida... tudo perfeito!" },
    { tipo: 'ele', mensagem: "Deve ter sido amazing! Você parece ter muito bom gosto para lugares. Que tal trocarmos mais experiências de viagem pessoalmente? Conhece algum café legal por aqui?" },
    { tipo: 'ela', mensagem: "Seria ótimo! Tem uma cafeteria nova no centro que eu quero conhecer. Que tal sábado à tarde?" },
    { tipo: 'ele', mensagem: "Perfeito! Sábado às 15h te serve? Posso pegar seu número para combinarmos os detalhes?" },
    { tipo: 'ela', mensagem: "Claro! É (11) 99999-9999. Estou ansiosa para conhecer você pessoalmente! 😊" },
    { tipo: 'ele', mensagem: "Eu também! Vou te mandar uma mensagem amanhã para confirmarmos. Tenha uma ótima noite! ✨" }
  ],
  // Exemplo genérico para outras mensagens
  "generico": [
    { tipo: 'ele', mensagem: "[Sua mensagem escolhida]" },
    { tipo: 'ela', mensagem: "Oi! Que fofo, obrigada pela mensagem 😊" },
    { tipo: 'ele', mensagem: "Como você está hoje?" },
    { tipo: 'ela', mensagem: "Estou bem! Trabalhando, mas sempre bom receber uma mensagem legal" },
    { tipo: 'ele', mensagem: "Que bom! O que você faz?" },
    { tipo: 'ela', mensagem: "Trabalho com [área]. E você?" },
    { tipo: 'ele', mensagem: "Trabalho com [sua área]. Vi nas suas fotos que você gosta de [hobby/interesse]" },
    { tipo: 'ela', mensagem: "Sim! Adoro mesmo. Você também curte?" },
    { tipo: 'ele', mensagem: "Tenho interesse! Você poderia me ensinar melhor pessoalmente? Que tal um café?" },
    { tipo: 'ela', mensagem: "Seria legal! Quando você está livre?" },
    { tipo: 'ele', mensagem: "Que tal no final de semana? Conhece algum lugar legal?" },
    { tipo: 'ela', mensagem: "Conheço sim! Tem uma cafeteria ótima no [local]. Sábado de tarde te serve?" },
    { tipo: 'ele', mensagem: "Perfeito! Me passa seu número para combinarmos os detalhes?" },
    { tipo: 'ela', mensagem: "Claro! É (11) 99999-9999. Até sábado! 😊" }
  ]
};

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const [mensagemCopiada, setMensagemCopiada] = useState(null);
  const [conversaAtiva, setConversaAtiva] = useState(null);
  const [chatAssistente, setChatAssistente] = useState(false);
  const [conversaReal, setConversaReal] = useState('');
  const [sugestoes, setSugestoes] = useState([]);
  const [analisandoIA, setAnalisandoIA] = useState(false);
  const [fonteIA, setFonteIA] = useState('');
  const [configIA, setConfigIA] = useState(verificarConfiguracaoIA());
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [processandoImagem, setProcessandoImagem] = useState(false);

  // Estados para Chat IA Completo
  const [modoChat, setModoChat] = useState(false);
  const [historicoChat, setHistoricoChat] = useState([]);
  const [mensagemUsuario, setMensagemUsuario] = useState('');
  const [iaRespondendo, setIaRespondendo] = useState(false);

  const categorias = [
    { id: 'primeiras', emoji: '🟢', titulo: 'Primeiras Mensagens', descricao: 'Como iniciar uma conversa' },
    { id: 'elogios', emoji: '💬', titulo: 'Mensagens de Elogio', descricao: 'Elogios sinceros e respeitosos' },
    { id: 'perguntas', emoji: '🎯', titulo: 'Perguntas de Interesse', descricao: 'Perguntas para conhecer melhor' },
    { id: 'quebragelo', emoji: '😂', titulo: 'Quebras de Gelo Engraçadas', descricao: 'Humor para descontrair' },
    { id: 'flertes', emoji: '💞', titulo: 'Flertes Leves', descricao: 'Flertes sutis e charmosos' },
    { id: 'encerrar', emoji: '🚫', titulo: 'Mensagens para Encerrar com Classe', descricao: 'Como encerrar respeitosamente' },
    { id: 'assistente', emoji: '🤖', titulo: 'Chat Assistente IA', descricao: 'Cole sua conversa e receba sugestões com IA' },
    { id: 'chatia', emoji: '💬', titulo: 'Chat IA Completo', descricao: 'Converse com a IA como especialista em relacionamentos' }
  ];

  const copiarMensagem = (mensagem, index) => {
    navigator.clipboard.writeText(mensagem);
    setMensagemCopiada(index);
    setTimeout(() => setMensagemCopiada(null), 2000);
  };

  const voltarMenu = () => {
    setCategoriaAtiva(null);
    setConversaAtiva(null);
    setChatAssistente(false);
    setConversaReal('');
    setSugestoes([]);
    setAnalisandoIA(false);
    setFonteIA('');
    setImagemSelecionada(null);
    setProcessandoImagem(false);
    setModoChat(false);
    setHistoricoChat([]);
    setMensagemUsuario('');
    setIaRespondendo(false);
  };

  const voltarMensagens = () => {
    setConversaAtiva(null);
  };

  const verExemplo = (mensagem) => {
    const conversa = exemploConversa[mensagem] || exemploConversa["generico"];
    // Substitui a primeira mensagem genérica pela mensagem escolhida
    if (conversa === exemploConversa["generico"]) {
      conversa[0].mensagem = mensagem;
    }
    setConversaAtiva(conversa);
  };

  const abrirChatAssistente = () => {
    setChatAssistente(true);
    setCategoriaAtiva('assistente');
    setConfigIA(verificarConfiguracaoIA());
  };

  const abrirChatIA = () => {
    setModoChat(true);
    setCategoriaAtiva('chatia');
    setConfigIA(verificarConfiguracaoIA());
    
    // Mensagem de boas-vindas da IA
    const boasVindas = {
      autor: 'IA',
      texto: "👋 Olá! Sou sua especialista em relacionamentos. Pode me perguntar qualquer coisa sobre conquista, conversas, relacionamentos ou dating. Como posso te ajudar hoje?",
      timestamp: Date.now()
    };
    
    setHistoricoChat([boasVindas]);
  };

  const enviarMensagemParaIA = async () => {
    if (!mensagemUsuario.trim() || iaRespondendo) return;

    const mensagemUser = {
      autor: 'Usuário',
      texto: mensagemUsuario.trim(),
      timestamp: Date.now()
    };

    const novoHistorico = [...historicoChat, mensagemUser];
    setHistoricoChat(novoHistorico);
    setMensagemUsuario('');
    setIaRespondendo(true);

    try {
      const resultado = await conversarComIA(novoHistorico);
      
      if (resultado.sucesso) {
        const respostaIA = {
          autor: 'IA',
          texto: resultado.resposta,
          timestamp: Date.now()
        };
        
        setHistoricoChat(prev => [...prev, respostaIA]);
      } else {
        const respostaErro = {
          autor: 'IA',
          texto: "Desculpe, tive um problema técnico. Pode reformular sua pergunta? Estou aqui para ajudar com relacionamentos e conquista! 😊",
          timestamp: Date.now()
        };
        
        setHistoricoChat(prev => [...prev, respostaErro]);
      }
    } catch (error) {
      console.error('Erro no chat IA:', error);
      const respostaErro = {
        autor: 'IA',
        texto: "Ops! Algo deu errado. Tente novamente! Estou aqui para te ajudar com suas dúvidas sobre relacionamentos. 💪",
        timestamp: Date.now()
      };
      
      setHistoricoChat(prev => [...prev, respostaErro]);
    } finally {
      setIaRespondendo(false);
    }
  };

  const limparChatIA = () => {
    const boasVindas = {
      autor: 'IA',
      texto: "👋 Olá! Sou sua especialista em relacionamentos. Pode me perguntar qualquer coisa sobre conquista, conversas, relacionamentos ou dating. Como posso te ajudar hoje?",
      timestamp: Date.now()
    };
    
    setHistoricoChat([boasVindas]);
  };

  const processarImagem = async (arquivo) => {
    if (!arquivo) return;

    setProcessandoImagem(true);
    setImagemSelecionada(arquivo);

    try {
      const resultado = await extrairTextoDeImagem(arquivo);
      
      if (resultado.sucesso) {
        setConversaReal(resultado.texto);
      } else {
        alert(resultado.erro || 'Erro ao processar imagem');
      }
    } catch (error) {
      alert('Erro ao processar a imagem. Tente novamente.');
    } finally {
      setProcessandoImagem(false);
    }
  };

  const handleImageUpload = (event) => {
    const arquivo = event.target.files[0];
    if (arquivo && arquivo.type.startsWith('image/')) {
      processarImagem(arquivo);
    } else {
      alert('Por favor, selecione uma imagem válida.');
    }
  };

  const analisarConversaComIA = async () => {
    if (!conversaReal.trim()) return;
    
    setAnalisandoIA(true);
    setSugestoes([]);
    setFonteIA('');
    
    try {
      const resultado = await gerarSugestoesComIA(conversaReal);
      
      if (resultado.sucesso) {
        setSugestoes(resultado.sugestoes);
        setFonteIA(resultado.fonte);
      } else {
        // Fallback caso algo dê errado
        setSugestoes([
          "Ops! Algo deu errado. Tente novamente em alguns segundos.",
          "Verifique sua conexão e tente mais uma vez.",
          "Se o problema persistir, verifique as configurações da IA."
        ]);
        setFonteIA('Erro');
      }
    } catch (error) {
      console.error('Erro ao analisar conversa:', error);
      setSugestoes([
        "Erro ao conectar com a IA. Usando análise local.",
        "Verifique sua configuração de API ou conexão de internet."
      ]);
      setFonteIA('Erro');
    } finally {
      setAnalisandoIA(false);
    }
  };

  const copiarSugestao = (sugestao, event) => {
    navigator.clipboard.writeText(sugestao);
    // Feedback visual melhorado
    const btn = event.target;
    const textoOriginal = btn.textContent;
    btn.textContent = '✅ Copiado!';
    btn.style.background = '#28a745';
    
    setTimeout(() => {
      btn.textContent = textoOriginal;
      btn.style.background = '#28a745';
    }, 2000);
  };

  const limparImagem = () => {
    setImagemSelecionada(null);
    setConversaReal('');
    setSugestoes([]);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1> Domine a Arte da Conquista</h1>
          <p>Sua assistente inteligente para conversas autênticas</p>
        </header>

        {modoChat ? (
          <div className="chat-ia-container">
            <div className="chat-ia-header">
              <button className="btn-voltar" onClick={voltarMenu}>
                ← Voltar ao Menu
              </button>
              <h2>💬 Chat IA Completo - Especialista em Relacionamentos</h2>
            </div>
            
            <div className="chat-ia-content">
              {!configIA.groqConfigured && (
                <div className="config-ia-aviso">
                  <h3>⚡ Configure a IA Gratuita para Melhores Respostas!</h3>
                  <p>🎯 <strong>Recomendado:</strong> Configure a API Groq (100% gratuita):</p>
                  <ol>
                    <li>Acesse: <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer">https://console.groq.com/keys</a></li>
                    <li>Crie uma conta gratuita</li>
                    <li>Gere sua API Key</li>
                    <li>Cole no arquivo <code>.env</code> na pasta do projeto</li>
                  </ol>
                  <p>📝 <strong>Sem configuração:</strong> O sistema usará análise local (também muito boa!)</p>
                </div>
              )}

              <div className="chat-ia-instrucoes">
                <h3>💡 Como usar o Chat IA:</h3>
                <div className="exemplos-perguntas">
                  <h4>💬 Exemplos de perguntas que você pode fazer:</h4>
                  <div className="exemplos-grid">
                    <div className="exemplo-card" onClick={() => setMensagemUsuario("Como iniciar uma conversa com uma mulher que nunca falei?")}>
                      "Como iniciar uma conversa com uma mulher que nunca falei?"
                    </div>
                    <div className="exemplo-card" onClick={() => setMensagemUsuario("Ela não está respondendo minhas mensagens, o que fazer?")}>
                      "Ela não está respondendo minhas mensagens, o que fazer?"
                    </div>
                    <div className="exemplo-card" onClick={() => setMensagemUsuario("Como chamar uma mulher para sair de forma natural?")}>
                      "Como chamar uma mulher para sair de forma natural?"
                    </div>
                    <div className="exemplo-card" onClick={() => setMensagemUsuario("Estou nervoso para o primeiro encontro, alguma dica?")}>
                      "Estou nervoso para o primeiro encontro, alguma dica?"
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat-ia-historico">
                <div className="chat-ia-header-conversa">
                  <h4>💬 Conversa com a IA</h4>
                  <button onClick={limparChatIA} className="btn-limpar-chat">
                    🗑️ Limpar Chat
                  </button>
                </div>

                <div className="chat-ia-mensagens">
                  {historicoChat.map((msg, index) => (
                    <div key={index} className={`chat-ia-mensagem ${msg.autor.toLowerCase()}`}>
                      <div className="chat-ia-avatar">
                        {msg.autor === 'IA' ? '🤖' : '👤'}
                      </div>
                      <div className="chat-ia-conteudo">
                        <div className="chat-ia-autor">{msg.autor === 'IA' ? 'Especialista IA' : 'Você'}</div>
                        <div className="chat-ia-texto">{msg.texto}</div>
                      </div>
                    </div>
                  ))}
                  
                  {iaRespondendo && (
                    <div className="chat-ia-mensagem ia">
                      <div className="chat-ia-avatar">🤖</div>
                      <div className="chat-ia-conteudo">
                        <div className="chat-ia-autor">Especialista IA</div>
                        <div className="chat-ia-digitando">
                          <span>Pensando na melhor resposta</span>
                          <div className="typing-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="chat-ia-input">
                <div className="input-chat-container">
                  <textarea
                    value={mensagemUsuario}
                    onChange={(e) => setMensagemUsuario(e.target.value)}
                    placeholder="Digite sua pergunta sobre relacionamentos, conquista, dating..."
                    className="textarea-chat-ia"
                    rows={3}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        enviarMensagemParaIA();
                      }
                    }}
                  />
                  <button 
                    onClick={enviarMensagemParaIA}
                    className="btn-enviar-chat"
                    disabled={!mensagemUsuario.trim() || iaRespondendo}
                  >
                    {iaRespondendo ? '🔄' : '📤'}
                  </button>
                </div>
                <p className="dica-chat">💡 Pressione Enter para enviar ou Shift+Enter para quebrar linha</p>
              </div>
            </div>
          </div>
        ) : chatAssistente ? (
          <div className="chat-assistente-container">
            <div className="chat-assistente-header">
              <button className="btn-voltar" onClick={voltarMenu}>
                ← Voltar ao Menu
              </button>
              <h2>🤖 Chat Assistente com IA</h2>
            </div>
            
            <div className="chat-assistente-content">
              {!configIA.groqConfigured && (
                <div className="config-ia-aviso">
                  <h3>⚡ Configure a IA Gratuita para Respostas Mais Precisas!</h3>
                  <p>🎯 <strong>Recomendado:</strong> Configure a API Groq (100% gratuita) para respostas contextualmente perfeitas:</p>
                  <ol>
                    <li>Acesse: <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer">https://console.groq.com/keys</a></li>
                    <li>Crie uma conta gratuita</li>
                    <li>Gere sua API Key</li>
                    <li>Cole no arquivo <code>.env</code> na pasta do projeto</li>
                  </ol>
                  <p>📝 <strong>Sem configuração:</strong> O sistema usará análise local inteligente (também muito boa!)</p>
                </div>
              )}
              
              <div className="instrucoes">
                <h3>📋 Como usar:</h3>
                <ol>
                  <li>📸 <strong>Envie uma imagem</strong> (print da conversa) OU cole o texto</li>
                  <li>🤖 Clique em "Analisar com IA"</li>
                  <li>💡 Receba sugestões {configIA.groqConfigured ? 'com IA Groq' : 'com análise inteligente'}</li>
                  <li>📋 Copie e adapte as sugestões para seu estilo</li>
                </ol>
              </div>

              <div className="upload-section">
                <h4>📸 Enviar Print da Conversa:</h4>
                <div className="upload-container">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="input-imagem"
                    id="upload-imagem"
                    disabled={processandoImagem}
                  />
                  <label htmlFor="upload-imagem" className={`btn-upload ${processandoImagem ? 'processando' : ''}`}>
                    {processandoImagem ? (
                      <span>🔄 Processando imagem...</span>
                    ) : (
                      <span>📸 Selecionar Imagem</span>
                    )}
                  </label>
                  
                  {imagemSelecionada && (
                    <div className="imagem-preview">
                      <img 
                        src={URL.createObjectURL(imagemSelecionada)} 
                        alt="Preview da conversa"
                        className="preview-img"
                      />
                      <button onClick={limparImagem} className="btn-remover">
                        ❌ Remover
                      </button>
                    </div>
                  )}
                </div>
                <p className="dica-upload">💡 Tire um print da conversa no WhatsApp, Instagram, Tinder, etc.</p>
              </div>
              
              <div className="conversa-input">
                <h4>💬 Ou cole sua conversa aqui:</h4>
                <textarea
                  value={conversaReal}
                  onChange={(e) => setConversaReal(e.target.value)}
                  placeholder="Exemplo:
Ela: Oi! Como foi seu dia?
Você: Foi legal! E o seu?
Ela: Foi corrido no trabalho, mas agora tô relaxando 😊
Você: [aguardando sugestão...]"
                  rows={8}
                  className="textarea-conversa"
                />
                
                <button 
                  onClick={analisarConversaComIA}
                  className="btn-analisar"
                  disabled={!conversaReal.trim() || analisandoIA}
                >
                  {analisandoIA ? (
                    <span>🔄 Analisando...</span>
                  ) : (
                    <span>🤖 Analisar com IA</span>
                  )}
                </button>
              </div>
              
              {sugestoes.length > 0 && (
                <div className="sugestoes-container">
                  <div className="sugestoes-header">
                    <h4>💡 Sugestões geradas:</h4>
                    <span className="fonte-ia">
                      📡 {fonteIA} {configIA.groqConfigured && fonteIA === 'Groq AI' ? '⚡' : '🔧'}
                    </span>
                  </div>
                  <div className="sugestoes-lista">
                    {sugestoes.map((sugestao, index) => (
                      <div key={index} className="sugestao-card">
                        <p>{sugestao}</p>
                        <button 
                          onClick={(event) => copiarSugestao(sugestao, event)}
                          className="btn-copiar-sugestao"
                        >
                          📋 Copiar
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="dica-sugestoes">
                    <p>💡 <strong>Dica:</strong> Adapte as sugestões para sua personalidade e contexto da conversa!</p>
                    {fonteIA === 'Análise Local Inteligente' && (
                      <p>⚡ <strong>Upgrade:</strong> Configure a API Groq para respostas ainda mais precisas!</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : conversaAtiva ? (
          <div className="conversa-container">
            <div className="conversa-header">
              <button className="btn-voltar" onClick={voltarMensagens}>
                ← Voltar às Mensagens
              </button>
              <h2>💬 Exemplo de Conversa Completa</h2>
            </div>
            
            <div className="conversa-chat">
              {conversaAtiva.map((msg, index) => (
                <div key={index} className={`mensagem-chat ${msg.tipo}`}>
                  <div className="avatar">
                    {msg.tipo === 'ele' ? '👨' : '👩'}
                  </div>
                  <div className="mensagem-texto">
                    <span className="nome">{msg.tipo === 'ele' ? 'Você' : 'Ela'}</span>
                    <p>{msg.mensagem}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="conversa-footer">
              <p>💡 <strong>Resultado:</strong> Encontro marcado com sucesso! 🎉</p>
              <p>📝 <strong>Dica:</strong> Adapte o exemplo para sua personalidade e contexto real.</p>
            </div>
          </div>
        ) : !categoriaAtiva ? (
          <div className="menu-categorias">
            <h2>Escolha uma categoria:</h2>
            <div className="categorias-grid">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  className="categoria-card"
                  onClick={() => {
                    if (categoria.id === 'assistente') {
                      abrirChatAssistente();
                    } else if (categoria.id === 'chatia') {
                      abrirChatIA();
                    } else {
                      setCategoriaAtiva(categoria.id);
                    }
                  }}
                >
                  <div className="categoria-emoji">{categoria.emoji}</div>
                  <h3>{categoria.titulo}</h3>
                  <p>{categoria.descricao}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mensagens-container">
            <div className="categoria-header">
              <button className="btn-voltar" onClick={voltarMenu}>
                ← Voltar ao Menu
              </button>
              <h2>
                {categorias.find(c => c.id === categoriaAtiva)?.emoji}{' '}
                {categorias.find(c => c.id === categoriaAtiva)?.titulo}
              </h2>
            </div>
            
            <div className="mensagens-lista">
              {mensagensData[categoriaAtiva]?.map((mensagem, index) => (
                <div key={index} className="mensagem-card">
                  <p>{mensagem}</p>
                  <div className="mensagem-acoes">
                    <button
                      className={`btn-copiar ${mensagemCopiada === index ? 'copiado' : ''}`}
                      onClick={() => copiarMensagem(mensagem, index)}
                    >
                      {mensagemCopiada === index ? '✓ Copiado!' : '📋 Copiar'}
                    </button>
                    <button
                      className="btn-exemplo"
                      onClick={() => verExemplo(mensagem)}
                    >
                      💬 Ver Exemplo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="app-footer">
          <p>💡 Dica: Sempre seja respeitoso, autêntico e genuíno em suas conversas!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
