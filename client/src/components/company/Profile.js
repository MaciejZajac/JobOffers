import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AGetCompanyProfile } from "../../actions/offerActions";
import { SGetCompanyProfile, SIsLoading } from "../../selectors";

const Profile = ({ match }) => {
  const companyName = match.params.profileName;
  const dispatch = useDispatch(AGetCompanyProfile(companyName));
  const companyProfile = useSelector(SGetCompanyProfile);
  const isLoading = useSelector(SIsLoading);

  useEffect(() => {
    dispatch(AGetCompanyProfile(companyName));
  }, [dispatch, companyName]);

  if (isLoading) {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <progress className="progress is-small is-primary" max="100" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {companyProfile ? (
        <div className="columns">
          <div className="column is-half">
            <strong>Company name:</strong> {companyProfile.companyName}
            <br />
            <strong>Company website:</strong> {companyProfile.companyWebsite}
            <br />
            <strong>Company linkedin:</strong> {companyProfile.linkedInURL}
            <br />
            <strong>Company history:</strong> {companyProfile.companyHistory}
            <br />
          </div>
        </div>
      ) : (
        <div>Nie ma takiej firmy</div>
      )}
    </div>
  );
};

export default Profile;
