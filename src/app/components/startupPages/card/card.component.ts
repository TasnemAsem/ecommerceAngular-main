import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
products:any[]=[{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/07/6997C43E-435D-40D6-B614-1422CD8813B7-1024x1024.jpg",
  proName:" Caramel Macchiato",
  


},{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/07/91F03B67-957B-4AE9-9304-912AE2EFBDDF-1024x1024.jpg",
  proName:"Matcha Latte",
  


},{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/11/232A4908-6056-45BD-8ED5-D03778D21EA5-1024x1024.jpg",
  proName:"Flavored Caffe Latte",
 

},
{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/07/F03B2AB7-12B6-47F6-AA82-3B924C32F96D-1024x1024.jpg",
  proName:" Black Cookie Latte",
  


}
,
{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/11/49B95676-408B-4A59-BB3E-EC7BD9F9A1DC-1024x1024.jpg",
  proName:"Cookie Crumble Latte",
  


},{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/11/311F4FA1-04F2-458D-B767-CA0856D5ED20-1024x1021.jpg",
  proName:"Classic Chocolate",
  


},{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/11/3DAC2F0C-F37D-4159-9506-D7DB1A542668-1024x1024.jpg",
  proName:"Taro Latte",
 

},
{
  img:"https://www.couvee.co.id/wp-content/uploads/2020/01/E038E5CA-4906-4D70-80E2-255A54F46F1D-1024x1024.jpeg",
  proName:" Everyday Latte",
  


}

]
}