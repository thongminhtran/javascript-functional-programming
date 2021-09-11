## Javascript Functional Programming in ES6.

This is my self learning journey with Javascript.

### Set up the project:

In order to run ES6 syntax, we need babel. 
In order to run, we need to run as below:
```
npx babel-node hello-word.js
```

The output would be as below:
```
Say hello Vanessa
```

#### Core concepts of Functional programming:

1. #### Immutability

````
var x = 5;
...
x = 100;
...
x = -1
````
Functional programming won't allow, if we said x = 5, we cannot change later. 
Define x for the whole entire program, x cannot be changed. 

2. #### Separate data and functions

Example of data:
   ````
   {
    name: "Thong Minh Tran",
    job: "student"
   }
   ````
This data is always wrapped into an object in OOP, and we can get by functions. 

Function is something like this:
```
function findStudentByName(name){ return student;}
```

The OOP way:
```
class Student {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
}
```

Functional way:
```
const createStudent = (name) => ({
    name
    });
createStudent("Thong Minh Tran");
```

### ===> Use ESLINT

ESLint statically analyzes your code to quickly find problems. It adds nothing to our code. 

As for the functional programming, we make sure immutation won't happen in our code. In order to do so, I install eslint:
```
npm install --save-dev eslint
```
Then I run eslint init to answer all questions and ESLINT will create the file .eslintrc.js for me:
````
npx eslint --init
````

(I simply answer that I use Javascript for this self-learning project, select Node, with no framework. )

After that, I installed a new plugin for ESLINT to make sure my code doesn't have any immutation error:
```
npm install --save-dev eslint-plugin-immutable
```
Then inside .estlintrc.js, I define:
```
plugins: [
        'immutable'
    ],
    "rules": {
        'immutable/no-mutation': 2
    }
```
If I define 2, it means it must throw an error if my code has immutation error, and 1 for the warning, and 0 for no warning, no error at all. 

Then, in order to check that my eslint work, I created a new file called `immutable-eslint-example.js`, and inside I do some mistakes. 
Then in order for me to run the test, I run as below:
```
npx eslint .
```

It shows the error as below:
```
 6:1  error  No object mutation allowed  immutable/no-mutation

```
