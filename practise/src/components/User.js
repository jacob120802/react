import {useState, useEffect} from "react"

// //destructuring
// const User = ({name}) => {
//     return (
//       <div className="userCard">
//         <h2>Name: {name}</h2>
//         <h3>Location: Goa</h3>
//         <h4>Contact: jacob120802@gmail.com</h4>
//       </div>
//     )
// }

//fuctional component
const User = (props) => {
    const [count, setCount] = useState(0)
    const [myname, setname]=useState([])
  useEffect(()=>{
  //Api Calls    
    getUserData()
    const timer = setInterval(()=>{
        console.log("use effect ")
  },1000)
  return ()=>{
    clearInterval(timer)
    console.log("return")

    }
   },[]);
   console.log("render")

   async function getUserData() {
    const data = await fetch("https://api.github.com/users/jacob120802")
    const json = await data.json()
    console.log(json)
    setname(json)
   }

  return (
    <div className="userCard">       
        <button onClick ={()=>setCount(count+1)}>Like</button><h5> - {count}</h5>
      <h2>Name: {myname.name}</h2>
      <h3>Location: {myname.location}</h3>
      <h4>Contact: {myname.login}</h4>
    </div>
  )
}

// //class based component
// import React from 'react'
// class User extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//             userInfo: {
//                 name:"dummy",
//                 location: "default",

//             }
//         }
//     }
//     async componentDidMount(){
//         console.log("Component Did Mount")
//         //API Call
//         const data = await fetch("https://api.github.com/users/jacob120802")
//         const json = await data.json()
//         this.setState({
//             userInfo: json,
//         })
//     }
//     render(){
//         return(
//             <div className="userCard">
//                 <img src={this.state.userInfo.avatar_url}></img>
//                 <h2>Name: {this.state.userInfo.name}</h2>
//                 <h3>Location: {this.state.userInfo.location}</h3>
//                 <h4>Contact: {this.state.userInfo.login}@gmail.com</h4>
//                 <button onClick={()=>{
//                     this.setState({
//                         count: this.state.count + 1,
//                     })
//                 }}>Like</button>
//                 <h5> Like Count - {this.state.count}</h5>
//             </div>
//         ) 
//     }
// }

////class based component - destructuring
// import React from 'react'
// class User extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         const {name}=this.props
//         return(
//             <div className="userCard">
//                 <h2>Name: {name}</h2>
//                 <h3>Location: Goa</h3>
//                 <h4>Contact: jacob120802@gmail.com</h4>
//             </div>
//         ) 
//     }
// }
export default User
