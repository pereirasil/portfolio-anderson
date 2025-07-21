# ADM Saúde Backend

Backend API for ADM Saúde project built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- CRUD operations for Empresas, Prestadores, and Lancamentos
- Informativos management
- Pagination and filtering for Lancamentos
- Secure password hashing
- CORS enabled
- MongoDB integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd admsaudebackend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/admsaude
JWT_SECRET=your-super-secret-key-change-this-in-production
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user info

### Empresas
- GET /api/empresas - List all empresas
- POST /api/empresas - Create new empresa
- PUT /api/empresas/:id - Update empresa
- DELETE /api/empresas/:id - Delete empresa

### Prestadores
- GET /api/prestadores - List all prestadores
- POST /api/prestadores - Create new prestador
- PUT /api/prestadores/:id - Update prestador
- DELETE /api/prestadores/:id - Delete prestador

### Lancamentos
- GET /api/lancamentos - List all lancamentos (with filters)
- POST /api/lancamentos - Create new lancamento
- PUT /api/lancamentos/:id - Update lancamento
- DELETE /api/lancamentos/:id - Delete lancamento

### Informativos
- GET /api/informativos - List all informativos
- POST /api/informativos - Create new informativo
- PUT /api/informativos/:id - Update informativo
- DELETE /api/informativos/:id - Delete informativo

## Development

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm test` - Run tests

## Security

- All routes (except login/register) require JWT authentication
- Passwords are hashed using bcrypt
- CORS is enabled for frontend domain
- Environment variables for sensitive data

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error 