import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Heading from './Heading';
import './index.css';
import Sdata from './Sdata'
import Adata from './Adata'
import { render } from '@testing-library/react';

const choose = "Amazon";

const Choice = () =>{
    if(choose==="Netflix")
    {
        return (  
        <div className='all_cards'>
            
        {Sdata.map((val, index) => {
            console.log(index);
            
            return (
                <Cards
                    key ={val.id} 
                    imgsrc={val.imgsrc}
                    series_name={val.series_name}
                    series_link={val.series_link} />

            ); 
           
        })} 


    </div> );
    }
    else {
        
        return (  
            <div className='all_cards'>
                
            {Adata.map((val, index) => {
                console.log(index);
                
                return (
                    <Cards
                        key ={val.id} 
                        imgsrc={val.imgsrc}
                        series_name={val.series_name}
                        series_link={val.series_link} />
    
                ); 
               
            })} 
    
    
        </div> );

    }
};



ReactDOM.render(


    <>

        <Heading></Heading>
        <div className = 'choice'>
            <button className='btn' >Amazon</button>
            <button className='btn'>Netflix</button>
        </div>
        <Choice></Choice>

      
            
        </>
    
    , document.getElementById("root"));