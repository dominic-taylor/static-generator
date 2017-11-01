fs = require('fs');
let model  = require('./index.json');


fs.readFile('./index.template.html','utf8', (err, data) => {
  if (err) throw err;
  data = data.replace('{title}', model.title);
  data = data.replace('{post-title}','<h1>'+ model.body.h1+'</h1>')	
  data = data.replace('{post-body}','<p>'+ model.body.p+'</p>')	
  // console.log('index ', index)
  fs.writeFile('index.html', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
});


// node create (index/blog)html from filename
// 