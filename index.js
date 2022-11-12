// Utilisation .env
require('dotenv').config();


// Serveur Express
const express = require('express');
const app = express();
app.set('views', './views'); // Dossier des vues
app.set('view engine', 'ejs'); // Moteur de rendu
const datas = require('./data/articles.json');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {datas})
});

app.get('/article/:id', (req, res) => {
    const id = Number(req.params.id);
    const found = datas.find(article => article.id === id);
    console.log(found);

    res.render('article',{article : found} )
    
    
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});