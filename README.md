# Backend-Hackaton
This project is made for the competition of the HACKATON OF 2022
<div id="top"></div>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

![LinkedIn][linkedin-shield][https://www.linkedin.com/in/erick-ayala-arias-34b787151/]



<h3 align="center">Backend-Hackaton</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#allCommands">allCommands</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)


This project is made for the HACKATON OF 2022, is a backend project using CLI, it let you access the information of the MWC, edit any developer, update and delete any developer and find by category or date.

I used Mongodb to deploy the database in the cloud and used mongoose to make the connection, use of commander and inquirer for the cli view.

You will find in src-folder all the files and folders in order, also some comments in the files.

NOTE: I didn't make a lot of comments because in most cases the name of the function, tell you what that function is doing.

                        LIST OF TASKS DEMANDED

DONE ✅ Task 1 → Make a model that has the next information: Name, Email, Category ( Front, Back, Mobile, Data), Phone, Days to assis the mobile ( 28 Feb, 1 -3 Marzo).

DONE ✅ Task 2 → Insert the data of the .json in a Database Link(https://challenges-asset-files.s3.us-east-2.amazonaws.com/data_sets/mwc22.json).

DONE ✅ Task 3 → Generate a command CLI that make a display of the information of the MWC (Days that is going to be)

DONE ✅ Task 4 → Generate a command CLI that make a display of the developers.

DONE ✅ Task 5 → Generate a command CLI that let you add a new developer and update the Database.

✅ Also added, some new features like edit, delete, find by category or date


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [node.js](https://nodejs.org/)
* [Mongodb](https://www.mongodb.com/)
* [Javascript](https://www.javascript.com/)

Dependencies used:
Commander
cross-env
dotenv
inquirer
mongoose
jest

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First, you will need to do a npm install.

Once started you have to open the terminal and you can start .

There are two databases one control the main database with the command (mwc) and the other is for testing purpose only (npm run test) and if you want to see the test Database you can do (npm run dbTest).

Main                               command: mwc
Tests                              command: npm run test
Test to see the database for test  command: npm run dbTest

You will find more info about the commands in Allcommands section.


### allCommands

                                                   List of all the commands:

mwc: Show a little description of everithing and also explain how the commands works and the shortcuts that they have. 
For example [mwc l] or [mwc list] will do the same. 

mwc l|list             -Show the list of the developers that are going to assist at the MWC.
mwc delete|d           -It will ask for the _id, and then its going to delete that developer.
mwc update|u  <id>     -Update the information of the developer (You have to pass the _id in order to update) example: mwc update 620557a04d8f47f99edc3fe2
mwc event|e            -Show the days that the MWC are going to be.
mwc find|f <devUser>   -You can find the developers in a certain category or a date (You have to pass the category or the date) example: mwc find Back
mwc -V|--version       -To check the version
                                                          
                                                        Testing

npm run test           -It will start the tests, you can check how the test works in src/test/developer.test.js.

npm run dbTest         -You will find the database for testings, have the same information that the original database and you can execute the same commands that mwc does.

### Installation

1. Clone the repo https://github.com/erickayalarias/Backend-Hackaton.git

2. install NPM packages

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>


