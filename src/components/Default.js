import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
           <div className="container">
               <div className="row">
                   <div className="col-10 mx-auto text-center text-title
                   text-uppdercase pt-5">
                       <h1 className="display-3">404</h1>
                       <h2>error</h2>
                       <h3>page not found</h3>
                       <h4><span className="text-danger"> Запрошенный URL-адрес
                       {this.props.location.pathname} </span>Не найден</h4>
                   </div>
               </div>
           </div>
        )
    }
}
