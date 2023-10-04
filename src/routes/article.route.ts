import { FastifyInstance } from 'fastify';
import { articleController } from '../controllers';

const articleRouter = async (app: FastifyInstance) => {
  const article = {
    id: "1",
    name: "node.js fastify",
    desc: "описание и тест статей"
  }

  app.get("/", articleController.handleGetArticle)

}

export default articleRouter