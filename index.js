const fs = require('fs'); //เอาไว้อ่านไฟล์ มาจาก file system มันก็คือ import แบบหนึ่ง
const express = require('express'); //เรียกใช้ express
const app = express(); // ประกาศตัวแปลเรียกใช้ express
//กำหนดว่า เราเข้าไปใน part ที่เป็นลิ้งนี้ ก็จะเข้ามาในลิ้งนี้ จะส่งคำว่า Hello , express เข้าในเว้บ backend
app.get('/', (req , res ) => {
    res.send('Hello , express');
})
const PORT = process.env.PORT || 5000; // ประกาศตัวแปล , เอาเลข 5000 ที่เป็น str มาต่อตูด 
app.listen(PORT , () => console.log(` sever is runing on port ${PORT}`));  // เหมือนการเรียกใช้ port 5000 (เรากำหนด)จากบรรทัดที่ 6
const cors = require("cors"); 
// const { SSL_OP_EPHEMERAL_RSA } = require('constants');

const corsOptions = { origin:'*', credentials:true, }
app.use(cors(corsOptions)) 
const csv = require('csv-parser')
const results = [];


app.get('/csv/*',async function(req, res){
    var origin = req.params; 
    const results = [];
    fs.createReadStream(`./covidd/csv/${origin[0]}`)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.send(results)
    });
})

make_dir = async(pathname, origin) => 
{

    var key = await new Promise((resolve, reject) => 
    {
            fs.readdir(pathname, (err, files) => {
            resolve(files)
            //console.log(files)
        })
    })
    
    var tmp_arr = [];
    for(let i=0 ; i<key.length ; i++){
        if (!key[i].includes('.dcm') && !key[i].includes('.csv')){
            var obj = {};
            obj['label'] = key[i];
            var tmp_key = origin + '-' + i;
            if(origin === ''){
                tmp_key =  i.toString();
            }
            obj[`key`] = tmp_key
            var children = await make_dir(pathname + '/' + key[i], tmp_key)
            obj[`nodes`] = children
            tmp_arr.push(obj)
        }
        else{
            var obj = {};
            obj[`label`] = key[i];
            obj[`key`] = origin + '-' + i
            obj[`isOpen`] = false;
            obj[`path`] = pathname + '/' + key[i];
            tmp_arr.push(obj);
        }
    }
    return tmp_arr
}

app.get('/folder',(req,res)=>{
    make_dir('./covidd','').then((e)=>{
    res.send(e);
    })
  });

//การสร้าง path ขึ้นมาอ่านไฟล์จากในตัวเครื่องเรามาเก็บในตัวแปล readfile แล้วส่งข้อมูลในfile ที่อ่านมาขึ้นในเว้บ backend
app.get('/sample_submission.csv',(req,res)=>{ 
    var readFile =fs.readFileSync("./covidd/csv/sample_submission.csv",'utf-8') ;
    res.send(readFile);
});

//ดึงข้อมูลจากนิ ไปใส่ใน react เป็นกราฟฟฟ

app.get('/train_study_level.csv',(req,res)=>{ 
    var readFile =fs.readFileSync("./covidd/csv/train_study_level.csv",'utf-8') ;
    res.send(readFile);
});


app.get('/download_dcm_images/*',(req,res)=>{ 
    const images = req.params
    // console.log(images)
    res.download(`./covidd/${images[0]}`);
});