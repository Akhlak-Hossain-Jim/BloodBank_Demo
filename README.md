# Documentation

A Blood Donating Companie's Front-end Website 'demo', created by [Akhlak Hossain Jim](http://akhlak-hossain-jim.github.io/) with HTML, (S)CSS, React.js, and icons from Material UI. View Live Demo [here](https://ahj-bloodbank-demo.web.app).

## Viewing the demo

As it is a demo first of all some pages are not finished properly. You can see these pages

* Home or Welcome page -- click `start Journey`.
* You will land on the Sign In page from there you can view Dashboard by clicking Login Button or instead you can click Sign Up to see Sign up pages.
* After viewing all Sign-Up pages you will land again on the Sign In page By --click the Login button.
* You Will land on the Dashboard page --click Profile.
* You will land on the request page --click <-Request.
* You will land in the second phase of the profile page --click Notification.

That's all

## Working With Code

Working with the code is so easy

    First, download the zip file.
    After downloading, open the folder in the terminal (Powershell or cmd) and run `npm install`, and
    You are good to go and play with it.

## Folder Structure

Working folder structered in below nasting tree:

    ./src
        ./asset --(all components, pages, documents or files)
            ./components --(all components)
            ./pages --(all pages)
                ./signup
                ./dashboard
            ./images --(images)
        ./css --(compiled css in comprased format)
        ./scss --(precompailer of css)
            ./base --(base or core styles :: imported fonts :: typography)
            ./components --(all components styles)
            ./pages --(all pages styles)
            ./main.scss --(all scss files are imported here)
        ./App.js --(App is self and Router)
        ./imdex.js --(App used and puted to index.html)
        
## Using code 

All codes and style sheets are in the same name. All signUp file styles are defined in a single file named `_signup.scss`. All dashboard styles are defined in `_dashboard.scss` named file. But working with these files is also easy they all have commented names written before rules. I tried to name all class names relative to the component. I tried to define all styles for pages that are so specifically targeted for better usability.
## Issues

    * This is only a front-end code.
    * The code is not responsive for small devices (yet).
