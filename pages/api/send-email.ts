import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email, mensagem, to } = req.body;

  if (!nome || !email || !mensagem || !to) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    // Configuração do transporte do nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Ou outro serviço de email, como Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Seu email
        pass: process.env.EMAIL_PASS, // Sua senha ou app password
      },
    });

    // Configuração do email
    const mailOptions = {
      from: email,
      to,
      subject: `Contato de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return res.status(500).json({ message: "Erro ao enviar o email" });
  }
}
