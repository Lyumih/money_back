import { FastifyInstance } from 'fastify';

const articleRouter = async (app: FastifyInstance) => {
  const article = {
    id: "1",
    name: "node.js fastify",
    desc: "описание и тест статей"
  }

  app.get("/", () => {
    return {articles: [article]}
  })

}

export default articleRouter