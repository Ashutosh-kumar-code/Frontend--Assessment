
var dashboarddata = [
    {topic: "Wix", images: "wix.png", person1:"OIP.jpg" , description: "Develop a cloud ", categories: "Technology", tags: "#logintags", nextmetting: "Tomorrow" },
    {topic: "Shopify", images: "shopify.png",person1:"OIP.jpg" , description: "lorem lorem", categories: "Energy", tags: "#OnlineShopping", nextmetting: "Tomorrow" },
    {topic: "Google",images:"google.png",person1:"OIP.jpg" , description: "lorem lorem", categories: "Best", tags: "#logintags", nextmetting: "Tomorrow" },

    {topic: "Paypal",images:"paypal.png",person1:"OIP.jpg" , description: "lorem lorem", categories: "Best", tags: "#logintags", nextmetting: "Tomorrow" },
    {topic: "Microsoft",images:"micro.png",person1:"OIP.jpg" , description: "lorem lorem", categories: "Best", tags: "#logintags", nextmetting: "Tomorrow" },
    {topic: "invision",images:"invision.png",person1:"OIP.jpg" , description: "lorem lorem", categories: "Best", tags: "#logintags", nextmetting: "Tomorrow" },

  ]




document.getElementById('tablemapdata').innerHTML = dashboarddata.map(value => 
  `<tr>
  
    <td class="first_td leftone_td" > 
        <div class="checkboxflex"> 
        <div class="input_flex" > <input id="${value.topic}" type="checkbox">
         <label for="${value.topic}"> <img src="./images/${value.images}" alt="">
          <a href="#"  class="card_title" > ${value.topic} </a> </label> </div>
          <p> <img src="./images/chatting.png" alt=""> 2</p> </div> 
          </td>
        <td class="first_td"> <div class="descript_scroll"> <h6>${value.description} </h6> </div> </td>
        <td class="first_td" > <div class="dashboarduser_imgflex" > 
        <img src="./images/${value.person1}" alt=""> 
        </div> </td>
        <td> <div class="categoryflex"> 
          <p style=" background: rgb(236, 178, 136); border: 1px solid brown; ">${value.categories}</p>
        </div> </td>
        <td><div class="tagsflex">
          <p>${value.tags}</p>
        </div></td>
        <td><div class="categoryflex"> 
          <p style=" background: rgb(236, 178, 136); border: 1px solid brown; ">${value.nextmetting}</p>
        </div></td>
        <td class="last_td"></td>
         

    </tr>
   
 `
).join('')


function myFunction() {
  var input, filter, ul, tagname, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("tablemapdata");
  tagname = ul.getElementsByTagName("tr");
  for (i = 0; i < tagname.length; i++) {
      a = tagname[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tagname[i].style.display = "";
      } else {
        tagname[i].style.display = "none";
      }
  }
}


