// const express = require("express");
// const path = require('path');
// const app = express();

 


// const middleware = (req, res, next) =>{
//     console.log(req.url)
// }

// app.get('/:param1', (req, res) =>{
//     const {name, lastname} =req.query;
//     const {param1} = req.params;
//     // console.log(req.query);
//     // console.log(req.params);

//     console.log(name, lastname)
//     console.log(param1);
//     res.send('Hello ' + name);
// })


// //Serve static files

// app.get('/', (req, res) =>{
//     res.sendFile('index.html', { root: path.join(__dirname, './public') })
// })




// app.listen(3000, () => console.log("Server in port 3000"));




const express = require("express");
const app = express();


app.get('/:param1', (req, res) =>{
    const {nombre} =req.query;
    const {param1} = req.params;
    // console.log(req.query);
    // console.log(req.params);

    // console.log(nombre)
    // console.log(param1);
    res.type('text/html');
    res.send('<h1>Hola ' + nombre + '!</h1>');
    
})



app.listen(3000, () => console.log("Server in port 3000"));








// const express = require("express");
// const app = express();




// app.get('/', (req, res) =>{
//     console.log(req.query);
//     console.log(req.params);
//     res.send('Hello / ');
// })


// // app.post('/', (req, res) =>{
// //     console.log(req.params);
// //     console.log(req.body);

// //     res.send(post);
// // })




// app.listen(3000, () => console.log("Server in port 3000"));
