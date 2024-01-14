import Section2 from "./Section2";
import styled from "styled-components";

export const StyledSection2=styled(Section2)`
  --gradient: linear-gradient(
    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
position : relative;
.list-article{
  display: none;
}

.square{
  display:none;
}
.nav{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10000;
    position: sticky;
    top:11rem;
    margin-top:6rem;
    height:2.4rem;
    background-color:#F9FF00;
    opacity:1;
    margin-bottom:3px;
    border: solid 1px #E5E9EC;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:20rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:20rem;
  }
  .img1{
    width:35rem;
    height:25rem;
  }
  .img2{
    width:15rem;
    height:15rem;
  }
  .img3{
    width:25rem;
    height:25rem;

  }
  .img4{
    width:25rem;
    height:25rem;
  }
  .img5{
    width:15rem;
    height:15rem;
  }
  .img6{
    width:25rem;
    height:20rem;
  }
.section2-1{

    margin-bottom: 1rem;
    height: 170vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 40vh 40vh 1fr  40vh;
    gap: 3px;
}
.textStyle{
  all:unset;
  width:100%;
  text-align:center;
    position:absolute;
    display:block;
    overflow:hidden;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-family:audrey;
    font-size:2.3rem;
    font-weight:bolder;
    color:#787373;
    text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
.box2-1 {
    grid-area: b1;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: b2;
    background-color: #E5E9EC;
}

.box2-3 {
    grid-area: b3;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: b4;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: b5;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: b6;
    background-color: #FDD771;
}
@media screen and  (width<=500px){
  /* rrrrrrrrrrrrrrrrrrrrrrrrr */
  .singleArticle2{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .singleArticle2> span{
    display: block;
  }
  .singleArticle2>img{
    display:block;
     margin:0 auto;
     width:300px;
    height:300px
  }
    .singleArticle{
      position:relative;
      box-shadow: 7px 0 5px -5px grey, -7px 0 5px -5px grey;
    width:100%;
    height:100%;
    border-top: transparent;
    display: flex;
    flex-direction: column;
    border-radius:5px;
  }


    .singleArticle> span{
    display: block;
    padding-left:1rem;
  }
    .singleArticle>span:nth-child(2){
      font-size:25px;
      font-family:_salsa !important;
      color: #302e2e;
      padding-bottom:.6rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(2) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-30%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through;
    font-size:14px;
    font-weight:900;
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:900;
    color : black;

  }
    .singleArticle2>span:nth-child(2){
      font-size:25px;
      font-family:_salsa !important;
      color: black;
      text-align:center;
  }
    .singleArticle>span:nth-child(3){
      font-size:27px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:27px;

  }
    .singleArticle2>span:nth-child(3){
      font-size:25px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
  }
    .singleArticle>span:nth-child(4){
        font-family:Arial, Helvetica, sans-serif !important;
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
      height:45px;
      overflow-y:scroll;
  }
    .singleArticle2>span:nth-child(4){
        font-family:Arial, Helvetica, sans-serif !important;
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
      height:70px;
      text-align:center;
      overflow-y:scroll;
  }
  .singleArticle>div{
    text-align:center;
    font-weight:bold;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
  }
    .singleArticle>div:active{
        background-color:#DADAD6 ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color: black;
    font-family: Arial, Helvetica, sans-serif !important;


  }
  .singleArticle2>div{
    text-align:center;
    font-weight:600;
    font-family: Arial, Helvetica, sans-serif !important;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:0.2rem 1rem;
  }
  .singleArticle2>div:active{
        background-color:#DADAD6 ;
  }

    .singleArticle>img{
    display:block;
     margin:.5rem auto;
     width:300px;
    height:300px;

  }
  
  .imgHover::before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:3px;
    background-color:rgba(0,0,0,0.1);
    

  }
  .imgHover{
    position: relative;
  }

  .articleSquare{

  }
  .articleBox{
    position:absolute;
    top : 55rem;
    left:0;
    height:35rem;
    width:100%;
    overflow:hidden;
    background-color:#DADAD6;
    background-size:400%;
    animation:backgroundPosition 20s infinite alternate;

  }
  @keyframes backgroundPosition {
    0%{
        background-position:left;
    }
    100%{
        background-position:right;
    }
    
  }
  .listImg{
    position: absolute;
    top:45rem;
    left:0;
    height:10rem;
    width:100%;
  }
  .listImg>div{
    display:flex;
    overflow-x:scroll;
    height:100%;
    width:100%;
  }
  .articles{
    display:flex;
    gap:0 .7rem;
    overflow-x:scroll;
    position: absolute;
    top:0;
    right:0;
    width:100%;
    padding-top:4rem;
    height:35rem;
    background-color:#DADAD6 ;

  }

  .slug{
    z-index:  3000;;
    position: absolute;
    left:0;
    top:35rem;
    overflow-x:hidden;
    height:10rem;
    width:100%;
    background-color:#DADAD6 ;
  }
  .slug>div:nth-child(1){
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:#DADAD6;
    border-radius: 0 0 50% 50%/0 0 100% 100%;

  }
  .slug>div:nth-child(2){
    position: absolute;
    width:90%;
    height:50%;
    background-color: transparent;
    text-align: center;
    font-family:_salsa !important;
    font-size:16px;
    color : black;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

  }
  .category{
    z-index:  3000;;

    height:4.1rem;
    width:100%;
    position: absolute;
    top:0;
    left:0;
    overflow-x:hidden;
    background-color:transparent;
  }
  .category>div:nth-child(1){

    background-color:grey;
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:#DADAD6;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
  }
   .category>div:nth-child(3){
    position: absolute;
    height: 5rem;
    left:0;
    bottom: 100%;
    width:100%;
    z-index:-100;
   }
    .category>div:nth-child(2){
    position: absolute;
    font-size:22px;
    text-transform:uppercase;
    width:90%;
    height:50%;
    background-color: transparent;
    text-align: center;
    font-family:_salsa !important;
    color : black;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div>span>*{
      font-size:16px;
      font-family: Arial, Helvetica, sans-serif !important;
      text-decoration:none;
      color: black;
    }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:2rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:2rem;
  }
  .section2-1{
  height: unset;
  width: 100%;
  display: grid;
  margin-top:0px;
  grid-template-columns:repeat(1,100%);
  grid-template-rows:130.4rem 130.4rem 130.4rem ;
  grid-template-areas:unset;
  gap:0px;
}
.nav{
  margin-top:4rem;

}
.section2-1+div{
  height:1rem;
  width:100%;
  background-color:#DADAD6 ;
}
.square{
  position: absolute;
  top:90rem;
  left:0;
  height:40rem;
  overflow:hidden;
  display:grid;
  grid-template-columns:50% 50%;
  grid-template-rows:50% 50%;
}
.square-box{
  position: relative;
  height:100%;
  width:100%;
  background-color:grey;
  overflow: hidden;
}
.square-box::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  font-family:Arial, Helvetica, sans-serif !important;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:#DADAD6 ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
@keyframes colorAnimation {
  0%{
    color: rgba(0,0,0,1);
  }
  50%{
    color:rgba(0,0,0,.3);
  }
}
.square-box>img{
  width:100%;
  height:70%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:900;
  text-transform: uppercase;
  color : #353131;
  text-align:center;
}
.square-box>div>span:nth-child(2){

  color : #353131;
  text-align:center;
  font-family: _salsa !important;
    display:inline-block;

}
.square-box>div>a:nth-child(3){
  color : #353131;
  font-family: Arial, Helvetica, sans-serif !important;
  font-style:italic;
  font-weight:lighter;
  font-size:14px;
  text-decoration:underline;
}
.square-box>div>a:nth-child(4){
    font-family: Arial, Helvetica, sans-serif !important;

  color : #353131;
  font-style:italic;
  font-weight:lighter;
  font-size:14px;
  line-height:14px;
  text-decoration:underline;
}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  color:white;
  background-color:#DADAD6;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width:100%;
  height:30%;
}
.textStyle{
  all: unset;
  display: none;
  }
  .flexDisplay,.flexDisplay::before,.flexDisplay::after{
    all: unset;
    display:block;

  }

.img{
  display:none;
}


.list-article{
  display:block;
  position:relative;
  height:100%;
  overflow-y:hidden;
  background-color:#DADAD6;
}
  .box2-1 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-2 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-3 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-4 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-5 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-6 {
    grid-area: unset;
    background-color: #DADAD6;
}
}
@media screen and ((width>500px) and (width<=900px)) {
  .nav{
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:8rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:8rem;
  }
  .box2-1 {
    grid-area: unset;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: unset;
    background-color: #bfccd3;
}

.box2-3 {
    grid-area: unset;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: unset;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: unset;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: unset;
    background-color: #FDD771;
}
.nav{
    width:100%;
    display:flex;
    margin-top:6rem;
    height:2.4rem;
  }
.textStyle{
    position:Absolute;
    font-family:audrey;
    font-size:1.3rem;
    font-weight:bolder;
    color:black;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
    .section2-1{
    margin-bottom: 1rem;
    width: 100%;
    height:unset;
    grid-template-rows: unset;
    display: grid;
    grid-template-areas: unset;
    grid-template-columns: repeat(2, 50%);
    gap: 1px;
}
.flexDisplay{
  height:20rem;
  min-height:15rem;
}

  .img1{
    width:15rem;
    height:10rem;
  }
  .img2{
    width:8rem;
    height:8rem;
  }
  .img3{
    width:9rem;
    height:9rem;

  }
  .img4{
    width:10rem;
    height:10rem;
  }
  .img5{
    width:5rem;
    height:5rem;
  }
  .img6{
    width:15rem;
    height:10rem;
  }
}


@media screen and ((width<=1000px) and (width>900px)) {
    .section2-1{
    margin-bottom: 1rem;
    height: 130vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 37vh 30vh 1fr  30vh;
    gap: 2px;
}
.textStyle{
  font-size:1.5rem;
  color : black;
  text-shadow:unset;
}
.nav{
}
  .img1{
    width:20rem;
    height:10rem;
  }
  .img2{
    width:11rem;
    height:11rem;
  }
  .img3{
    width:15rem;
    height:15rem;

  }
  .img4{
    width:15rem;
    height:15rem;
  }
  .img5{
    width:10rem;
    height:10rem;
  }
  .img6{
    width:18rem;
    height:13rem;
  }
    
}
`