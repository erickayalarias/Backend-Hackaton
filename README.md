# Backend-Hackaton

This project is made for the competition of the HACKATON OF 2022


<h3 align="center">Backend-Hackaton</h3>  
  <p align="center">
    <br />
    <a href="https://github.com/erickayalarias/Backend-Hackaton"><strong> Explore the docs </strong></a>
    <br />
  </p>
</div>




<details>
  <summary><b>Table of Contents</b></summary>
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
        <li><a href="#installation">Installation</a></li>
        <li><a href="#allCommands">allCommands</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project


This project is made for the HACKATON of 2022, it is a backend project using CLI, it lets you access the information of the MWC developers, edit, update and delete any developer and filter by category or date.

I used MongoDB to deploy the database in the cloud and Mongoose to make the connection, use of Commander and Inquirer for the CLI view.

You will find in src-folder all the files and folders in order, also some comments in the files.

* You will see that the file .env its not in .gitignore, because there is no sensitive information in the database but I know that normally the .env file has to be in gitignore also in config file [src/config/config] I check if the .env exists, if it doesn't use the specified URL.


<p align="center"> LIST OF TASKS DEMANDED</p>

DONE ✅ Task 1 → Create a developer model that contains the following information: Name, Email, Category ( Front, Back, Mobile, Data), Phone, Days to assist at the MWC ( 28 Feb, 1 -3 March).

DONE ✅ Task 2 → Insert the data of the .json in a Database. Link: (https://challenges-asset-files.s3.us-east-2.amazonaws.com/data_sets/mwc22.json).

DONE ✅ Task 3 → Generate a command CLI that displays the information of the MWC (Days that MWC is taking place)

DONE ✅ Task 4 → Generate a command CLI that displays the developers list.

DONE ✅ Task 5 → Generate a command CLI that lets you add a new developer and update the Database.
</br>

EXTRA ✅ Also added, some new features like edit, delete and filter by category or date.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [node.js](https://nodejs.org/)
* [Mongodb](https://www.mongodb.com/)
* [Javascript](https://www.javascript.com/)

Dependencies used:
Commander,
Cross-env,
Dotenv,
Inquirer,
Mongoose,
Jest

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First, you will need to do a npm install.

Once started you have to open the terminal and you can start.

There are two databases one control the main database with the command (mwc) and the other is for testing purpose only (npm run test) and if you want to see the test Database you can do (npm run dbTest).

* NOTE: The test database have the same information that the (mwc) have.

<p align="center">* <b>Main command:</b>  mwc </p>
<p align="center">* <b>Test command:</b> npm run test </p>
<p align="center">* <b>Database-Test command:</b>  npm run dbTest</p>

<br />

<b>You will find more info about the commands in Allcommands section.</b>



### Installation

1. Clone the repo https://github.com/erickayalarias/Backend-Hackaton.git

2. install NPM packages

<p align="right">(<a href="#top">back to top</a>)</p>



### allCommands
<p align="center"><b>List of all the commands:</b> </p>


<b>mwc</b> Show a little description of everything and also explain how the commands works and the shortcuts that they have. 
For example <b>mwc l</b> or <b>mwc list </b> will do the same.  <br />

<b>mwc l</b> | <b>list </b>   -Show the list of the developers that are going to assist at the MWC.<br /> <br />
<b>mwc delete</b> | <b>d</b> -It will ask for the _id, and then its going to delete that developer.<br /><br />
<b>mwc update</b> | <b>u</b> -Update the information of the developer (You have to pass the _id in order to update IT) example: mwc update 620557a04d8f47f99edc3fe2 <br /><br />
<b>mwc event</b> | <b>e</b>  -Show the days that the MWC is taking place.<br /><br />
<b>mwc find</b> | <b>f</b>   -You can find the developers in a certain category or a date (You have to pass the category or the date) example: mwc find Back<br /><br />
<b>mwc -V</b> | <b>--version</b>    To check the version<br /><br />

<p align="center"><b>Testing</b> </p>


<b>npm run test</b>           -It will start the tests.You can check how the test works in [src/test/developer.test.js].<br /><br />

<b>npm run dbTest</b>         -You will find the database for testings have the same information that the original database and you can execute the same commands that mwc does. example: npm run dbTest list



## Contact

Erick Ayala Arias - (https://www.linkedin.com/in/erick-ayala-arias-34b787151/)

Project Link: (https://github.com/erickayalarias/Backend-Hackaton.git)

<p align="right">(<a href="#top">back to top</a>)</p>


