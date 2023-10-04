import Fastify from 'fastify'

// import firstRoute from './first-route'

const server = Fastify({ logger: true })

server.get('/ping', async (request, reply) => {
  return { hello: 'world2' }
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})