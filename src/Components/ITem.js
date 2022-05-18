import React from 'react'
import { Button, Table } from 'react-bootstrap'

const ITem = () => {
    const item=[
        {
            name:"iphone 13",
            quantity:13,
            price:"4999 D",
            image:"https://selectshop.tn/18332-large_default/smartphone-apple-iphone-13-128-go-bleu.jpg"
        },
        {
            name:"macbook pro 2021",
            quantity:10,
            price:"6999 D",
            image:"https://pic.clubic.com/v1/images/1905586/raw?fit=smartCrop&height=795&width=1060&hash=c10342b6b3fc466178aa55c5ab2c892b5976da8d"
        },
        {
            name:"playstation 5",
            quantity:4,
            price:"1500 D",
            image:"https://img.phonandroid.com/2020/11/PS5-3.jpg"
        },
        {
            name:"drone",
            quantity:3,
            price:"7456 D",
            image:"https://m.media-amazon.com/images/I/71ERWTfrxKL._AC_SS450_.jpg"
        }
    ]
  return (
    <div style={{marginTop:"50px",marginLeft:"20px",marginRight:"20px"}}>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Quantity</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
      item.map((el)=>(
        <tr>
        <td>{el.name}</td>
        <td><img style={{width:"200px",height:"150px"}} src={el.image} alt="" /></td>
        <td>{el.price}</td>
        <td>{el.quantity}</td>
        <td><Button  onClick={()=>alert(`the price of${el.name} is ${el.price}`)}>Info</Button></td>
  
      </tr>
      ))
  }
  </tbody>
</Table>
    </div>
  )
}

export default ITem