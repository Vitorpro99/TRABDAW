import mongoose from "mongoose";

// const conexao = await mongoose.conect('mongodb://localhost:27017/5info_vitor')
const conexao = await mongoose.connect('mongodb://vitor5info:mongo1505@ac-ctde5hw-shard-00-00.xdysyix.mongodb.net:27017,ac-ctde5hw-shard-00-01.xdysyix.mongodb.net:27017,ac-ctde5hw-shard-00-02.xdysyix.mongodb.net:27017/?ssl=true&replicaSet=atlas-pttzkl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');


export default conexao;
