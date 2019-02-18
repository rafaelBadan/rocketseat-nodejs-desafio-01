# Rocketseat Bootcamp

[Rocketseat bootcamp](https://github.com/Rocketseat/bootcamps) is a coding bootcamp focused on NodeJS, ReactJS and React Native.

# Challenge

Configure an app (using ExpressJS, Nunjucks, EditorConfig and ESLint) that receives a number from the user, representing his/her age, and renders specific pages depending on the input provided, indicating if the user is older or younger than 18 years old.

## Routes:

### /

Initial route that renders a page with a form containing a text field to receive the user `age` parameter.

### /check

Route called from the initial form that checks the user's `age` parameter.
If `age` is equal to or greater than `18`, it should redirect to `/major` route. Else, it should redirect the user to the `/minor` route.

### /major

Route responsible for rendering a page with the text:
**Você é maior de idade e possui `age` anos** , where `age` is the value provided by the user at the text input field.

### /minor

Route that renders a page with the text:
**Você é menor de idade e possui `age` anos** , where `age` is the value provided by the user at the text input field.
