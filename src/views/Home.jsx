import React from 'react';
import { Link } from 'react-router';
import PageData from '../data/PageData.jsx';
import ExternalLinks from '../data/ExternalLinks.js';
import ATagOrLink from '../utils/ATagOrLink.js';

export default class Home extends React.Component {
  render() {
      var styles = {
          image:{
              width:'20rem'
          }
      }
      var data = PageData.map(item => {
          item.url = `/template/${item.key}`;
          return item;
      }).concat(ExternalLinks);
    return (<div className="row">
    
        {data.map(item => {
            console.log(item);
            return (
            <div className="col-xs-12 col-md-3 col-lg-3" style={{background:item.color, margin:"2rem", padding:"2rem", textAlign:'center', border:'1px solid #CCC'}} key={item.key}>
                <div className="card-block">
                {ATagOrLink(item.url, (
                    <span>
                        <img src={item.image} style={styles.image}/>                
                        <h2>{item.title}</h2>
                    </span>))}
                </div>
            </div>)
        })}
    </div>);    
  }
}