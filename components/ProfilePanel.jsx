import AccountCard from "./AccountCard";

const ProfilePanel = () => {
  return (
    <div
      className="
        absolute
        right-0
        top-full
        mt-2
        z-50
        w-72
        card
        shadow-lg
      "
    >
      <div className="p-6">
        <h3 className="text-center">Profile Details</h3>
        <AccountCard />
      </div>
    </div>
  );
};

export default ProfilePanel;
