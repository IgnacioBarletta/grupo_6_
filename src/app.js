const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs")
app.set('views','./src/views')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicpath = path.resolve(__dirname, '../public');

app.use(express.static(publicpath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});
app.get('/', (req,res) => {
    res.render('index', {
        tittle:'productos'
    });
});


const aboutRoutes = require('./routes/aboutRoutes');
app.use('/about', aboutRoutes);

const mainRoutes = require('./routes/mainRoutes');
app.use('/main', mainRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/booking', bookingRoutes);

const userRoutes = require ('./routes/usersRoutes');
app.use('/users', userRoutes);



