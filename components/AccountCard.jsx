import { useMerchantAuth } from "../context/MerchantAuthContext";
import PrimaryActionButton from "./PrimaryActionButton";
import ProfileDetails from "./ProfileDetails";

const AccountCard = () => {
  const { merchant, logout } = useMerchantAuth();

  if (!merchant) return null;

  return (
    <>
      <div className="card-body">
        <ProfileDetails
          business={merchant.businessName}
          first={merchant.firstName}
          last={merchant.lastName}
          id={merchant.id}
          email={merchant.email}
        />
      </div>

      <div className="card-actions">
        <PrimaryActionButton
          description="Log out"
          onClick={logout}
        />
      </div>
    </>
  );
}

export default AccountCard;
