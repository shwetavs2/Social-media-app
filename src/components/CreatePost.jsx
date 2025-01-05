import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User ID
        </label>
        <input type="text" name="userId" className="form-control" id="userid" />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          post title
        </label>
        <input type="text" name="title" className="form-control" id="title" />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post content
        </label>
        <textarea rows={4} name="body" className="form-control" id="content" />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Reactions
        </label>
        <input
          type="text"
          name="reaction"
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post tags
        </label>
        <input type="text" name="tags" className="form-control" id="tags" />
      </div>

      <button type="submit" className="btn btn-primary">
        POST{" "}
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
