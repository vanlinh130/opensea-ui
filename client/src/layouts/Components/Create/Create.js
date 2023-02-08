import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector  } from "react-redux";

import styles from './Create.module.scss'
import { createPost, updatePost } from "~/actions/posts";
const cx = classNames.bind(styles)

const Create = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);      
    }, [post] )
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        // navigate("/")
        clear();
    }
    
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    
    return (
       <div  className={cx('wrapper')}>
        <form className={cx('form')} onSubmit={handleSubmit}>
            <h3>Creating a Memory</h3>
            <input 
                name="creator" 
                placeholder="Creator" 
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            <input 
                name="title" 
                placeholder="Tile" 
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <input 
                name="message" 
                placeholder="Message" 
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            <input 
                name="tags" 
                placeholder="Tags" 
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
            
            <div className={cx('file-input')}>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64})}
                />
            </div>

            <button className={cx('btn', 'btn-submit' )} variant='contained' type="submit">Submit</button>
            <button className={cx('btn', 'btn-clear')} variant='contained' type="submit" onClick={clear}>Clear</button>
        </form>
       </div>
    )
}

export default Create;