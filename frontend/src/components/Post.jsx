import classes from './Post.module.css';


function Post({author, body}){
    return (
        <>
            <div className={classes.post}>
                <p className={classes.author}>{author}</p>
                <p className={classes.body}>{body}</p>
            </div>
        </>
    );
};

export default Post;