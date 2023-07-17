import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

dotenv.config();
connectDb();

//configurar CORS 
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: (origin,callback) => {
    console.log(origin);
    if(whitelist.includes(origin) ){
      // puede consultar la api 
      callback(null,true);
    }
 else{
  //no esta permitdo el acceso
  callback(new Error("No permitido por CORS"));
 }}
}
app.use(cors(corsOptions));
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use("/",routes)

const PORT = process.env.PORT || 4000;

const expressServer = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}
);