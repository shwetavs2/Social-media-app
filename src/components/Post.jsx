import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const { likes = 0, dislikes = 0 } = post.reactions || {};

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(post.id)} />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hashtag">
            {tags}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {likes} and {dislikes} by people
        </div>
      </div>
    </div>
  );
};
export default Post;
