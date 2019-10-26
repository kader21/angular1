const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function(req,res,next){

	res.setHeader('Access-Control-allow-origin', '*');
	res.setHeader('Access-Control-allow-Methods', 'GET,POST,PUT,DELETE');
	res.setHeader('Access-Control-allow-HEADERS', '*');
	next();
});

//app.use(require("cors")); il remplace les 4 lignes precedentes 

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser:true}, {useUnifiedTopology: true}, (err, client) => {
	let db = client.db("SUPERVENTES");

/*listes des produits*/


	// app.get("/",(req,res)=>{
 //       res.end("Bonjour");
	// });

	app.get("/produits", (req,res) => { 
  		console.log("/produits");
 	 	try {
  			db.collection("produits").find().toArray((err,documents) => {
  				res.end(JSON.stringify(documents));
  			});
  		}
  		catch(e){
  			console.log("Erreur sur /produits: " + e);
  			res.end(JSON.stringify([]));
  		}
});
    app.get("/membres", (req,res) => { 
  		console.log("/membres");
 	 	try {
  			db.collection("membres").find().toArray((err,documents) => {
  				res.end(JSON.stringify(documents));
  			});
  		}
  		catch(e){
  			console.log("Erreur sur /membres: " + e);
  			res.end(JSON.stringify([]));
  		}




});



});














	/*app.get("/produits/:categorie",(req,res)=>{
		let categorie = req.params.categorie;
		console.log("/produits/"+categorie);
		try{
			db.collection("produits").find({type:categorie}).toArray((err,documents) => {
  				res.end(JSON.stringify(documents));
  			});
  		}
  		catch(e){
  			console.log("Erreur sur /produits/"+categorie+" : " + e);
  	     	res.end(JSON.stringify([]));
  		}
	});
/*listes des categories de produits*/


	/*app.get("/categories",(req,res)=>{
		console.log("/categories");
		categorie=[];
		try {
			db.collection("produits").find().toArray((err,documents)=>{
    			for (let doc of documents) {
    				if (!categories.includes(doc.type)) categories.push(doc.type);
    			}
				console.log("Renvoi de"+JSON.stringify(categories));
				res.end(JSON.stringify(categories));
			});
		} catch(e) {
				console.log("Erreur sur / categories: " + e );
				res.end(JSON.stringify([]));
		}
	});
	

	/*connexion*/

	app.post("/membre/connexion", (req,res)=>{
		console.log("/utilisateurs/connexion avec "+JSON.stringify(req.body));
		try{
			db.collection("membres")
			.find(req.body)
			.toArray((err,documents)=>{
				if(documents.length==1)
					res.end(JSON.stringify({"resultat": 1, "message":"Authentification réussie"}));
				else res.end(JSON.stringify({"resultat":0,
					"message":"Email et / ou mot de passe incorrect"}));
			});
		}catch (e){
			res.end(JSON.stringify({"resultat": 0, "message": e}));
		}
	});



app.listen(8888);
