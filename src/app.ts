import fastify, { FastifyServerOptions } from "fastify";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)

	app.get("/ping", async () => "SERVER");
	return app
}
export default App