*** index.js ***
reducers: 
-feeling 
-understanding 
-supported 
-comment
___________________________________________________
*** App.js ***
Use "Card" from Material UI
Use "Breadcrumbs" from Material UI to show what step you're on

Router
Header -"Feedback"

Routes:
-Question1 
    -1 of 4 pages 
    -How are you feeling today? 
        -REQUIRED 
        -"Rating" from Material UI 
    -Next button 
        -dispatch to "feeling" reducer 
        -lead to Question2

-Question2 
    -2 of 4 pages 
    -How well are you understanding the content? 
        -REQUIRED 
        -"Rating" from Material UI 
    -Next button 
        -dispatch to "understanding" reducer 
        -lead to Question3

-Question3 
    -3 of 4 pages 
    -How well are you being supported? 
        -REQUIRED 
        -"Rating" from Material UI 
    -Next button 
        -dispatch to "supported" reducer 
        -lead to Question4

-Question4 
    -4 of 4 pages 
    -Any comments you want to leave? 
        -NOT required "Text Field" from Material UI 
    -Next button -dispatch to "comment" reducer 
        -lead to Review

-Review 
    -useSelect to display all previous answers 
    -User cannnot change input or go back. 
    -Submit button 
        -POST info to DB 
        -leads to confirmation page

-ComfirmationPage 
    -Thank you! Feedback has been submitted! 
    -Take a new survey button 
    -dispatch to reset all reducers 
    -leads to Question1