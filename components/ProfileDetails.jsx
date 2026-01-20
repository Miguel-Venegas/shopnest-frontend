const ProfileDetails = ({ first, last, business, email, id }) => {
  return (
    <div className="stack-sm">
      <div>
        <h2 className="text-md ">Business Name: {business}</h2>
        <p className="text-sm text-text-muted">
          Name: {first} {last}
        </p>
      </div>

      <div className="stack-xs text-sm">
        Email: <p>{email}</p>
        <p className="text-text-muted">ID: {id}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
