import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import userRoutes2 from './controllers/userControlles2';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api', userRoutes2);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* processo 1
  + criada pasta controller, e o arquivo userController, onde é criada a funções referentes a user
  + criada a pasta Routes, e o arquivo userRoutes, onde é importada tudo de userController e amarrado caminhos e verbos a cada função
  + criada na pasta Routes um arquivo Index.ts (o gerenciador principal de todas as rotas), onde é importado userRoutes e amarrado tudo a um caminho base ('/users')
  + no arquivo app.ts é importada então as Routes, e amarrada ao caminho principal ('/api')

*/