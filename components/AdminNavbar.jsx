import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import ProfilePanel from "./ProfilePanel";

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-16 border-b border-border bg-surface flex justify-end px-4">
      {/* WRAPPER is the hover boundary */}
      <div
        className="relative flex items-center justify-between"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="text-lg font-semibold text-text-primary">
          eCommerce
        </span>
        {/* Trigger */}
        <button
          className="
            flex items-center justify-center
            rounded-full p-2
            text-text-secondary
            hover:bg-surface-muted
            hover:text-text-primary
            transition
          "
          aria-label="Open profile"
        >
          <UserCircleIcon className="h-8 w-8" />
        </button>

        {/* Popover */}
        {open && <ProfilePanel />}
      </div>
    </nav>
  );
};

export default AdminNavbar;
