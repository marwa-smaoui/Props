
import './App.css';
import { Profile } from './Component/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './profil.jpg';

function App() {

const styleObject={color:"red",textAlign:'center'}

 const handleName=(name)=>{
 alert(`the fullName is:${name}`);
 }


  const myProfile=[{   FullName:"Marwa Smaoui",
                        Bio:"i like react",
                        Profession:"student" 
                      }]
  return (
    <div style={styleObject}>
   <Profile myProfile={myProfile} handleName={handleName}>
     {myImage}

   </Profile>
    </div>
  );
  

}

export default App;
