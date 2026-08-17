// src/server.ts
import Fastify from 'fastify';

const fastify = Fastify({
  logger: true 
});

fastify.get('/api/v1/health', async (request, reply) => {
  return { status: 'OK', message: 'Servern körs perfekt!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
