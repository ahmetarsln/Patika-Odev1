const fs= require('fs');
//console.log("Hello WORLD");

fs.writeFile('employees.json',' {"name": "Employee 1 Name", "salary": 2000}; ','utf8',(err)=>{
    if(err) console.log(err);
    console.log("employees.json dosyası oluşturuldu");
});
fs.readFile('employees.json','utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
  fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', (err,data) => {
    if (err)  console.log(err);
    console.log(data);
  });
  fs.rmdir('employees.json',{recursive:true}, (err) => {
    if (err) console.log(err);
    console.log('employees.json dosyası silindi');
  });