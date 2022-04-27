# what is this

java script library to generate avatar with name initials:)

# Installation

`npm i avatarinit --save`

# https://www.npmjs.com/package/avatarinit

usage...

```TS
import {avatar_initials, getInitials} from 'avatarinit';


avatar_initials({
    width: '50px',
    height: '50px',
    font_weight: '600',
    background: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'],
    color: 'red',
    padding: '2px'
})

```
## update in this version(1.1.4):

  * you can pass 'n' numbers of color, if u want same background color for all the avatar then just pass one color in the         background array.

  * also you can pass either color name or hex code of the color.

  * for any query or suggestion, please join our discord server: 
  ### https://discord.gg/QafWk8msHN




## Note

need to follow:

* apply class as 'avatar_initials' in your template file.
* pass the firstName and lastName in the 'getInitials' function.
    example: 
        ```
        <div class="avatar_initials"> {{getInitials('john','doe')}}</div>
        ```
       

## Angular/Ionic Implementation

* test-component.component.ts

```TS
import { Component, OnInit } from '@angular/core';

import * as avatarini from 'avatarinit';



@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})

export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
    avatarini.avatar_initials({ 
      width: '50px', 
      height: '50px', 
      font_weight: '600', 
      background: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'], 
      color: '#fff', 
      padding: '2px' 
    });
  }

  getName(firstName: string, lastName: string) {
    return avatarini.getInitials(firstName, lastName);
  }


}

```

* test-component.component.html

```HTML
  <div class="avatar_initials"> {{getName('john','doe')}}</div>
  <br>
  <div class="avatar_initials"> {{getName('java','script')}}</div>
```

***Result

![image](https://user-images.githubusercontent.com/19625099/165595348-d11b4018-f03b-4134-a5dc-4b095978b972.png)

