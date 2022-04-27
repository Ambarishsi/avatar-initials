function avatar_initials(options){

    let avatars = document.querySelectorAll('.avatar_initials');
   
    avatars.forEach((avatar, index) => {

        avatar.style.display = 'flex';
        avatar.style.justifyContent = 'center';
        avatar.style.alignItems = 'center';
        avatar.style.borderRadius = '100%';

        if(options.width){
            avatar.style.width = `${options.width}`;
        }else{
            avatar.style.width = '50px';
        }

        if(options.height){
            avatar.style.height = `${options.height}`;
        }else{
            avatar.style.height = '50px';
        }

        if(options.font_weight){
            avatar.style.fontWeight = `${options.font_weight}`;
        }else{
            avatar.style.fontWeight = '600';
        }

        if(options.background){
            avatar.style.background = `${options.background[index % options.background.length]}`;
        }else{
            avatar.style.background = 'grey';
        }

        if(options.color){
            avatar.style.color = `${options.color}`;
        }else{
            avatar.style.color = '#fff';
        }

        if(options.padding){
            avatar.style.padding = `${options.padding}`;
        }else{
            avatar.style.padding = '2px';
        }

    });
}

function getInitials(firstName, lastName) {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase();
  }

module.exports = {
    avatar_initials,
    getInitials,
  }