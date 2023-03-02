let tableCardList = [
  {
      id: 0,
      tableNumber: 1,
      tableStatus: "open",
      tableTotal: 0,
      tableItems: [],
  },
  {
      id: 1,
      tableNumber: 2,
      tableStatus: "open",
      tableTotal: 0,
      tableItems: [],
  },
  {
      id: 2,
      tableNumber: 3,
      tableStatus: "open",
      tableTotal: 0,
      tableItems: [],
  },
];
//displaying table information in html page
function tablecardsreload(){ 
document.querySelector(".tables").innerHTML=null;
var tableCards = document.querySelector(".tables");
tableCardList.forEach((tableCard) => {
  let ele=document.createElement('div');
  ele.setAttribute("class","table-card drop");
  ele.setAttribute("attr-key",`${tableCard.id}`);
  ele.setAttribute("id",`${tableCard.id}`);
  let tableCardHtml = `
  <h2 class="table-card-title drop">Table <span>${tableCard.id + 1}</span></h2>
  <p >Total Items : <span id=${tableCard.id.toString()+"i"}>0</span><p>
  <p class="table-card-para drop" >Total cost:
   <span id=${tableCard.id.toString()+"c"} >${tableCard.tableTotal}</span></p>
  `;
  ele.innerHTML = tableCardHtml;
  tableCards.appendChild(ele);
});
}
tablecardsreload();
//creating tables done

//Starting the menu list
let MenuCardList = [
  {
      id: 0,
      name: "Chicken Biryani",
      type:"Biryani",
      cost: 200,
  },
  {
      id: 1,
      name: "Mutton Biryani",
      type:"Biryani",
      cost: 300,
  },
  {
      id: 2,
      name: "Prawns Biryani",
      type:"Biryani",
      cost: 400,
  },
  {
      id: 3,
      name: "Mixed Biryani",
      type:"Biryani",
      cost: 300,
  },
  {
      id: 4,
      name: "Dum Biryani",
      type:"Biryani",
      cost: 200,
      
  },
  {
      id: 5,
      name: "Veg Fried Rice",
      type:"Biryani",
      cost: 180,
  },
  {
      id: 6,
      name: "Chicken Fried Rice",
      type:"Biryani",
      cost: 200,
     
  },
  {
      id: 7,
      name: "Chicken 65",
      type:"Starters",
      cost: 220,
  },
  {
      id: 8,
      name: "Paneer 65",
      cost: 180,
      type: "Starters",
  },
  {
      id:9,
      name:"Tandoori",
      cost:230,
      type:"Starters",
  },
  {
    id:10,
    name:"Wings",
    cost:250,
    type:"Starters",
  },
  {
    id:11,
    name:"Chilli chicken",
    cost:250,
    type:"Starters",
  },
  {
    id:12,
    name:"Ice cream",
    cost:80,
    type:"Desserts",
  },
  {
    id:13,
    name:"Gulab Jamun",
    cost:100,
    type:"Desserts",
  },
  {
    id:13,
    name:"Coke",
    cost:50,
    type:"Bewarages",
  },
  {
    id:14,
    name:"Milk Shake",
    cost:90,
    type:"Bewarages",
  },
  {
    id:15,
    name:"Thickshake",
    cost:120,
    type:"Bewarages",
  },
  {
    id:16,
    name:"Butter Milk",
    cost:60,
    type:"Bewarages",
  },
  {
    id:17,
    name:"Soda",
    cost:50,
    type:"Bewarages",
  },
  {
    id:18,
    name:"Lassi",
    cost:60,
    type:"Bewarages",
  },
  {
    id:14,
    name:"Fruit Mix",
    cost:100,
    type:"Bewarages",
  }
];
const menucards = document.querySelector(".menu");
MenuCardList.forEach((menuCard) => {
  let ele=document.createElement('div');
  ele.setAttribute("class","menu-card");
  ele.setAttribute("attr-key",`${menuCard.id}`);
  ele.setAttribute("id",`${menuCard.id}`);
  ele.setAttribute("draggable","true");
  const menuCarddata = `
          <h2 attr-key=${menuCard.id}>${menuCard.name}</h2>
          <p attr-key=${menuCard.id}>Total cost: <span id="total-cost" attr-key=${menuCard.id}>${menuCard.cost}</span></p>
          <p attr-key=${menuCard.id}>Item type: <span id="item-type" attr-key=${menuCard.id}>${menuCard.type}</span></p>
  `;
  ele.innerHTML=menuCarddata;
  menucards.appendChild(ele);
});
const tableSearch = document.getElementById("table_search");
tableSearch.addEventListener("keyup", (e) => {
    const tableCards = document.querySelectorAll(".table-card");
    tableCards.forEach((card) => {
        const cardName = card.children[0].innerText;
        if (cardName.toLowerCase().includes(e.target.value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
const menuSearch = document.getElementById("menu_search");
menuSearch.addEventListener("search",fun2);
menuSearch.addEventListener("keyup",fun2);
function fun2(e){
        const menuCards = document.querySelectorAll(".menu-card");
        menuCards.forEach((card) => {
        const cardName = card.children[0].innerText;
        const itemType=card.children[2].innerHTML;
        if (cardName.toLowerCase().includes(e.target.value.toLowerCase()) || itemType.toLowerCase().includes(e.target.value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        });
}
let table_cards=document.querySelectorAll(".table-card");
table_cards.forEach((table)=>{
    table.addEventListener("click",modal1=(e)=>{
        console.log(table.id,"hey ");
        let tableitem=tableCardList[table.id]["tableItems"];
        console.log(tableitem,"Hey i am  checking Table Items");
        if(tableitem!=0){
            table.style.backgroundColor="yellow";
            document.getElementById("modal").style.display="block";
            let tableid=parseInt(table.id);
            let one=parseInt(1);
            let tabno=tableid+one;
            document.getElementById("modal-head").innerHTML= "Table <span>"+ tabno + "</span> | Order Details";
            let table2update=table.children[0].children[0].innerHTML;
            let genbillid=document.getElementById("generatebill");
            genbillid.setAttribute("class",`${table2update}`);
            console.log(table.id);
            console.log("Bhargav",table2update);
            tablebodyreload(table2update);

        }
        else{
            alert("table is empty");
        }        
        
    });
});
function tablebodyreload(table2update){
    let tab=table2update-1;
    let arr = tableCardList[tab]['tableItems'];
        let sum=0;
        console.log("ar",arr);
        console.log(tab);
        console.log(table2update);
        Object.keys(arr).forEach((ele)=>{
            sum+=arr[ele][1]*arr[ele][2];
        });
        console.log(sum);
        tableCardList[tab]['tableTotal']=sum;
        console.log(sum);
        document.getElementById("total").innerHTML=sum;
        tablebody(table2update);     
}
function tablebody(table2update){
    console.log(table2update);
    tableCardList.forEach((card)=>{
        if(card.tableNumber==table2update){
            var li=card.tableItems;
            console.log(li);
            console.log(table2update);
            tablelist(li,table2update);
        }
        
    })
}
function tablelist(li,table2update){
    let tbody=document.getElementById("table-body");
    document.getElementById("table-body").innerHTML=null;
    for(let i=0;i<li.length;i++){
        let child = document.createElement("tr");
        let demo=li[i][0];
        child.innerHTML=`
        <td>${i+1}</td>
        <td>${li[i][0]}</td>
        <td>${li[i][1]}</td>
        <td><input type="number" value="${li[i][2]}" name="quantity" id="input" class="quantity" placeholder="enter quantity">
        <button class="update-btn" onclick="updatequantity(event,${table2update})">Update</button></td>
        <td><button class="deleterow" onclick="deleterow(event,${table2update})"><i class="far fa-2x fa-trash-alt"></i></button></td>
        `;
        console.log(li[i][0],"this is checking");

        tbody.appendChild(child);
        
    }   
        console.log(table2update,"this is table2update");
        console.log(li,"this is li");
}
let md_close=document.getElementById("modal_close");
md_close.addEventListener("click",(e)=>{
    document.getElementById("modal").style.display="none";
    let table_cards=document.querySelectorAll(".table-card");
        table_cards.forEach((table)=>{
        table.style.backgroundColor="white";
    })
})

window.onclick = function(event) {
    console.log("this is window onclick")
    if (event.target == modal) {
        document.getElementById("modal").style.display="none";
        let table_cards=document.querySelectorAll(".table-card");
        table_cards.forEach((table)=>{
            table.style.backgroundColor="white";
        })
    }
    else if (event.target == bill_modal) {
        document.getElementById("bill_modal").style.display="none";
        let table_cards=document.querySelectorAll(".table-card");
        table_cards.forEach((table)=>{
            table.style.backgroundColor="white";
        })
    }
  }
let newob=document.querySelectorAll(".menu-card");
newob.forEach((obj)=>{
    obj.addEventListener("dragstart",(e)=>{
        console.log("dragged");
        e.dataTransfer.setData("dt",e.target.id)
    })
   
})
let newob2=document.querySelectorAll(".table-card");
newob2.forEach((obj)=>{
        obj.addEventListener("dragover",(e)=>{
        console.log("dragg over");
        e.preventDefault();
    })
    obj.addEventListener("drop",(e)=>{
        console.log("drop");
        e.preventDefault();
        let currentTable=e.currentTarget.id;
        console.log(currentTable,"tableid");
        let menuid=e.dataTransfer.getData("dt");
        console.log("this is ei",menuid);
        let {id:idn,name:namen,type:typen,cost:costn}=MenuCardList[menuid];
        let current=getcurrcount(tableCardList[currentTable].tableItems,namen);
        console.log("current returned",current);
        if(current==0){
            let array=[namen,costn,1];
            tableCardList[currentTable].tableItems.push(array);
            console.log(array,"array checks");
        }
        let noofitems=items(tableCardList[currentTable]);
        console.log(noofitems,"No of items in this table");
        console.log(namen,"this is namen")
        let tabletotal= gettabletotal(tableCardList[currentTable].tableItems,namen);
        console.log("This is table Total",tabletotal);
        document.getElementById(currentTable).childNodes[3].childNodes[1].innerHTML=noofitems;
        document.getElementById(currentTable).childNodes[5].childNodes[1].innerHTML=tabletotal; 
    })
})
function items(currentTable){
    console.log(currentTable,"checking this");
    console.log("this is table items length",currentTable.tableItems.length);
    var count = 0;
    for(let i=0;i<currentTable.tableItems.length;i++){
        count += currentTable.tableItems[i][2]; 
    }
    console.log("This is no of items in table",count);
    return count;
}
function gettabletotal(li){
    let count=0;
    console.log("gettable",li)
    for(let i=0;i<li.length;i++)
    {
        console.log("this is li[i]",li[i]);
        count+=li[i][1]*li[i][2];
    }
    return count;
}
function getcurrcount(li,n){
    let count=0;
    console.log("getcurr",li)
    for(let i=0;i<li.length;i++)
    {
        if(li[i][0]==n){
            count=li[i][2];
            li[i][2]+=1;
            break;
        }
    }
    return count;
}

let generatebill=document.getElementById("generatebill");
generatebill.addEventListener("click",(e)=>{
    let target=e.currentTarget.parentNode;
    console.log("testing",target);
    let tablename=document.getElementById('generatebill').getAttribute("class");
    let tableid=tablename-1;
    console.log(tableid,"Table id");
    console.log(tablename,"Table name number");
    let total=document.getElementById('total').innerHTML;
    console.log(total,"This is total");
    billmodal(tableid,tablename,total);
})
function billmodal(tableid,tablename,total){
    document.getElementById("modal").style.display="none";
    document.getElementById("bill_modal").style.display="block";
    let list =tableCardList[tableid].tableItems;
    console.log(list);
    let tbody=document.getElementById("bill_table-body");
    document.getElementById("bill_table-body").innerHTML=null;
    for(let i=0;i<list.length;i++){
        console.log(list[i][0]);
        console.log(list[i][2]);
        let child = document.createElement("tr");
        itemtotal=list[i][1]*list[i][2];
        child.innerHTML=`
        <td>${i+1}</td>
        <td>${list[i][0]}</td>
        <td>${list[i][1]}</td>
        <td>${list[i][2]}</td>
        <td>${itemtotal}</td>
        `;
        console.log(list[i][0],"this is checking");

        tbody.appendChild(child);
    }
    console.log(list,"array checking");
    list=[];
    tableCardList[tableid].tableItems=[];
    tableCardList[tableid].tableTotal=0;
    console.log(list,"array  5 checking");
    console.log(tableCardList[tableid].tableItems,"table items");
    console.log("calling reload function");
    document.getElementById("tablenumber").innerHTML=tablename;
    document.getElementById("total-amount").innerHTML=total;
    document.getElementById(tableid).childNodes[3].childNodes[1].innerHTML=0;
    tablecardsrel();  
}
function tablecardsrel(){
    for(let i=0;i<tableCardList.length;i++){
        let t=0;
        tableCardList[i].tableItems.forEach((i)=>{
            t+=i[1]*i[2];
        })
        console.log("Total computed",t);
        document.getElementById(tableCardList[i].id.toString()+"c").innerHTML=t;
        let a=tableCardList[i].tableTotal=t;
        console.log(a,'this is total man');
    }
}

let bmd_close=document.getElementById("bill_modal_close");
bmd_close.addEventListener("click",(e)=>{
    document.getElementById("bill_modal").style.display="none";
    let table_cards=document.querySelectorAll(".table-card");
        table_cards.forEach((table)=>{
        table.style.backgroundColor="white";
    })
})
let bmd_close_btn=document.getElementById("close-bill");
bmd_close_btn.addEventListener("click",(e)=>{
    document.getElementById("bill_modal").style.display="none";
    let table_cards=document.querySelectorAll(".table-card");
    table_cards.forEach((table)=>{
        table.style.backgroundColor="white";
    })
})
function deleterow(num,li){
    let del_row=document.querySelectorAll(".deleterow");
    let item=num.target.parentNode.parentNode.parentNode.childNodes[3].innerHTML;
    let a= tableCardList[li-1].tableItems;
    console.log(a , "nee")
    console.log("this is delete button",item);
    console.log(del_row);
    console.log(li,"this is number");
  
    let index=-1;
    for(let i=0;i<a.length;i++){
        if(a[i][0]==item){
            index=i;
            break;
        }
    }
    if(index!=-1){
        a.splice(index,1);
    }
    tableCardList[li-1].tableItems=a;
    tablebodyreload(li);
    let total=gettabletotal(tableCardList[li-1].tableItems);
    console.log(items(tableCardList[li-1]));
    document.getElementById(li-1).childNodes[3].childNodes[1].innerHTML=items(tableCardList[li-1]);
    document.getElementById(li-1).childNodes[5].childNodes[1].innerHTML=total;

    if(total==0){
        document.getElementById("modal").style.display="none";
        console.log(tableCardList.length);
        let card=document.querySelectorAll(".table-card");
        card.forEach((ele)=>{
            ele.style.backgroundColor="white";
        })
        setTimeout(()=>{
            alert(`Table ${li} is empty`);
        },100);
    }
}
function updatequantity(e,tabno){
    let item = e.target.parentNode.parentNode.childNodes[3].innerHTML;
    let inputval =parseInt( e.target.previousSibling.previousSibling.value);
    console.log(item);
    console.log(tabno);
    console.log(inputval);
    let tabitems = tableCardList[tabno-1].tableItems;
    console.log(tabitems.length);
    for(let i=0;i<tabitems.length;i++){
        console.log(item);
        if(tabitems[i][0]==item){
            tabitems[i][2]=inputval;
        }
    }
    console.log(tabitems);
    let total=gettabletotal(tableCardList[tabno-1].tableItems);
    console.log(items(tableCardList[tabno-1]));
    document.getElementById(tabno-1).childNodes[3].childNodes[1].innerHTML=items(tableCardList[tabno-1]);
    document.getElementById(tabno-1).childNodes[5].childNodes[1].innerHTML=total;
    document.getElementById("total").innerHTML=total;
}