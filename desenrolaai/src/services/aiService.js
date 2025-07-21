import Groq from 'groq-sdk';
import { createWorker } from 'tesseract.js';

// Configuração do Groq (IA Gratuita)
const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Necessário para usar no browser
});

// Função para extrair texto de imagem usando OCR
export const extrairTextoDeImagem = async (imagemFile) => {
  try {
    const worker = await createWorker('por+eng'); // Português e Inglês
    
    const { data: { text } } = await worker.recognize(imagemFile);
    await worker.terminate();
    
    // Limpa o texto extraído
    const textoLimpo = text
      .replace(/\n+/g, '\n') // Remove quebras de linha excessivas
      .replace(/\s+/g, ' ') // Remove espaços excessivos
      .trim();
    
    return {
      sucesso: true,
      texto: textoLimpo,
      erro: null
    };
  } catch (error) {
    console.error('Erro no OCR:', error);
    return {
      sucesso: false,
      texto: '',
      erro: 'Erro ao processar a imagem. Tente com uma imagem mais nítida.'
    };
  }
};

// Sistema de análise local inteligente como fallback
const analisarContextoLocal = (conversa) => {
  const linhas = conversa.split('\n').filter(linha => linha.trim());
  const ultimaMensagemDela = linhas[linhas.length - 1]?.toLowerCase() || '';
  
  // Análise mais sofisticada do contexto
  const contextos = {
    trabalho: ['trabalho', 'emprego', 'profissão', 'carreira', 'escritório', 'chefe', 'colega', 'reunião'],
    viagem: ['viagem', 'viajar', 'praia', 'país', 'cidade', 'turismo', 'férias', 'aventura'],
    entretenimento: ['música', 'filme', 'série', 'livro', 'netflix', 'spotify', 'cinema', 'show'],
    lazer: ['fim de semana', 'tempo livre', 'hobby', 'esporte', 'academia', 'parque', 'diversão'],
    sentimentos: ['feliz', 'triste', 'cansada', 'animada', 'preocupada', 'estressada', 'relaxando'],
    estudos: ['faculdade', 'universidade', 'curso', 'prova', 'estudo', 'formatura', 'aula'],
    familia: ['família', 'mãe', 'pai', 'irmão', 'irmã', 'avó', 'avô', 'cachorro', 'gato'],
    comida: ['comida', 'restaurante', 'cozinhar', 'receita', 'pizza', 'café', 'jantar', 'almoço']
  };
  
  let contextoDetectado = 'geral';
  let pontuacaoMaxima = 0;
  
  Object.entries(contextos).forEach(([categoria, palavras]) => {
    const pontuacao = palavras.reduce((acc, palavra) => {
      return acc + (ultimaMensagemDela.includes(palavra) ? 1 : 0);
    }, 0);
    
    if (pontuacao > pontuacaoMaxima) {
      pontuacaoMaxima = pontuacao;
      contextoDetectado = categoria;
    }
  });
  
  return { contexto: contextoDetectado, intensidade: pontuacaoMaxima };
};

// Sugestões contextualmente inteligentes
const gerarSugestoesContextuais = (contexto, ultimaMensagem) => {
  const sugestoesPorContexto = {
    trabalho: [
      "Que interessante! O que você mais gosta no seu trabalho?",
      "Parece que você é dedicada! Isso é muito atrativo 😊",
      "Deve ser desafiador! Como você consegue equilibrar trabalho e vida pessoal?",
      "Que área legal! Você sempre quis trabalhar com isso?"
    ],
    viagem: [
      "Que demais! Adoro pessoas aventureiras. Qual foi sua viagem mais marcante?",
      "Você tem espírito explorador! Qual o próximo destino dos sonhos?",
      "Viagem é tudo! Me conta mais sobre essa experiência 😄",
      "Que lugar incrível! Você gosta mais de praia ou montanha?"
    ],
    entretenimento: [
      "Temos gostos parecidos! Qual sua recomendação do momento?",
      "Adoro conversar sobre isso! Qual seu gênero favorito?",
      "Que bom gosto! Você me parece ter uma personalidade interessante 😊",
      "Legal! Você é mais de maratonar ou assistir um por vez?"
    ],
    lazer: [
      "Que legal! Você sabe aproveitar a vida 😄",
      "Adoro pessoas que têm hobbies interessantes! Me conta mais",
      "Isso é muito legal! Você poderia me ensinar algum dia?",
      "Parece divertido! Como você descobriu essa paixão?"
    ],
    sentimentos: [
      "Entendo perfeitamente! Como você costuma lidar com isso?",
      "Você é muito transparente, isso é uma qualidade rara 😊",
      "Imagino! O que te ajuda a se sentir melhor?",
      "Que bom que você compartilhou isso comigo!"
    ],
    estudos: [
      "Que dedicada! O que você está estudando?",
      "Admiro pessoas focadas nos estudos! Qual sua área?",
      "Que legal! Você sempre foi boa estudante?",
      "Interessante! O que te motivou a escolher esse curso?"
    ],
    familia: [
      "Que fofo! A família é tudo mesmo 😊",
      "Você parece ser uma pessoa carinhosa com quem ama!",
      "Que legal! Família unida é uma benção",
      "Isso é muito importante! Vocês são próximos?"
    ],
    comida: [
      "Que delícia! Você gosta de cozinhar ou prefere sair para comer?",
      "Adoro pessoas que sabem apreciar uma boa comida! 😄",
      "Interessante! Qual sua comida favorita?",
      "Você me parece ter bom gosto! Conhece algum lugar legal?"
    ],
    geral: [
      "Que interessante! Me conta mais sobre isso 😊",
      "Adoro sua forma de ver as coisas! Você parece ser uma pessoa incrível",
      "Nossa, que legal! Você tem uma personalidade muito atrativa",
      "Fico feliz em conhecer alguém assim! O que mais te deixa feliz na vida?"
    ]
  };
  
  return sugestoesPorContexto[contexto] || sugestoesPorContexto.geral;
};

// Função principal para gerar sugestões com IA
export const gerarSugestoesComIA = async (conversa) => {
  // Primeira tentativa: Groq (IA Gratuita)
  if (process.env.REACT_APP_GROQ_API_KEY && process.env.REACT_APP_GROQ_API_KEY !== 'your_groq_api_key_here') {
    try {
      const prompt = `
Você é um especialista em relacionamentos que ajuda homens a conversar de forma respeitosa e autêntica com mulheres.

Analise esta conversa e gere 3-4 sugestões de resposta que sejam:
- Respeitosas e genuínas
- Que mantenham o interesse dela
- Que façam perguntas envolventes
- Que mostrem interesse real pela pessoa
- Que sejam naturais e não robotizadas

Conversa:
${conversa}

Formate a resposta como um array JSON de strings, exemplo:
["sugestão 1", "sugestão 2", "sugestão 3"]

IMPORTANTE: Responda APENAS com o array JSON, sem explicações extras.
`;

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        model: "llama3-8b-8192", // Modelo gratuito da Groq
        temperature: 0.7,
        max_tokens: 1000,
      });

      const resposta = completion.choices[0]?.message?.content?.trim();
      
      // Tenta fazer parse do JSON
      try {
        const sugestoes = JSON.parse(resposta);
        if (Array.isArray(sugestoes) && sugestoes.length > 0) {
          return {
            sucesso: true,
            sugestoes: sugestoes,
            fonte: 'Groq AI'
          };
        }
      } catch (e) {
        console.log('Erro ao fazer parse da resposta da IA:', e);
      }
      
    } catch (error) {
      console.log('Erro na API Groq:', error.message);
    }
  }
  
  // Fallback: Análise local inteligente
  const analise = analisarContextoLocal(conversa);
  const linhas = conversa.split('\n').filter(linha => linha.trim());
  const ultimaMensagem = linhas[linhas.length - 1] || '';
  
  const sugestoes = gerarSugestoesContextuais(analise.contexto, ultimaMensagem);
  
  return {
    sucesso: true,
    sugestoes: sugestoes.slice(0, 4),
    fonte: 'Análise Local Inteligente',
    contexto: analise.contexto
  };
};

// Função para verificar se a API está configurada
export const verificarConfiguracaoIA = () => {
  const groqKey = process.env.REACT_APP_GROQ_API_KEY;
  
  return {
    groqConfigured: groqKey && groqKey !== 'your_groq_api_key_here',
    recommendation: !groqKey || groqKey === 'your_groq_api_key_here' 
      ? 'Configure sua chave Groq gratuita em https://console.groq.com/keys'
      : 'IA configurada com sucesso!'
  };
}; 

// Função para conversar com a IA como especialista em relacionamentos
export const conversarComIA = async (historicoConversa) => {
  console.log('🤖 [DEBUG] Iniciando conversa com IA:', historicoConversa);
  
  // Monta o contexto da conversa
  const contextoConversa = historicoConversa
    .slice(-10) // Últimas 10 mensagens para manter contexto sem sobrecarregar
    .map(msg => `${msg.autor}: ${msg.texto}`)
    .join('\n');

  // Primeira tentativa: Groq (IA Gratuita)
  const groqKey = process.env.REACT_APP_GROQ_API_KEY;
  
  if (groqKey && groqKey !== 'your_groq_api_key_here') {
    try {
      console.log('🚀 [DEBUG] Usando Groq para conversa...');
      
      const prompt = `Você é uma especialista em relacionamentos e conquista amorosa. Sua missão é ajudar homens a se relacionarem de forma respeitosa, autêntica e eficaz com mulheres.

PERSONALIDADE:
- Amigável e encorajadora
- Dá conselhos práticos e diretos
- Usa exemplos reais quando possível
- Promove sempre o respeito e autenticidade
- Tem um tom caloroso mas profissional
- Usa emojis moderadamente para ser mais humana

ESPECIALIDADES:
- Iniciar conversas (online e pessoalmente)
- Manter o interesse feminino
- Linguagem corporal e comunicação
- Primeiros encontros
- Lidar com rejeições
- Autoconfiança e desenvolvimento pessoal
- Relacionamentos saudáveis

IMPORTANTE:
- SEMPRE promova o respeito e consentimento
- NUNCA apoie comportamentos tóxicos ou manipulativos
- Encoraje autenticidade ao invés de "joguinhos"
- Foque em desenvolvimento pessoal real

Conversa atual:
${contextoConversa}

Responda de forma natural, como uma amiga especialista que realmente se importa em ajudar. Seja específica e dê conselhos práticos.`;

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: prompt
          },
          {
            role: "user", 
            content: historicoConversa[historicoConversa.length - 1]?.texto || "Olá!"
          }
        ],
        model: "llama3-8b-8192",
        temperature: 0.8,
        max_tokens: 800,
      });

      const resposta = completion.choices[0]?.message?.content?.trim();
      
      if (resposta) {
        console.log('✅ [DEBUG] Resposta Groq recebida');
        return {
          sucesso: true,
          resposta: resposta
        };
      }
      
    } catch (error) {
      console.log('❌ [DEBUG] Erro na API Groq para conversa:', error.message);
    }
  }
  
  // Fallback: Respostas locais inteligentes
  console.log('🔧 [DEBUG] Usando respostas locais para conversa...');
  
  const ultimaMensagem = historicoConversa[historicoConversa.length - 1]?.texto?.toLowerCase() || '';
  
  // Análise da intenção da pergunta
  const respostasContextuais = {
    iniciarConversa: [
      "Para iniciar uma conversa, o segredo é ser genuíno! 😊 Comente algo específico do perfil dela ou do contexto onde vocês se encontraram. Por exemplo: 'Vi que você gosta de [hobby], que legal! Como começou nessa área?' É muito melhor que um 'oi' genérico.",
      "A primeira impressão é tudo! Comece com algo que mostre que você prestou atenção nela. Se for online, mencione algo das fotos ou bio dela. Se for pessoalmente, um elogio sincero sobre algo que ela escolheu usar sempre funciona bem.",
      "O melhor starter é sempre uma pergunta interessante! Evite 'tudo bem?' e vá para algo como 'qual foi o highlight do seu fim de semana?' ou comente algo do ambiente onde vocês estão. Isso gera conversa de verdade!"
    ],
    naoResponde: [
      "Se ela não está respondendo, respire fundo! 😌 Pode ser que ela esteja ocupada ou não viu ainda. Não mande várias mensagens seguidas - isso pode parecer desesperado. Aguarde pelo menos 2-3 dias antes de tentar novamente com algo diferente.",
      "Paciência é fundamental! Mulheres recebem muitas mensagens, então não leve para o pessoal imediatamente. Se já faz mais de uma semana, você pode tentar uma última vez com algo engraçado ou interessante. Se ainda assim não responder, é hora de seguir em frente.",
      "Às vezes o timing não está certo. Ela pode estar passando por algo pessoal, muito ocupada no trabalho, ou simplesmente não estar no mood para conversas novas. Não insista - foque sua energia em outras conexões!"
    ],
    chamarSair: [
      "Para chamar para sair, seja específico e confiante! 💪 Ao invés de 'quer sair algum dia?', tente: 'Que tal tomarmos um café sábado à tarde? Conheço um lugar legal no [local]'. Isso mostra iniciativa e facilita para ela dizer sim ou sugerir outro horário.",
      "O segredo é fazer o convite parecer natural na conversa. Se vocês estavam falando sobre café, diga: 'Adoraria continuar essa conversa pessoalmente, que tal aquela cafeteria que você mencionou?' Assim fica orgânico!",
      "Timing é tudo! Não chame para sair na primeira conversa (a menos que seja uma conexão incrível). Esperem vocês trocarem algumas mensagens e criarem um rapport. Aí sim, convide para algo casual como café ou almoço primeiro."
    ],
    nervosismo: [
      "Nervosismo antes do encontro é super normal! 😅 A melhor forma de lidar é se preparar: pense em alguns tópicos de conversa interessantes, escolha um lugar onde você se sinta confortável, e lembre-se que ela também pode estar nervosa!",
      "Transforme o nervosismo em empolgação! Você está conhecendo alguém novo e interessante - isso é incrível! Pratique respiração profunda, chegue alguns minutos mais cedo para se ambientar, e lembre-se: seja você mesmo, é isso que ela quer conhecer.",
      "Alguns truques que funcionam: tome um banho relaxante antes, use uma roupa que te deixe confiante, chegue no local um pouco antes para escolher a mesa, e tenha um plano B caso a conversa trave (perguntas sobre hobbies, viagens, família sempre salvam!)."
    ],
    autoconfianca: [
      "Autoconfiança vem de dentro para fora! 💪 Comece cuidando de você: exercite-se, cuide da aparência, desenvolva seus hobbies e interesses. Quando você está bem consigo mesmo, isso transparece naturalmente nas interações.",
      "Lembre-se: você tem valor único para oferecer! Foque nas suas qualidades positivas, nas suas conquistas, nos seus sonhos. Mulheres são atraídas por homens que têm propósito e paixão pela vida.",
      "Pratique em situações de baixo risco: converse com caixas, atendentes, pessoas aleatórias no dia a dia. Isso treina suas habilidades sociais e aumenta sua confiança gradualmente. Cada pequena interação positiva constrói sua autoestima!"
    ],
    geral: [
      "Que pergunta interessante! 😊 Relacionamentos são sobre conexão genuína. O mais importante é sempre ser autêntico, respeitoso e mostrar interesse real pela pessoa. Que aspecto específico te preocupa mais?",
      "Estou aqui para ajudar! 💪 Cada situação é única, então quanto mais detalhes você me der sobre sua situação específica, melhor posso te orientar. O que exatamente você gostaria de saber?",
      "Ótima pergunta! O segredo do sucesso nos relacionamentos é sempre tratar a outra pessoa com respeito e interesse genuíno. Pode me contar mais sobre sua situação específica para eu te dar conselhos mais direcionados?"
    ]
  };
  
  // Detecta a intenção da pergunta
  let categoria = 'geral';
  
  if (ultimaMensagem.includes('iniciar') || ultimaMensagem.includes('começar') || ultimaMensagem.includes('primeira')) {
    categoria = 'iniciarConversa';
  } else if (ultimaMensagem.includes('não responde') || ultimaMensagem.includes('ignorando') || ultimaMensagem.includes('silêncio')) {
    categoria = 'naoResponde';
  } else if (ultimaMensagem.includes('chamar') || ultimaMensagem.includes('convite') || ultimaMensagem.includes('sair')) {
    categoria = 'chamarSair';
  } else if (ultimaMensagem.includes('nervoso') || ultimaMensagem.includes('ansioso') || ultimaMensagem.includes('medo')) {
    categoria = 'nervosismo';
  } else if (ultimaMensagem.includes('confiança') || ultimaMensagem.includes('autoestima') || ultimaMensagem.includes('inseguro')) {
    categoria = 'autoconfianca';
  }
  
  // Seleciona uma resposta aleatória da categoria
  const respostas = respostasContextuais[categoria];
  const respostaEscolhida = respostas[Math.floor(Math.random() * respostas.length)];
  
  return {
    sucesso: true,
    resposta: respostaEscolhida
  };
}; 