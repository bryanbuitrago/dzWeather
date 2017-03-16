var expressSanitizer = require('express-sanitizer'),
methodOverride       = require('method-override'),
bodyParser           = require('body-parser'),
mongoose             = require('mongoose'),
express              = require('express'),
app                  = express(),
port                 = process.env.PORT || 3000;

// APP CONFIG
mongoose.connect('mongodb://localhost/dz_weather');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// MONGOOSE/MODEL CONFIG
var dzSchema = new mongoose.Schema({

});

// RESTFUL ROUTES
app.get('/', (req, res) => {
  res.send('home page');
});

// INDEX ROUTE
app.get('/dropzones', (req, res) => {
  res.send('show all the dropzones');
});

// NEW ROUTE
app.get('/dropzones/new', (req, res) => {
  res.send('show new dropzone form');
});

// CREATE ROUTE
app.post('/dropzones', (req, res) => {
  res.send('create a new dropzone, then redirect somewhere')
});

// SHOW ROUTE
app.get('/dropzones/:id', (req, res) => {
  res.send('show info about one specific dropzone');
});

// EDIT ROUTE
app.get('/dropzones/:id/edit', (req, res) => {
  res.send('Show edit form for one dropzone');
});

// UPDATE ROUTE
app.put('/dropzones/:id', (req, res) => {
  res.send('Update a particular post, then redirect somewhere');
});

// DELETE ROUTE
app.delete('/dropzones/:id', (req, res) => {
  res.send('delete a particular dropzone, then redirect somewhere');
});

