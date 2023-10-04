export const handleGetArticle = () => {
  const article = {
    id: "1",
    name: "node.js fastify cont",
    desc: "описание и тест статей"
  }
  return { articles: [article] }
}

export default {
  handleGetArticle
}