You need to write an application that would convert one currency to another, using the service https://fixer.io/documentation.  
You should have in HTML three input windows:  
1.from  
2.to  
3.amount  
     and buttons Calculate.  

The result should be displayed below the filling form as text like "Result : 111.11"  

URL 'http://data.fixer.io/api/latest?'  

On web-site you need to go through authorization, so I attach a username and password  

api_key = '826f2d71469e.....your key'  

fetch will be   
fetch(`${base_url}access_key=${api_key}`)  

***
Input fields from and to should not be text, but should be possible to choose from the proposed options.  
After reading the documentation for this service, you should understand how to get the list of currencies, and create an option for each of them.  

# Result

![image](https://github.com/user-attachments/assets/d4d1dba3-2ee7-40c8-b7c3-264d71bc0e97)

***
### you can get a list of currencies from a remote server by clicking the button

you can get a list of currencies from a remote server by clicking the button 

![image](https://github.com/user-attachments/assets/89b0a41d-8e4f-421c-8712-70c49e1d8201)

***
### 

![image](https://github.com/user-attachments/assets/7207ec01-ccc2-4be4-b015-60aacfc14db8)

