const WelcomeMessage = ({ OnGetPostClicked }) => {
  return (
    <h1>
      <center>
        This is a welcome message when there are no post in list<br></br>
        <button
          type="button"
          className="btn btn-primary"
          onClick={OnGetPostClicked}
        >
          Get Post
        </button>
      </center>
    </h1>
  );
};
export default WelcomeMessage;
