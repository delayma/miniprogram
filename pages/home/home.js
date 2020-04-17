// pages/home/home.js
Page({ 
  data: {
    name:"delaywu",
    counter:0,
    students:[
      {id:10001,name:"delaywu1",age:23},
      {id:10002,name:"delaywu2",age:23},
      {id:10003,name:"delaywu3",age:23},
      {id:10004,name:"delaywu4",age:23},
      {id:10005,name:"delaywu5",age:23}
    ]
  },
  btnTapClick(){
    this.setData({
      counter:this.data.counter+1
    })  
    console.log('ok');
    
  },
  btnSubClick(){
    this.setData({
      counter:this.data.counter-1 
    })
  }
  // btnTapClick:function(){
  //   console.log('ok');    
  // } 
})

// request ==> api ==>data==>name==delaywu==>wxml {{name}}==>delaywu