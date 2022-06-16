let sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];

  function calculatetotalsales(){
  for(let x=0;x<sales.length;x++){
    if(sales[x]["discount"]==undefined){
        sales[x]["sale"]=sales[x]["original"];
        sales[x]["total"]=sales[x]["original"]*sales[x]["stock"];
    } 
    else{
        sales[x]["sale"]=sales[x]["original"]-(sales[x]["original"]*(sales[x]["discount"]));
        sales[x]["total"]=sales[x]["stock"]*sales[x]["sale"];
    }
  } console.log(sales)
} 
calculatetotalsales();