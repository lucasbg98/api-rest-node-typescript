import { server } from './server/Server';



server.listen(process.env.PORT, () => {
    console.log(`App rodando na porta ${process.env.PORT}`);
});