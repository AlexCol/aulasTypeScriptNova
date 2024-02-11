const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3000,
    //!para escolher qual o banco usar, e não criar um 'test', especificar na conection string, após o '.net' o nome do banco
	dbUri: `mongodb+srv://${dbUser}:${dbPassword}@restapimongodb.jq4pewc.mongodb.net/myFirstDB?retryWrites=true&w=majority`,
    env: "development"
};