import React from 'react';
import PageData from '../data/PageData.jsx';

export default class TemplatedPage extends React.Component{
    
    render(){
        let {requestedPage} = this.props.params;
        console.log(`looking for page ${requestedPage}`);
        let data = PageData.find((item) => item.key === requestedPage);
        
        console.log(`rendering template ${requestedPage}`);
        return <div>
                <div className="page-header">
                <h2>{data.title}</h2>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8">{<data.text />} </div>
                    <div className="col-xs-12 col-sm-4"><img src={data.image} /></div>
                </div>
        </div>
    }
}