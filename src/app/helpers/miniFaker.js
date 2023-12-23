
import minifaker from "minifaker";
import "minifaker/locales/en";

export function Faker (setter,number) {
    
        const storyUsers = minifaker.array(number,(i)=>(
           {
               userName: minifaker.username({locale:"en"}).toLowerCase(),
               image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
               jobTitle:minifaker.jobTitle(),
               id:i
   
           }
        ))
        return setter(storyUsers);
       
       
}