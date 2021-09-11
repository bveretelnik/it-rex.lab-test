import React from "react";
import classes from "./DescriptionUser.module.css";

export const DescriptionUser = ({ userDetails, setShowDetails }) => {
  return (
    <>
      <div className={classes.overlay} onClick={() => setShowDetails(false)}>
        <div className={classes.popup} onClick={(e) => e.stopPropagation()}>
          <h2>Details User</h2>
          <span className={classes.close} onClick={() => setShowDetails(false)}>
            &times;
          </span>
          <div className={classes.content}>
            <ol className={classes.rounded}>
              <li>
                <span>First Name: </span> {userDetails.firstName}
              </li>
              <li>
                <span>Last Name:</span> {userDetails.lastName}
              </li>
              <li>
                {" "}
                <span>Email:</span> {userDetails.email}
              </li>
              <li>
                <span>Phone:</span> {userDetails.phone}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
