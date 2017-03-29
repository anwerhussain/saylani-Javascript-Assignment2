//1. Declare an empty array using JS literal notation to store student names in future.
    
    var arrStudent = [];
    
//2. Declare an empty array using JS object notation to store student names in future
    
    var arrStudents = new Array();
    
 //3. Declare and initialize a strings array  
   
    var arrString = ["saylani", "mass", "training", "program", "batch", "4.1"];
   
//4. Declare and initialize a numbers array

    var arrNumbers = [1,2,3,4,5,6,7];
   
//5. Declare and initialize a boolean array
    
    var arrBool = [true,false];

//6. Declare and initialize a mixed array    

    var arrMixed = ["saylani", 4.1, true];
    
//7. Declare and Initialize an array and store available mobile networks in Pakistan
    
    var arrNetworks = ["ufone","zong","warid","telenor","mobilink"];
    
/*8. Declare and Initialize an array and store available education qualifications in Pakistan 
(e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
like:*/

var arrEducation = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
                document.write("<ol><li>" + arrEducation[0] + "</li><li>" + arrEducation[1] + "</li><li>" 
                + arrEducation[2] + "</li><li>" + arrEducation[3] + "</li><li>" + arrEducation[4] 
                + "</li><li>" + arrEducation[5] + "</li><li>" + arrEducation[6] + "</li><li>" 
                + arrEducation[7] + "</li></ol>");

/*9. Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. 
Display the elements & length of array in your browser. (Use array’s length method)*/

var arrMovies = [];
arrMovies[0] = "Avengers";
arrMovies[1] = "Spectre";
arrMovies[2] = "Jurrasic World";
arrMovies[3] = "Inside Out";
document.write("<h2>Top Movies of 2015</h2>")
document.write("<ol><li>" + arrMovies[0] + "</li><li>" + arrMovies[1] + "</li><li>" 
                + arrMovies[2] + "</li><li>" + arrMovies[3] + "</li></ol>");
document.write("<h2>Length of Array: " + arrMovies.length + "</h2>");


/*10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array*/

var arrCars = ["Honda","Buggati","Audi","BMW"];
document.write("<h2>Favourite Cars</h2>");
document.write(arrCars);
document.write("<br /><br />First Index of the Array: 0");
document.write("<br />Car at First Index of Array: " + arrCars[0]);
document.write("<br />Last Index of the Array: " + ((arrCars.length)-1));
document.write("<br />Car at Last Index of Array: " +arrCars[arrCars.length-1]);

/*11. Write a program to store 3 student names in an array. Take another array to store score 
of these three students. Assume that total marks are 500 for each student, display the scores &
percentages of students like:*/

var arrStudNames = ["Anwer","Ebrahim","Ahmed"];
var arrStudMarks = [320,230,480];
document.write("Score of "+arrStudNames[0]+" is "+arrStudMarks[0]+". Percentage is "+((arrStudMarks[0]/500)*100)+"%");
document.write("<br />Score of "+arrStudNames[1]+" is "+arrStudMarks[1]+". Percentage is "+((arrStudMarks[1]/500)*100)+"%");
document.write("<br />Score of "+arrStudNames[2]+" is "+arrStudMarks[2]+". Percentage is "+((arrStudMarks[2]/500)*100)+"%");

/*12. Initialize an array with color names. Display the array elements in your browser.
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
Display the updated array in your browser.

b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated
array in your browser.

c. Add two more color to the beginning of the array. Display the updated array in your browser.

d. Delete the first color in the array. Display the updated array in your browser.
e. Delete the last color in the array. Display the updated array in your browser.
f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined position/index. . Display the updated array in your
browser.*/

var arrColors = ["Red","Yellow", "Magenta","Cyan","Blue"];
document.write("Elements of Array are: "+arrColors+"<br />");
var a = prompt("What Color do you want to add in the begining ?");
arrColors.unshift(a);
document.write("Elements of Array are: "+arrColors+"<br />");
var b = prompt("What Color do you want to add at the end ?");
arrColors.push(b);
document.write("Elements of Array are: "+arrColors+"<br />");
document.write("<h2>Adding More Colors at the begining <br /> </h2>");
arrColors.splice(0,0,"White","Purple");
document.write("Updated Values of Array are: "+arrColors);
document.write("<h2>Deleting First Color in the Array <br /> </h2>");
arrColors.shift();
document.write("Updated Values of Array are: "+arrColors);
document.write("<h2>Deleting Last Color in the Array <br /> </h2>");
arrColors.pop();
document.write("Updated Values of Array are: "+arrColors);
document.write("<h2>Taking Input from the User to Add Colors</h2>")
var c = +prompt("Enter the Index Position for adding Color in Array");
var d = prompt("What Color do you want to add ?");
arrColors.splice(c,0,d);
document.write("<br />Updated Values of Array are: "+arrColors);
document.write("<h2>Taking Input from the User to Delete Colors</h2>")
var e = +prompt("Enter the Index Position for Delete Color in Array");
var f = +prompt("How many colors to delete ?");
arrColors.splice(e,f,);
document.write("<br />Updated Values of Array are: "+arrColors);


//13. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method

var arrStudScore = [];
arrStudScore[0] = prompt("Enter Score 1 of 4");
arrStudScore[1] = prompt("Enter Score 2 of 4");
arrStudScore[2] = prompt("Enter Score 3 of 4");
arrStudScore[3] = prompt("Enter Score 4 of 4");
document.write("<h2>Unsorted Scores</h2>")
document.write(arrStudScore);
document.write("</br><h2>Sorted Scores</h2>")
document.write(arrStudScore.sort());

//14. Write a program to sort the below mentioned array: var fruits = [“strawberry”, “apple”, “orange”, “banana”];

var fruits = ["strawberry", "apple", "orange", "banana"];
document.write("<h2>Fruits List</h2>")
document.write(fruits);
document.write("</br><h2>Ordered Fruits List</h2>")
document.write(fruits.sort());

//15. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
document.write("<h2>Elements of Cities Array</h2></br>")
document.write(cities);
var selcities = cities.slice(1,4);
document.write("<h2>Elements of Selected Cities Array</h2></br>")
document.write(selcities);

/*16. Write a program to create a single string from the below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/

var arr = ["This", "is", "my", "cat"];
document.write("<h2>Before Joining</h2>")
document.write(arr);
document.write("<h2>Joining to form a String</h2><br/>")
var a = arr.join(" ");
document.write(a);

/*17. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were
stored. (FIFO-First In First Out)*/

var devices = [];
devices.push(prompt("Enter Name of Device at Index 0"));
devices.push(prompt("Enter Name of Device at Index 1"));
devices.push(prompt("Enter Name of Device at Index 2"));
devices.push(prompt("Enter Name of Device at Index 3"));
var d = prompt("Enter index # of Device to Display")
document.write("<br/>Device at Index "+d+" is "+devices[d])

/*18. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First
Out)*/

var arrDev = [];
arrDev.unshift(prompt("Enter Name of Device at Index 0"));
arrDev.unshift(prompt("Enter Name of Device at Index 1"));
arrDev.unshift(prompt("Enter Name of Device at Index 2"));
arrDev.unshift(prompt("Enter Name of Device at Index 3"));
var d = prompt("Enter index # of Device to Display")
document.write("<br/>Device at Index "+d+" is "+arrDev[d])


/*19. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
the following dropdown/select menu in your browser using
document.write() method:*/

var phones = ["Apple","Nokia","Samsung","Huwaie","QMobile"]
document.write("<select><option>"+phones[0]+"</option><option>"+phones[1]+
"</option><option selected>"+phones[2]+"</option><option>"+phones[3]+
"</option><option>"+phones[4]+"</option></select>")

//20. Declare and initialize an empty multidimensional array. (Array of arrays)

var arrMultiD = [[][]];

//21. Declare and initialize a multidimensional array representing the following matrix:

var items = [
  [0, 1, 2, 3],
  [1, 0, 1 ,2],
  [2, 1, 0, 1]
];
document.write(items[0][0]);
document.write(items[0][1]);
document.write(items[0][2]);
document.write(items[0][3]);
document.write("<br />")
document.write(items[1][0]);
document.write(items[1][1]);
document.write(items[1][2]);
document.write(items[1][3]);
document.write("<br />")
document.write(items[2][0]);
document.write(items[2][1]);
document.write(items[2][2]);
document.write(items[2][3]);


