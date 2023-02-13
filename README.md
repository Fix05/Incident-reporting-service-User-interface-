# Incident-reporting-service-User-interface-
This is a Web app for people to let know the ISP company which are their problems with the service and get a turn. This app is built with Javascript, React, NodeJs and an OracleSQL database. 



This section of the app is devided in a register page, login page and report page.

In the register page the users can create an account so they can login to get in the incident reporting page. There's some validation in this form:
email validation: it validates that there is any other acount with this email in the database.
password validation: The password can not have less than 10 characters, it must have special characters, numbers and letters included. It also must match with the confirmation password.

(The form also have html fields validations)

![image](https://user-images.githubusercontent.com/106176757/218351338-c3f6f148-be83-4664-bc26-93a6ede988b3.png)

![image](https://user-images.githubusercontent.com/106176757/218351363-9ca3d1cc-ba5e-4f22-b173-fd8f530dc52b.png)


Login page:

![image](https://user-images.githubusercontent.com/106176757/218363117-ffe8c3f3-a523-4ff6-b6ed-4acb5d178c4a.png)

When user logs in, the incident reporting page will be displayed. Here the user will be able to report their internet services issues.

![image](https://user-images.githubusercontent.com/106176757/218364398-1dc94cdd-768e-401f-b760-51d602c50614.png)


There are 4 types of issues: no internet, interferences, slow Internet and damaged devices. Depending on the problem there will be 4 diferents details.

No internet:

![image](https://user-images.githubusercontent.com/106176757/218364434-f65fffcd-7796-4084-b6c5-d95251b8d64c.png)

Interferences:

![image](https://user-images.githubusercontent.com/106176757/218364583-7db7cb0a-088a-4951-8a11-0112bb055cb1.png)


---

When the user sends the report he will get a turn asigned. Based on some functions and procedures created in Oracle database the user will have a specific date for the turn and an specific technical who is going to be handling the service problem.

![image](https://user-images.githubusercontent.com/106176757/218365468-94f3e61c-6eb9-498e-af58-f91675e0be4a.png)




