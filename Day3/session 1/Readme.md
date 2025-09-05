HTML Basics: 

Emmet VS code : 

**after entering tab : 

1.   !    -> generates full boiler plate

2.   div, p 
    h1 to h6,           ---> generates all elements like <div></div>, <p></p> 
    span , ul ,li
    all the elements    

3. before 
    div.container
    after 
    <div class="conainer">

   before   div#container  
   after     <div id="container">

   before   div#container1.container2   
   after     <div id="container1" class="container2">


**Nesting elements :

4. before  : ul>li   
    after  : 
    <ul>
	    <li></li>
    </ul>

    before
    div>ul>li   
    after
    <div>
		<ul>
		    <li></li>
	    </ul>
	 </div>


**sibling elements :

5. before : h1+p      
    after :
    <h1></h1>
    <p></p>

   before : div+p+h2  
   after :
   <div></div>
    <p></p>
    <h2></h2>
   

**Multiplication  :

6. before : li*3  
    after 
        <li></li>
	    <li></li>
	    <li></li>

   before : div.items*3 
   after 
   <div class="item"></div>
   <div class="item"></div>
   <div class="item"></div>


** Adding texts : 

7. before : p{hello world}  
    after : <p>Hello World</p>

   before : li.items$*2{item $} 
   after : <li class="items1">item 1</li> 
            <li class="items2">item 2</li>    
   [$ auto increments number in multiples]
			  

**combining Everything : 

8.   before : 
    div#mail.container>h1{Title}+p{Para}+ul>li*3{item $}
    after :
      <div id="main" class="container">
    	<h1>Title</h1>
    	<p>Para</p>
    	<ul>
        	<li>Item 1</li>
        	<li>Item 2</li>
        	<li>Item 3</li>
    	</ul>
     </div>

    
