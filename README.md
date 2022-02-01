# Note-Taker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Note Taker application can be used to write and save notes. It will use an Express.js back end and will save and retrieve note data from a JSON file

OLD README.MD MUST UPDATE!!

The Team Profile Generator is a command-line application that takes in information about employees on a software engineering team, then generates an index.html webpage that displays summaries for each person. The index.html is dynamically generated with user input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Test-driven development is done with [Jest package](https://www.npmjs.com/package/jest). The purpose of this application is so that developers can quickly create an engineering team summary for new projects. 

<br>


## Links

Deployed Sample HTML
> [https://elliotpark410.github.io/Team-Profile-Generator/](https://elliotpark410.github.io/Team-Profile-Generator/)
<br>

Link to GIF of Application
> [https://drive.google.com/file/d/1kdESWAR1hzb1fa7N0LL4Lrgjwg3YPNjN/view](https://drive.google.com/file/d/1kdESWAR1hzb1fa7N0LL4Lrgjwg3YPNjN/view)
<br>


Github Repository
> [https://github.com/elliotpark410/Team-Profile-Generator](https://github.com/elliotpark410/Team-Profile-Generator)

<br>


## Table of Contents
  * [Getting-Started](#getting-started)
  * [Installation](#installation)
  * [Test-Instructions](#test-instructions)
  * [Technologies-Used](#technologies-used)
  * [Contribution-Guidelines](#contribution-guidelines)
  * [Cloning-Guidelines](#cloning-guidelines)
  * [Screenshots](#screenshots)
  * [GIF-of-Application](#gif-of-application)
  * [Code-Snippets](#code-snippets)
  * [Learning-Points](#learning-points)
  * [Authors](#authors)
  * [License-and-Acknowledgements](#license-and-acknowledgements)
  * [Contact](#Contact)

<br>


## Getting-Started

To begin the application, use the following in command line:

```bash
node index.js
```
<br>


## Installation

1. You will need to install Node.js. Here is a link below:

>https://nodejs.org/en/download/

<br>

2. Once you have downloaded Node.js, you will want to download node package manager (npm). In command line, you can enter:

>npm install -g npm

<br>

3. After installing npm, you have to initialize npm. In command line, you can enter:

>npm init -y

<br>

4. Now you have to install Inquirer.js which is one of the many node packages. In command line, you can enter:

>npm install inquirer

<br>

5. Additionally, if you would like to run tests, you have to install Jest.js which is one of the many node packages. In command line, you can enter:

>npm install jest

<br>


<!-- ## Prerequisites
Requires node.js, npm inquirer, and npm jest (optional)

<br> -->


## Test-Instructions

To test with jest (optional), use the following in command line:
```bash
npm run test 
```

<br>


## Technologies-Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap CSS](https://getbootstrap.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [npm Inquirer](https://www.npmjs.com/package/inquirer)
* [npm Inquirer](https://www.npmjs.com/package/jest)

<br>


## Contribution-Guidelines
To contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<br>


## Cloning-Guidelines

To install this code, please use [Github's guidlines to clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

<br>

Github repository:
>https://github.com/elliotpark410/Team-Profile-Generator

<br>


## Screenshots 

<br>
Screenshot of jest in command line after running "npm run test" for test-driven development
<img src="Images\Jest TDD Success screenshot.png" title="Jest Test-Driven Development Success screenshot" width = 700px>

<br>
<br>
Screenshot of inquirer in command line after running "node index.js" to begin application
<img src="Images\Inquirer Command Line Prompt screenshot.png" title="Inquirer Command Line Prompt screenshot" width = 700px>

<br>
<br>
Screenshot of dynamically generated index.html
<img src="Images\Generated HTML Team Page screenshot.png" title="Dynamically Generated HTML Team Page screenshot" width = 700px>

<br>
<br>


## GIF-of-Application

<img src="Images\Team Profile Generator.gif" title="README generator" width = 500px>

<br>

Link to GIF of Application
> [https://drive.google.com/file/d/1kdESWAR1hzb1fa7N0LL4Lrgjwg3YPNjN/view](https://drive.google.com/file/d/1kdESWAR1hzb1fa7N0LL4Lrgjwg3YPNjN/view)
<br>

<br>

## Code-Snippets

This code snippet shows how you can create dynamically generated HTML file using node.js

* function writeToFile(employeeData) utilizes a node module called "fs", i.e. file system, which allows us to access physical file systems. "fs.writeFile()" method is used to asynchonously write specified data to a file

* function writeToFile(employeeData) creates a file "./dist/index.html" and writes data "employeeData which is dynamically generated HTML using generateHTML.js and teamArray"

* If there is an error during the file writing process, then it will console the error. If there is no error, then it will console "Your team profile has been created"

```

function generateCard(teamArray) {
  writeToFile(generateHTML(teamArray));
}

function writeToFile(employeeData) {
  fs.writeFile("./dist/index.html", employeeData, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created");
    }
  });
}

```

 <br>


## Learning-Points

* How to do test-driven development with npm Jest.js

* How to create command line prompts with npm Inquirer.js

* How to create files of dynamically generated HTML content with fs.writeFile() method

* How to create a new instance of an object using Object Oriented Programming e.g. 
```
const John = new Student('John', 'Appleseed', '30');
```

<br>


## Authors
 **1. Elliot Park** 

[https://github.com/elliotpark410](https://github.com/elliotpark410)
<br>

[https://www.linkedin.com/in/elliot-park/](https://www.linkedin.com/in/elliot-park/)

<br>


## License-and-Acknowledgements

This project is licensed under the MIT license via UC Berkeley's Extension Program

<br>

Big acknowledgements and thank you to Jerome Chenette, Manuel Nunes, Vince Lee, and Hannah Folk for their support and guidance!

<br>


## Contact
If you'd like to learn more about this application, check out my Github profile: [https://github.com/elliotpark410](https://github.com/elliotpark410)

<br>

If you have any questions, please don't hesitate to email me at [elliotpark410@gmail.com](mailto:elliotpark410@gmail.com)

<br>
Copyright (c) 2022 Elliot Park



 
  

 



 



