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
    background: 'grey',
    color: 'red',
    padding: '2px'
})

```

## Note

need to follow:

* apply class as 'avatar_initials' in your template file.
* pass the firstName and lastName in the 'getInitials' function.
    example: 
        ```HTML
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
      background: '#a2b9bc', 
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
![image](https://user-images.githubusercontent.com/19625099/165186008-76a0e230-8f09-4d24-82b1-687dd8bc7230.png)
