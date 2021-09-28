import fs from 'fs';
const rawData = fs.readFileSync('sensor_data.json');
const sensor_data = JSON.parse(rawData);
const ob   = sensor_data.array;
let rooma1 = ob.filter(roma1 => roma1.roomArea === "roomArea1");
let hum1 = rooma1.map(x=>x.humidity);
let temp1 = rooma1.map(x=>x.temperature);
let avgh1 = hum1.reduce((prevVal,curVal) => prevVal+curVal,0)/hum1.length;
let avgt1 = temp1.reduce((prevVal,curVal) => prevVal+curVal,0)/temp1.length;
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;}

console.log ('avg humidity room1 : ' + avgh1);
console.log ('max humidity room1 : '+ Math.max(...hum1));
console.log ('min humidity room1 : '+ Math.min(...hum1));
console.log ('median humidity room1 : '+ median(hum1));
console.log ('-------------------------------------' );
console.log ('avg temperature room1 : ' + avgt1);
console.log ('max temperature room1 : '+ Math.max(...temp1));
console.log ('min temperature room1 : '+ Math.min(...temp1));
console.log ('median teperature room1 : '+ median(temp1));
console.log ('+++++++++++++++++++++++++++++++' );

let rooma2 = sensor_data.array.filter(roma2 => roma2.roomArea === "roomArea2");
let hum2 = rooma2.map(x=>x.humidity);
let temp2 = rooma2.map(x=>x.temperature);
let avgh2 = hum2.reduce((prevVal,curVal) => prevVal+curVal,0)/hum2.length;
let avgt2 = temp2.reduce((prevVal,curVal) => prevVal+curVal,0)/temp2.length;
console.log ('avg humidity room2 : ' + avgh2);
console.log ('max humidity room2 : '+ Math.max(...hum2));
console.log ('min humidity room2 : '+ Math.min(...hum2));
console.log ('median humidity room2 : '+ median(hum2));
console.log ('-------------------------------------' );
console.log ('avg temperature room2 : ' + avgt2);
console.log ('max temperature room2 : '+ Math.max(...temp2));
console.log ('min temperature room2 : '+ Math.min(...temp2));
console.log ('median teperature room2 : '+ median(temp2));
console.log ('+++++++++++++++++++++++++++++++' );

let rooma3 = sensor_data.array.filter(roma3 => roma3.roomArea === "roomArea3"); 
let hum3 = rooma3.map(x=>x.humidity);
let temp3 = rooma3.map(x=>x.temperature);
let avgh3 = hum3.reduce((prevVal,curVal) => prevVal+curVal,0)/hum3.length;
let avgt3 = temp3.reduce((prevVal,curVal) => prevVal+curVal,0)/temp3.length;
console.log ('avg humidity room3 : ' + avgh3);
console.log ('max humidity room3 : '+ Math.max(...hum3));
console.log ('min humidity room3 : '+ Math.min(...hum3));
console.log ('median humidity room3 : '+ median(hum3));
console.log ('-------------------------------------' );
console.log ('avg temperature room3 : ' + avgt3);
console.log ('max temperature room3 : '+ Math.max(...temp3));
console.log ('min temperature room3 : '+ Math.min(...temp3));
console.log ('median teperature room3 : '+ median(temp3));
console.log ('+++++++++++++++++++++++++++++++' );
