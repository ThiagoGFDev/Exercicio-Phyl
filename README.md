# Projeto web feito em sala.
completado por Thiago Gomes Ferreira (2021011082) que fez o Update e Gustavo Barbosa Gonçalves (2024012987) que fez o delete.

# Como inicializar o projeto:

Primeiramente abra o terminal, em seguida siga os passos abaixo:

# Inicializando o backend
# 1. Entre na pasta do backend
cd backend

# 2. Instale as dependências
npm install

# 3. Crie o arquivo .env com o seguinte conteúdo:
DATABASE_URL="file:./app.db"

# 4. Gere o banco de dados
npx prisma generate

# 5. Inicialize o servidor
npm run dev

# Inicializando o frontend
# 1. Entre na pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Crie o arquivo .env.local com o seguinte conteúdo:
NEXT_PUBLIC_API_URL=http://localhost:3001

# 4. Inicialize o projeto
npm run dev

# 💡 Dica: Para abrir o Prisma Studio no navegador, execute npx prisma studio dentro da pasta do backend.