const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@restapimongodb.jq4pewc.mongodb.net/myFirstDB?retryWrites=true&w=majority`,
    env: "development"
};