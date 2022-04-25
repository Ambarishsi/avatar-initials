# what is this

java script library to generate avatar with name initials:)

# Installation

`npm i avatarinit --save`

# https://www.npmjs.com/package/avatarinit

usage...

```
import {avatar_initials, getInitials} from 'avatarjs';


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
        ```<div class="avatar_initials"> {{getInitials('john','doe')}}</div>```


