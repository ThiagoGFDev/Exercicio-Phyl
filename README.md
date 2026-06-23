# Projeto feito em sala e completado por Thiago Gomes Ferreira (2021011082) e Gustavo Barbosa Gonçalves (2024012987)
# Thiago fez o Update e Gustavo o delete

# Como inicializar o projeto:

Primeiramente abra o terminal, em seguida siga os passos abaixo:

Backend: 

1 - Entre na pasta backend com cd backend
2 - Crie o arquivo .env com o valor DATABASE_URL="file:./app.db"
3 - Digite npm install para instalar as dependências
4 - Digite npx prisma generate para gerar o banco de dados
5 - Inicialize digitando npm run dev

Frontend:

1 - Entre na pasta frontend com cd frontend
2 - Crie um arquivo .env.local com o valor NEXT_PUBLIC_API_URL=http://localhost:3001
3 - Digite npm install para instalar as dependências
4 - Inicialize digitando npm run dev

OBS: Para abrir o studio no navegador digite npx prisma studio