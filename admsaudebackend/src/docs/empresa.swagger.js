/**
 * @swagger
 * components:
 *   schemas:
 *     Empresa:
 *       type: object
 *       required:
 *         - nome
 *         - cnpj
 *       properties:
 *         id:
 *           type: string
 *           description: ID único da empresa
 *         nome:
 *           type: string
 *           description: Nome da empresa
 *         cnpj:
 *           type: string
 *           description: CNPJ da empresa
 *         endereco:
 *           type: string
 *           description: Endereço da empresa
 *         telefone:
 *           type: string
 *           description: Telefone da empresa
 *         email:
 *           type: string
 *           description: Email da empresa
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *         prestadores:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Prestador'
 *           description: Lista de prestadores associados à empresa
 *         lancamentos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Lancamento'
 *           description: Lista de lançamentos associados à empresa
 */

/**
 * @swagger
 * tags:
 *   name: Empresas
 *   description: API de gerenciamento de empresas
 */

/**
 * @swagger
 * /api/empresas:
 *   get:
 *     summary: Retorna a lista de empresas
 *     tags: [Empresas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         description: Nome da empresa para filtrar
 *       - in: query
 *         name: cnpj
 *         schema:
 *           type: string
 *         description: CNPJ da empresa para filtrar
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Quantidade de itens por página
 *     responses:
 *       200:
 *         description: Lista de empresas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Empresa'
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 total:
 *                   type: integer
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Empresas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empresa'
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /api/empresas/{id}:
 *   get:
 *     summary: Retorna uma empresa específica
 *     tags: [Empresas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Empresa não encontrada
 *       500:
 *         description: Erro interno do servidor
 * 
 *   put:
 *     summary: Atualiza uma empresa existente
 *     tags: [Empresas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empresa'
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Empresa não encontrada
 *       500:
 *         description: Erro interno do servidor
 * 
 *   delete:
 *     summary: Remove uma empresa
 *     tags: [Empresas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa removida com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Empresa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */ 