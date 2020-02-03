import React, { Component } from 'react';
import './App.css';

class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
      quantity :this.props.quantity,
      disabled:false,
      confirm:"your order has been confirmed"
    };
  
    // this.Plusone = this.Plusone.bind(this);
    // this.Minusone = this.Minusone.bind(this);
    // this.Takequantity = this.Takequantity.bind(this);
  }
  confirm=()=>{
    this.setState({
      confirm
    })
  }


  Plusone=()=>{
    this.setState(
      {
        quantity : this.state.quantity +1
      }
    );
  }
  Minusone=()=>{
    this.setState(
      {
        quantity : this.state.quantity -1
      }
    );
  }


  Takequantity=(event)=>{
    let quantity = parseInt(event.target.value);
    if(quantity==1){
      this.setState({
        quantity : quantity,
        disabled:true,
        color:'#ccc'
      }
      );
    }
  }
  render(){
    return(
        <div className="App">
              

              <div className="A1">Buy one get one free:</div><br></br>
                  <div className="Bpp"> Name : {this.props.Name_of_items}</div>
                  <div className="c">price per Quantity  : ${this.props.Price_of_items}</div>
                   <div className="A1"><button class="b"> Offer Price :{(this.props.Price_of_items)/2} </button></div>

            <div> Total Quantity Selected : {this.state.quantity}</div><br></br>
            <input type="text" onChange ={this.Takequantity} value={this.state.quantity} maxLength={0}></input><br></br>
            <div><button onClick = {this.Plusone} className = 'Cart-Button'> + </button>
            <button onClick = {this.Minusone} className = 'Cart-Button'> - </button></div>  <br></br>
            <div><button>Total Amount for {this.state.quantity} "{this.props.Name_of_items}" is $ 
            {(this.props.Price_of_items)/2 * this.state.quantity}</button></div>
            <button  onClick={this.confirm}>Confirm Order</button>
        </div>
    );
  }
}


class App extends Component{
  render(){
    return(
      
       <div >
    {/* <div class="col-6"></div>  */}
        
       <div> <Cart Name_of_items={'Mobile'} Price_of_items={50} quantity={0}   /></div><br></br>

       <div></div><br></br>
       <div ></div>
        <div><Cart Name_of_items={'Laptop'} Price_of_items={450} quantity={0}/></div>
       {/* <Calculator a={30} b={10} />*/}
      </div>
    );
  }
}
export default App;




