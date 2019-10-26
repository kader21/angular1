mongoimport --db SUPERVENTES --collection membres --file membres.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection produits --file produits.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection paniers --file panier.json --jsonArray --drop

export NODE_PATH='/usr/lib/node_modules'