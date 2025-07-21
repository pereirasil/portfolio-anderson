#!/bin/bash

echo "🔒 Corrigindo problema de segurança do Git..."

# Reset para o commit base
echo "📦 Resetando commits..."
git reset --soft HEAD~2

# Adicionar todos os arquivos (exceto a chave real)
echo "📋 Adicionando arquivos corrigidos..."
git add .

# Criar novo commit sem a chave API
echo "💾 Criando commit seguro..."
git commit -m "🚀 Complete app with AI chat, assistant, and security fixes

✨ Features:
- 💬 Chat IA Completo (like ChatGPT for relationships)
- 🤖 Chat Assistente with OCR image processing  
- 📝 Ready-made messages with examples
- 🔒 Secure API key management (.env.local)

🛡️ Security:
- API keys moved to .env.local (gitignored)
- Sample .env with placeholder values
- Complete documentation for setup

🎯 Tech:
- React + Groq AI integration
- Tesseract.js for OCR
- Modern responsive design
- Local fallback analysis"

echo "🚀 Fazendo push seguro..."
git push

echo "✅ Pronto! Problema de segurança resolvido." 