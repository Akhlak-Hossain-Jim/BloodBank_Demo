# Documentation

An Blood Donating Companie's Front-end Website 'demo'. Created by [Akhlak Hossain Jim](http://akhlak-hossain-jim.github.io/) with HTML, (S)CSS, React.js and icons from Material ui. View Live Demo [here](https://ahj-bloodbank-demo.web.app).

## Working With Code

working with the code is so easy

    First downlaod the zip file.
    After download open folder in the terminal (powershell or cmd) and run `npm install`.
    and you are good to go, and play with it.

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

All codes and style sheets are in same name. All sign Up files styles are defined in a single file `_signup.scss`. All dashboard styles are defined in `_dashboard.scss`. But working with these files are also easy they all have commented name writen before rules. I tried to name all class name retive to the component. I tried to define all styles for pages are so spacificly targeted for better usibility.
        
## Issues

    * This is only a front-end code.
    * The code is not responsive for small devices (yet).
