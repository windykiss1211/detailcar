import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "BMW CAR",
        "src": [
            "https://cdn1.autodaily.vn/du-lieu/2015/03/23/bmw-i8-12.jpg",
            "https://img1.oto.com.vn/crop/762x429/2019/06/10/2OKOPtUB/bmw-i8-roadster-10-xe-hoi-dep-nhat-the-gioi-hien-n-6e21.jpg",
            "https://xehay.vn/uploads/images/2016/07/01/xehay-bmw-i8-yellow-090716-12.jpg",
            "https://media.tinmoi.vn/resize_1200x630/2015/09/15/bmw-i8-mot-moi-cua-dai-gia-viet-4-1442307526.jpg"
          ],
        "description": "This is VIP CAR",
        "content": " To our beautiful car, fast, smooth, with this car automatically follows girls ",
        "price": 230000,
        "colors":["white","black","yellow","blue"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
