const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()


app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"m8_pro"
})

app.get('/menu',(req,res)=>{
    db.query("SELECT * FROM `menu`",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.table(result)
        }
    })
})

app.post('/menu',(req,res)=>{
    const menuID =req.body.menuID;
    const menu_name_TH = req.body.menu_name_TH;
    const menu_img = req.body.menu_img;
    const description =req.body.description
    const cooking_method =req.body.cooking_method
    const menu_name_EN =req.body.menu_name_EN
    console.log(req.body);
    db.query("INSERT INTO `menu` (`menuID`, `menu_name_TH`, `menu_img`, `description`, `cooking_method`, `menu_name_EN`) VALUES (?,?,?,?,?,?)",[menuID,menu_name_TH,menu_img,description,cooking_method,menu_name_EN]),(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.table(result)
        }}})

    // db.query("INSERT INTO `menu` (`menuID`, `menu_name_TH`, `menu_img`, `description`, `cooking_method`, `menu_name_EN`) VALUES (' ', 'ข้าวผัดอเมริกัน', 'https://leonetonline.com/wp-content/uploads/2021/08/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzUvMTc2MjY5L2Zvb2QuanBn.jpg\r\n', 'เมนู \"ข้าวผัดอเมริกัน\" เมนูอาหารเช้าทำง่าย ๆ ไม่ต้องไปไกลถึงอเมริกา วิธีทำแสนจะง่ายดาย แถมสารอาหารก็ครบถ้วน กินเป็นมื้อเช้าได้สบายๆ พร้อมแล้วก็ลุยกันเลย อ่านต่อได้ที่ ', 'วิธีทำข้าวผัดอเมริกัน\r\nSTEP 1 : ทอดไก่\r\nน่องไก่ชิ้นใหญ่ 2 ชิ้น หมักด้วยเกลือป่น ซีอิ๊วขาว พริกไทยป่นและกระเทียมสับ หมักทิ้งไว้ประมาณ 1 ชม. แล้วนำไปทอดด้วยไฟกลาง จนสุกเหลืองทั่วทั้งชิ้น\r\nSTEP 2 : ผัดข้าว\r\nตั้งน้ำมัน เอากระเทียมสับและหอมใหญ่สับลงไปผัดให้หอม จากนั้นตามด้วยแครอท ถั่วลันเตา ข้าวโพด และลูกเกด\r\nจากนั้นใส่ข้าวสวยแช่เย็นลงไป ผัดให้กระจายตัว จากนั้นใส่ซอสมะเขือเทศลงไป ปรุงรสด้วย ซีอิ๊วขาว น้ำตาลทราย และพริกไทยป่น จากนั้นผัดให้เข้ากัน และปิดไฟ \r\nSTEP 3 : จัดเสิร์ฟ\r\nจัดเสิร์ฟข้าวผัดคู่กับไก่ทอด ไส้กรอกทอด และวางไข่ดาวลงด้านบนข้าว ตกแต่งด้วย ผักสลัด มะเขือเทศเพิ่มความสวยงาม แค่นี้ก็พร้อมเสิร์ฟแล้ว!', 'American fried rice');",(err,result)=>{


app.get('/ingredients/:menuID',(req,res)=>{
    db.query("SELECT * FROM `ingredients` WHERE `menuID` = "+req.params.menuID,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.table(result)
        }
    })
})

app.get('/ingredients',(req,res)=>{
    db.query("SELECT * FROM `ingredients`",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.table(result)
        }
    })
})


app.listen('8080',()=>{
    console.log('Server had been run on port 8080')
})

