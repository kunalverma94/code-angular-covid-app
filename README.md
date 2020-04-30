Home Assignment - NAGP 2020 Batch Online Workshop on Angular
#Material UI USED
#FULLY MOBILE COMPATIBLE
# ENHANSED WITH GRAPHS AND CUSTOM NAVBAR
#IMAGE BROWSING AND UPLOADING Supported
#session managed
•	Module:
o	Admin Module
o	MaterialUI module
The above 2 imported in AppModule
•	Hosted ON: https://kunalverma94.github.io/covid/
•	UI Library: Angular Material, Google Graph API


1.	As a user, he should see 3 menu items or tabs: Dashboard, Latest news, Precautions.
a.	 
b.	The Add News is secured with GUARD that checks login
c.	Session is managed with local storage
2.	The dashboard will show the details of the states of India with the total no. of cases reported, active, recovered and deceased. A normal UI which shows these details on the main dashboard screen. Dashboard should be the default screen for any user.
a.	 
3.	On clicking on any state name, the user should see all the districts information as well. 
a.	 
4.	The latest news screen will have the details of the news posted by the admin. 
a.	 
5.	Precautions will have some general precautionary measures for the user regarding covid.
a.	 
6.	For an admin, we need to create an admin login screen. No need of database here. Make sure you use services for doing so. Optionally: You can use fake json server or can use in-memory-web-api provided by Angular. 
a.	A News Service Handles GET and POST of news 
b.	Local storage used to store news
7.	As an admin, I should be able to login and logout of the application.  Upon refresh, the user should not be logged out. Think in terms of session management in the browser.
a.	Local storage is used 
b.	Document.cookies also compatible with adjust in Authentication Service
c.	 
8.	As an admin, he can add news to the application. The admin will see a screen where he can add news title, description, summary, full news, any images (optional) any more fields related to covid. Use reactive forms for adding the news details. Add necessary validations using forms
a.	 
b.	This has been developed using reactive form
9.	Upon saving this news, the general user should be able to view the news.  
10.	No login is required for general users.
a.	 

Test Cases:
 


