import classes from './NewPost.module.css';
import {useState} from 'react';

function NewPost({onClose, onAddPosts}) {
    
    const [textValue, setTextValue] = useState(''); 
    const [authorValue, setAuthorValue] = useState(''); 
    
    function textChangeHandler (event){
        setTextValue(event.target.value);
    }
    function authorChangeHandler (event){
        setAuthorValue(event.target.value);
    }

    function submitHandler (event){
        event.preventDefault();
        const postData = {
            body: textValue,
            author: authorValue
        };
        onAddPosts(postData);
        console.log(postData);
        onClose();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={textChangeHandler} />
            </p>

            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required  onChange={authorChangeHandler} />
            </p>
            
            <p className={classes.actions}>
                <button onClick={onClose}>Cansle</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;