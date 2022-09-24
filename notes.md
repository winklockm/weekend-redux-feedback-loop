*** index.js ***
reducers: 
-feel
-understand 
-support
-comment
___________________________________________________
*** App.js ***
Use "Card" from Material UI
Use "Breadcrumbs" from Material UI to show what step you're on

Router
Header -"Feedback"

Routes:
-FeelingPage
    -1 of 4 pages 
    -How are you feeling today? 
        -REQUIRED 
        -"Rating" from Material UI 
    -Next button 
        -dispatch to "feeling" reducer 'SET_FEEL'
        -lead to Question2

-Understanding Page
    -2 of 4 pages 
    -How well are you understanding the content? 
        -REQUIRED 
        -"Rating" from Material UI 
    -Next button 
        -dispatch to "understanding" reducer 'SET_UNDERSTAND'
        -lead to Question3

-SupportedPage
    -3 of 4 pages 
    -How well are you being supported? 
        -REQUIRED 
        -"Rating" from Material UI 
    -Next button 
        -dispatch to "supported" reducer 'SET_SUPPORT'
        -lead to Question4

-CommentPage
    -4 of 4 pages 
    -Any comments you want to leave? 
        -NOT required "Text Field" from Material UI 
    -Next button -dispatch to "comment" reducer 'SET_COMMENT'
        -lead to Review

-ReviewPage 
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