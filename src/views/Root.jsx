import React from 'react';
import {Link} from 'react-router';
import PageData from '../data/PageData.jsx';
import ExternalLinks from '../data/ExternalLinks.js';
import ATagOrLink from '../utils/ATagOrLink.js';
export default class Root extends React.Component {
   
  render() {
      var style={
          background:"#DAsF"
      }
      var links = PageData.map(item => {return {url:`/template/${item.key}`, title:item.title}}).concat(ExternalLinks);
      
    //   links.push({url:'/', title:'home'})
    return (    
    <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to="/">kleeut.com</Link>
            </div>
            <ul className="nav navbar-nav">
                {links.map(link => {return (<li key={link.url}>{ATagOrLink(link.url, link.title)}</li>)})}  
            </ul>
        </div>
        </nav>
        <div style={style} className="container">
                {this.props.children}
                </div>
    </div>);    
  }
}

