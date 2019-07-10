import React,{Component} from 'react';

class App extends Component{
constructor(){
  super();
  this.state={
    items:[],
    isloaded: false,
  }
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>{
  return res.json();
})
.then(data =>{
  console.log(data);
  this.setState({
  isloaded: true,
  items:data,
})
})
}

  render(){
    var {isloaded,items}=this.state;
    if(!isloaded){
      return <div>Loading---</div>
    }else{
    return (
      <div className ="app">
        <div className="Names">
          <ul>
           { items.map(el=>{
               return (
                 <li key={el.id}>
                   Name:{el.name}|UserName:{el.username}|{" "}
                   <a href={`https://${el.website}`}>Webside</a>
                   </li>
               )
             })}
          </ul>
        </div>
      </div>
    )
    }
  }
}

export default App;