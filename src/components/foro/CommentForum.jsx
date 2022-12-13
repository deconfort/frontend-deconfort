import React from 'react'
import './forum.css'

export default function CommentForum() {
  return (
        <form className='formForum'>
            <label className='labelCommentForum'>Image 
                <input className='inputForum' type="text" name="" placeholder='Upload your image showing your experience'/>
            </label>
            <label className='labelCommentForum'>Comment
                <input className='inputForum' type="text" name="" placeholder='Enter your comment'/>
            </label>
            <button type="submit">Send comment</button>
        </form>
  )
}
