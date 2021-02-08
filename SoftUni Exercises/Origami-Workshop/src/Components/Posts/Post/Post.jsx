import './Post.css'

const Post = ({ imageUrl, imageAlt, children, author }) => {
    return (
        <div className="Post">
            <img src={imageUrl} alt={imageAlt} />
            <p className="description">{children}</p>
            <div>
                <span>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    );
}

export default Post;