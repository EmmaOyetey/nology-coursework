function handleFindCost(event) {
   
    var vegetable = (document.getElementById("veg-dropdown").value);
  
    let vegCost;
    switch(vegetable) {
        case "Brocolli":
            vegCost = "£3.00/kg";
            break;
        case "Carrots" :
        case "Potatoes":
            vegCost = "£2.00/kg";
            break;
        case "Asparagus":
            vegCost = "£7.00/kg";
            break;
        case "Cabbage":
            vegCost = "£1.50/kg";
            break;
     }
     
     alert(vegCost);
    
}