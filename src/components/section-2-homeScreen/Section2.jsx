import React,{useState, useEffect} from 'react'
import png1 from '../../assets/images/png_1.png'
import png3 from '../../assets/images/png_3.png'
import png4 from '../../assets/images/png_4.png'
import png5 from '../../assets/images/png_5.png'
import png6 from '../../assets/images/png_6.png'
import png9 from '../../assets/images/png_9.png'
import { articles, categories } from '../../data/data-objects'

const Section2 = ({className}) => {

const accessoires=articles.filter(article=>{
    return (article.categorie=="accessoire")
})
const montres=articles.filter(article=>{
    return (article.categorie=="montre")
})
const telephones=articles.filter(article=>{
    return (article.categorie=="telephone")
})
  return (
    <div className={className} style={{backgroundColor:'#DADAD6'}}>
        <div className='nav'>
            <div>
                <span>
                    <a href="#potable-link" >Portable</a>
                </span>
                <span>
                    <a href="#montre-link">
                        Montre
                    </a>
                    </span>
                <span>
                    <a href="#accessoitre-link">
                        Accessoire
                    </a>
                </span>
            </div>
        </div>
        <div className='section2-1'>
            <ListArticles  id="accessoitre-link" articles={accessoires} categories={categories} category={"accessoires"} />
            <ListArticles id="montre-link" articles={montres} categories={categories} category={"montres"} />
            <ListArticles id="potable-link" articles={telephones} categories={categories} category={"telephones"} />

            <div className="box2-1 flexDisplay hoverEffect" >
                <div   className='textStyle'>
                    <p>Ecouteurs Bluetooth</p>
                </div>
                <div  className='img1 img'>
                    <img src={png1} width="100%" alt="" className='w-100' />
                </div>

            </div>
            <div className="box2-2 flexDisplay hoverEffect" >
                <div   className='textStyle'>
                    <p>Ecouteurs Bluetooth</p>
                </div>
                <div  className='img1 img'>
                    <img src={png1} width="100%" alt="" className='w-100' />
                </div>
            </div>


            <div className="box2-3 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Montres connectées</p>
                </div>
                <div  className='img3 img'>
                    <img src={png4} width="100%" alt="" className='w-100' />
                </div>

            </div>
            <div className="box2-4 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Balladeurs</p>
                </div>
                <div  className='img4 img'>
                    <img src={png3} width="100%" alt="" className='w-100' />
                </div>  

            </div>

            <div className="box2-5 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Cables chargeurs</p>
                </div>            
                <div  className='img5 img'>
                    <img src={png6} width="100%" alt="" className='w-100 h-100' />
                </div>     

            </div>
            <div className="box2-6 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Chargeurs</p>
                </div>
                <div  className='img6 img'>
                    <img src={png9} alt="" width='100%' className='h-100 ' />
                </div>  
            </div>

        </div>
        <div></div>
    </div>

  )
}

const ListArticles=({id,articles,category,categories})=>{
    const initArticle=articles[0]
    console.log('-------',initArticle)
    const [articleBox, setArticleBox]=useState({...initArticle})
    const [focus, setFocus]=useState(initArticle.id);
    console.log('****', articleBox)
    function changeArticleBox(id){
        const newArticle=articles.filter(article=>article.id==id)
        setArticleBox(newArticle[0])
        console.log('%%%%%', articleBox)
        setFocus(id);
        console.log("??????",focus)

    }



    return (
        <div  style={{ width:"100%"}} className="list-article">
            
        <div className="category" style={{}}>
            <div></div>
            <div >{category}</div>
            <div id={id}></div>
        </div>
        <div className="articles">
        { 
            articles.map((article, index)=>{
                return(
                    <SingleArticle key={index} {...article}/>

                )

            })
        }
        </div>
        <div className="slug">
            <div>

            </div>
            <div>
                                {
                    categories.filter(oneCategory=>{
                        return oneCategory.category===category 
                    })[0].slug
                }
            </div>

        </div>


        <div className="listImg" style={{overflowX:'hidden'}}>
            <div>
            {articles.map(article=>{
                return(
                        <div className={`${focus==article.id ? "imgHover":""}`} style={{height:"100%",aspectRatio:"1/1", flexShrink:0  }}>
                            <img key={article.id} src={article.image} className={`img-fluid`}
                            alt="" style={{filter:"drop-shadow(10px 10px 5px 4px)",display:'block', 
                            height:"100%" ,width:"100%"}}  onClick={()=>changeArticleBox(article.id)}/>
              
                            
                        </div>
                    )
            }
            )
            }
            </div>
        </div>
        <div className="articleBox">
                <SingleArticle2 {...articleBox}/>
        </div>
                    <div className="square">
                        {
                            articles.filter((article,index)=>(index<5)).map(article=>{
                                return(

                                <div className="square-box">
                                    <img src={article.image} width="100%" alt="" className='w-100' />
                                    <div>
                                        <span>{article.name}</span>
                                        <span>{article.price} <span className='dollarSign'>$</span> {!article.pricePromo || <span className='promo-1'>{article.pricePromo} <span className='dollarSign'>$</span></span>} </span>
                                        <a href="#">Acheter</a>
                                        <a href="#">Ajouter au panier</a>
                                    </div>
                                </div>
                                )
                                
                            })
                        }
                    </div>
        </div>

    )
}
const SingleArticle=({name,image,price,pricePromo,longName})=>{
    return(
    <div className="singleArticle">
        
        <img src={image} alt=""  /> 
        <span>{price} <span className='dollarSign'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign'>$</span></span>} </span>
        <span>{name} </span>
        <span>{longName}</span>
        <div>
            Ajouter au panier
        </div>
    </div>
    )

}
const SingleArticle2=({name,image,price,pricePromo,longName})=>{
    return(
    <div className="singleArticle2" >
        
        <img src={image} alt=""  /> 
        <span>{price} <span className='dollarSign'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign'>$</span></span>} </span>
        <span>{name} </span>
        <span> {longName} </span>
        <a href="#" target='_blank'>Discuter avec nous</a>
        <div>
            Acheter maintenant
        </div>
        <div>
            Acheter maintenant
        </div>

    </div>
    )

}

export default Section2

