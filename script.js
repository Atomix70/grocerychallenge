function ajax()
{
console.log("tester")    
var xhttp=new XMLHttpRequest();  
var output="";  
xhttp.onreadystatechange = function()
{
    // console.log(this.readyState)
    // console.log(this.status)
    if(this.readyState==4 && this.status==200)
    {
        var response=JSON.parse(this.responseText);
        // console.log(response.grocery.length);
        a=response.grocery;
       
        for(i=0;i<a.length;i++)
        {
            output+="<tr><th>"+a[i].serialnumber+"</th><th>"+a[i].name+"</th><th>"
            +a[i].quantity+"</th><th>"+a[i].unit+"</th><th>"+a[i].department+"</th><th>"+a[i].notes+"</th></tr>"
        }
        // var bev=""
        // for(i=0;i<a.length;i++)
        // {
        //   if(a[i].department=="Beverages")
        //   {
        //     bev+="<tr><th>"+a[i].serialnumber+"</th><th>"+a[i].name+"</th><th>"
        //     +a[i].quantity+"</th><th>"+a[i].unit+"</th><th>"+a[i].department+"</th><th>"+a[i].notes+"</th></tr>"
        //   }
        // }
        // var dar=""
        // for(i=0;i<a.length;i++)
        // {
        //   if(a[i].department=="Dry-and-Raw")
        //   {
        //     dar+="<tr><th>"+a[i].serialnumber+"</th><th>"+a[i].name+"</th><th>"
        //     +a[i].quantity+"</th><th>"+a[i].unit+"</th><th>"+a[i].department+"</th><th>"+a[i].notes+"</th></tr>"
        //   }
        // }

        // var dairy=""

        // response.grocery.push('"serialnumber":"10","name": "Citrizine","quantity":"10","unit":"no.","department":"Medicine","notes":""')
        document.getElementById("groclist").innerHTML=output;
       
    }  
    // toutput=[output,bev,dar]
    // console.log(toutput)
    
     
}
xhttp.open("GET","grocery.json",true);
xhttp.send();
}


// sort

function cat(value)
{
// console.log("tester")    
var xhttp=new XMLHttpRequest();    
xhttp.onreadystatechange = function(){
    // console.log(this.readyState)
    // console.log(this.status)
    if(this.readyState==4 && this.status==200)
    {
        var response=JSON.parse(this.responseText);
        // console.log(response.grocery.length);
        a=response.grocery;
        var output="";
        j=1;
        for(i=0;i<a.length;i++)
        {
          if(a[i].department==value)
          {
            output+="<tr><th>"+j+"</th><th>"+a[i].name+"</th><th>"
            +a[i].quantity+"</th><th>"+a[i].unit+"</th><th>"+a[i].department+"</th><th>"+a[i].notes+"</th></tr>";
            j+=1;
          } 
        }
        for(i=0;i<newitems.length;i++)
        {
          if(newitems[i].department==value)
          {
            output+="<tr><th>"+j+"</th><th>"+newitems[i].name+"</th><th>"
            +newitems[i].quantity+"</th><th>"+newitems[i].unit+"</th><th>"+newitems[i].department+"</th><th>"+newitems[i].notes+"</th></tr>";
            j+=1;
          }
        }
        console.log(output)
        document.getElementById("groclist").innerHTML=output;
      }

    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
    }
    
// sidenavbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}








var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function()
{
  modal.style.display = "none";
//   ajax();
//   toutput=document.getElementById("groclist").innerHTML;
//   console.log(toutput)
//   // a=newitems
//   for(i=0;i<newitems.length;i++)
//   {
//     toutput+="<tr><th>"+(i+11)+"</th><th>"+newitems[i].name+"</th><th>"
//     +newitems[i].quantity+"</th><th>"+newitems[i].unit+"</th><th>"+
//     newitems[i].department+"</th><th>"+newitems[i].notes+"</th></tr>";
//   }
//   console.log(toutput)
//   document.getElementById("groclist").innerHTML=toutput;
//   console.log(document.getElementById("groclist").innerHTML)
}
newitems=[];
// "serialnumber":"1",
// "name": "Atta",
// "quantity":"2",
// "unit":"kg",
// "department":"food",
// "notes":"Ashirvad"
function add()
{
  
 a={
  serialnumber:"",
  name: "",
  quantity:"",
  unit:"",
  department:"",
  notes:"" 
 }
 a.name=document.getElementById("name").value;
 a.quantity=document.getElementById("quant").value;
 a.unit=document.getElementById("unit").value;
 a.department=document.getElementById("dep").value;
 a.notes=document.getElementById("note").value;
 
 newitems.push(a)
 console.log(newitems)
 modal.style.display = "none";
  // ajax();
  toutput=document.getElementById("groclist").innerHTML;
  console.log(toutput)
  // a=newitems
  for(i=0;i<newitems.length;i++)
  {
    toutput+="<tr><th>"+(i+12)+"</th><th>"+newitems[i].name+"</th><th>"
    +newitems[i].quantity+"</th><th>"+newitems[i].unit+"</th><th>"+
    newitems[i].department+"</th><th>"+newitems[i].notes+"</th></tr>";
  }
  console.log(toutput)
  document.getElementById("groclist").innerHTML=toutput;
  console.log(document.getElementById("groclist").innerHTML)
}


console.log(newitems)

function showfull()
{
  console.log("tester")    
var xhttp=new XMLHttpRequest();  
var output="";  
xhttp.onreadystatechange = function()
{
    // console.log(this.readyState)
    // console.log(this.status)
    if(this.readyState==4 && this.status==200)
    {
        var response=JSON.parse(this.responseText);
        // console.log(response.grocery.length);
        a=response.grocery;
       
        for(i=0;i<a.length;i++)
        {
            output+="<tr><th>"+a[i].serialnumber+"</th><th>"+a[i].name+"</th><th>"
            +a[i].quantity+"</th><th>"+a[i].unit+"</th><th>"+a[i].department+"</th><th>"+a[i].notes+"</th></tr>"
        }
        for(i=0;i<newitems.length;i++){
          output+="<tr><th>"+(i+12)+"</th><th>"+newitems[i].name+"</th><th>"
          +newitems[i].quantity+"</th><th>"+newitems[i].unit+"</th><th>"+newitems[i].department+"</th><th>"+newitems[i].notes+"</th></tr>"
        }
        document.getElementById("groclist").innerHTML=output;
       
    }  
     
}
xhttp.open("GET","grocery.json",true);
xhttp.send();
}



