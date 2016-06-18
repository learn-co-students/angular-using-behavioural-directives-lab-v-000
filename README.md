# Using behavioural Directives

## Objectives

- Use both event and behavioural Directives
- Create an input with ng-model
- Display the input's value in the View
- Render a list of DOM nodes using ng-repeat

## Instructions

Clone this repo and use the directory structure setup for you.

In this lab, we've got a controller named `ContactController` with an array of contacts inside.

We need these contacts to be repeated in our HTML with their name and phone number displayed. Just use `{{ }}` to put the value into the DOM for now.

We should also have a button that calls our `addContact` method, to add a new contact to the list.

After you've done this, instead of just putting the contact's name and number into the DOM, put them inside `<input />`s instead, using `ng-model` to set the value. This will allow us to edit the contacts. The data will always be displayed in these inputs. 
