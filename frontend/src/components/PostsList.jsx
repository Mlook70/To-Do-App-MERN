import classes from './PostsList.module.css';
import { useEffect, useState } from 'react';
import Post from './Post'
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = ({onPosting, isPosting}) => {

    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        async function fetchPosts(){
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
        }

        fetchPosts()
    }, [])
    
    function addPostHandler (postsData){
        fetch("http://localhost:8080/posts", {
            method: 'POST',
            body: JSON.stringify(postsData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts)=> [postsData, ...existingPosts]);
    };

    return (
        <>  
            {isPosting && (
                <Modal onClose={onPosting}>
                <NewPost onClose={onPosting} onAddPosts={addPostHandler}/>
                </Modal>
            )}

            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post)=> <Post key={post.author} author={post.author} body={post.body}/>)}
                </ul>
            )}

            {posts.length === 0 && (
                <div>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}

        </>
    );
};

export default PostsList;