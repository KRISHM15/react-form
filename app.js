import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName: "",
            age:"",
            gender:"",
            destination:"",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} =event.target
            type==="checkbox"?
            this.setState({[name]:checked}):
            this.setState({[name]:value})
        
        
    }
    render()
    {
        return( 
         <main>
         <form>
         <input name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"  />
            <br/>
         <input name="lastName"
                   value={this.state.lastName}
                   onChange={this.handleChange}
                   placeholder="Last Name" />
            <br/>
         <input name="age"
                   value={this.state.age}
                   onChange={this.handleChange}
                   placeholder="Enter your Age" />
            <br/>
        <input     type="radio"
                   name="gender"
                   value="male"
                   checked={this.state.gender==="male"}
                   onChange={this.handleChange}
                    />Male
            
        <input     type="radio"
                   name="gender"
                   value="female"
                   checked={this.state.gender==="female"}
                   onChange={this.handleChange}
                    />Female
           
        <input     type="radio"
                   name="gender"
                   value="transgender"
                   checked={this.state.gender==="transgender"}
                   onChange={this.handleChange}
                    />Transgender
                    <br/>
        <select value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}>
            <option value="">****Please select the destination***</option>
             <option value="germany">Germany</option>
             <option value="norway">Norway</option>
             <option value="india">India</option>
             <option value="pakisthan">Pakisthan</option>
             <option value="russia">Russia</option>
        </select>
        <br/>
        <label>
        <input type="checkbox" 
                name="isVegan"
                onChange={this.handleChange}
                checked={this.state.isVegan}/>Vegan
        </label>
        <label>
        <input type="checkbox" 
                name="isKosher"
                onChange={this.handleChange}
                checked={this.state.isKosher}/>Kosher
        </label>
        <label>
        <input type="checkbox" 
                name="isLactoseFree"
                onChange={this.handleChange}
                checked={this.state.isLactoseFree}/>LactoseFree
        </label>
        <br/>
        
        <button>Submit</button>
               
         </form>
         <hr/>
         <h2>Entered Information</h2>
         <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
         <p>Your Age: {this.state.age}</p>
         <p>Your Gender: {this.state.gender}</p>
         <p>Your Destination:{this.state.destination}</p>
         <p>Your Dietary Restrictions</p>
         <p>Vegan:{this.state.isVegan? "Yes":"No"}</p>
         <p>Kosher:{this.state.isKosher? "Yes":"No"}</p>
         <p>Lactose Free:{this.state.isLactoseFree? "Yes":"No"}</p>
         </main>
            
        )
    }
}

export default App 
