function ProfilePage(props) {
  const showMessage = () => {
    alert("Followed " + props.name);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>Push the button</button>;
}

export default ProfilePage;

