/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ init express
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
import express, { NextFunction, Request, Response } from 'express';

const app = express();

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ usar middleware em todas as rotas
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function showPath(req:Request, res: Response, next: NextFunction) {
    console.log("executando no meio");
    return next();
}
app.use(showPath);


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ habilitar json
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.use(express.json());

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ rota Get
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get('/', (req, res) => {
    return res.send("Hello express!");
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ rota Post
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.post('/api/product', (req, res) => {
    console.log(req.body);
    return res.send("Produto adicionado");
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ rota para aceitar todos os verbos
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.all('/api/product/check', (req, res) => {
    return res.send(`O metodo usado foi: ${req.method}`)
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ interface do express
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get("/api/interface", (req: Request, res: Response) => {
    return res.send("Usando interfaces");
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ enviando json
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        Nome: "Alexandre",
        Idade: 38,
        Profissão: "Programador",
        Interesses: ["Jogos", "Leitura", "Quebra Cabeças"],
        Esposa: {
            Nome: "Deise",
            Idade: "43"
        }
    });
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ router params
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get("/api/product/:id/:MeuParam2", (req: Request, res: Response) => {
    return res.send(`Parametros informados: Id: ${req.params.id} e MeuParam2: ${req.params.MeuParam2}`);
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ router complexas
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get("/api/product/:id/reviews/:reviewId", (req: Request, res: Response) => {
    return res.send(`Parametros informados: Id: ${req.params.id} e ReviewId: ${req.params.reviewId}`);
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ router complexas
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function getUser(req:Request, res: Response): Response<any, Record<string, any>> {
    return res.send(`Realizada busca do usuário ${req.params.id}`);
}
app.get("/api/user/:id", getUser);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ middleware
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
function checkUser(req:Request, res: Response, next: NextFunction) {
    if (req.params.id === '10') {
        return next();
    } else {
        return res.send("Usuário nao autorizado.");
    }
}

app.post("/api/user/:id/access", checkUser, (req:Request, res: Response) => {
    return res.send(`Bem vindo usupario ${req.params.id}`);
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ middleware em todas as rotas
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//! logo abaixo de const app = express();

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ req e res com generics
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get(
    "/api/user/:id/details/:name",
    (
        req: Request<{id: string, name: string}>, 
        res: Response<{msg: string, status: boolean}>
    ) => {
        const msg: string = `Oi ${req.params.name}. Seu código é ${req.params.id}`;
        return res.send({msg, status: false});
    }
);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ tratando erro
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.get('/api/error', (req:Request, res: Response) => {
    try {
        
        throw new Error("Deu erro!");
    } catch (e: any) {
        //res.statusCode = 500;
        res.status(500).send({
            msg: e.message
        })
    }
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.listen(3000, () => {
    console.log('Aplicação de TS + Express funcionado.');
})


//! pra rodar: npm run dev