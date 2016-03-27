import  React  from 'react';
import {a} from 'react-router';
export default [
    { 
        key:"about", 
        title:"About Me", 
        text: class extends React.Component{ 
            render(){
                console.log('rendering about')
                return (
        <div>
            <h3>Klee Thomas is:</h3>
            <ul className="list-group">
                <li className="list-group-item">Husband to Donna</li>
                <li className="list-group-item">A Software Developer based in Newcastle NSW Australia</li>
                <li className="list-group-item">Employed by <a href="http://www.minlog.com">MinLog Austrlia</a></li>
                <li className="list-group-item">Co-organiser of the <a href="http://ncg.asn.au">Newcastle Coders Group</a></li>
                <li className="list-group-item">Managing <a href="https://twitter.com/ncgau">@ncgau twitter account</a></li>
                <li className="list-group-item">And <a href="https://www.meetup.com/newcastle-coders-group/">Meetup page</a></li>
                <li className="list-group-item">Motorcyclist</li>
                <li className="list-group-item">Martial arts fan</li>
            </ul>
        </div>)}}, 
        image: "/img/avatar.jpeg", 
        color:'#DE9'  },
    { 
        key: "contact", 
        title: "Contact Me", 
        text: class extends React.Component{ 
            render(){
                console.log('rendering about')
                return (
                    <div>
                        <h3>Contact me by:</h3>
                        <ul className="list-group">
                            <li className="list-group-item">Leaving a <a href="http://blog.kleeut.com">Comment on my blog</a></li>
                            <li className="list-group-item">@ me on twitter <a href="https://twitter.com/kleeut">@kleeut</a></li>
                            <li className="list-group-item">Email me klee.ut @ gmail.com</li>
                            <li className="list-group-item">Talking to me at the <a href="https://meetup.com/newcastle-coders-group">Newcastle Coders Group</a></li>
                        </ul>
                    </div>)}}, 
        image:"/img/contact.png", 
        color:'#AFA'  },
];