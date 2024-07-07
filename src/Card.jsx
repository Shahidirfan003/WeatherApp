import PropTypes from "prop-types";


export default function Card({info,value,unit}){
    let arr=['Min-Temp','Max-Temp','Feels Like'];
    return(
    <div className="card" style={{padding:'1.5rem',borderRadius:'1rem',border:'none',margin:'5px',flexGrow:'2'}}>
        <p style={{color:'gray'}}>{info}</p>
        <h1>{value}<span style={{fontSize:'1.4rem'}}>{unit?unit:<span style={{fontSize:'2rem'}}><sup>o</sup>C</span>}</span></h1>
        {info=='Humidity'? <p>{value<15?'Normal':'High'} {`\u{1F30A}`}</p>:arr.some(el=>el==info)?<p>{value<30?'Normal':'Warm'} {`\u{1F326}`}</p>:<p>{value<1.2?'Normal':'High'} {`\u{1F32A}`}</p>}
    </div>
    )
}


Card.propTypes = {
    info:PropTypes.string,
    value:PropTypes.number,
    unit:PropTypes.string,

  };
  