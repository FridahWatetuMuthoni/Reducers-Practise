import React,{useReducer,useState} from 'react'
import { formReducer,INITIAL_STATE } from '../reducers/formReducers'

function Form() {
    const [state,dispatch]=useReducer(formReducer, INITIAL_STATE)
    const [post, setPost]=useState({
        firstname:"",lastname:"",email:"",description:"",completed:false
    }
    )

const handleChange = (e)=>{
    const {value,name,type,checked} = e.target
        setPost(prev=>{
            return{
                ...prev,
                [name]:type==='checked'? checked:value
            }
        }
        )
    
}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(post.firstname && post.lastname && post.email && post.description){
        dispatch({type:'ADD_POST',payload:post})
        setPost(
        {
        firstname:"",lastname:"",email:"",description:"",completed:false
        }
        )
    }
    else{
        dispatch({type:'ERROR'})
    }
}

  return (
    <section>
        <form action="" onSubmit={handleSubmit}>
        <div>
            {
                state.error && <p className='error'>Please fill in all the fields</p>
            }
        </div>
        <label htmlFor="first_name">Enter First Name:</label>
            <input type="text" name="firstname" id="firstname" value={post.firstname} onChange={handleChange} />
            <br />
            <label htmlFor="last_name">Enter Last Name:</label>
            <input type="text" name="lastname" id="lastname" value={post.lastname} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={post.email} onChange={handleChange} />
            <br />
            <textarea name="description" id="description" value={post.description} onChange={handleChange} />
            <br />
            <input type="checkbox" name="completed" id="completed" checked={post.completed} onChange={handleChange} />
            <label htmlFor="completed">Are you Friendly?</label>
            <br />

            <button type="submit">Submit</button>

    </form>
    <section>
        {
            state.posts ? (
                <section>
                    {
                        state.posts.map((element,index)=>{
                            return(
                                <div key={index}  className='shadow'>
                                    <h3>{element.firstname}</h3>
                                    <h3>{element.lastname}</h3>
                                    <p>{element.email}</p>
                                    <p>{element.description}</p>
                                    <p>{element.completed? 'Task completed':'Task not completed'}</p>
                                </div>
                            )
                        })
                    }
                </section>
            ):null
        }
    </section>
    </section>
  )
}

export default Form
