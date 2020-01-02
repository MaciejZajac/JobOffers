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
        <>
          <div className="columns">
            <div className="column">
              <div className="title">Profil firmy</div>
              <div>
                <strong>Company name:</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac porta leo. Integer nec facilisis magna. In vehicula malesuada
                erat, quis egestas urna. Quisque sit amet lectus ut neque
                consequat molestie. Donec quam felis, condimentum sed faucibus
                vitae, sollicitudin et metus. Donec et bibendum enim.
              </div>
              <br />
              <div>
                <strong>Company website:</strong> <br /> www.asd.pl
              </div>
              <br />
              <div>
                <strong>Company linkedin:</strong> {companyProfile.linkedInURL}
              </div>
              <strong>Company history:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla ac porta leo. Integer nec
              facilisis magna. In vehicula malesuada erat, quis egestas urna.
              Quisque sit amet lectus ut neque consequat molestie. Donec quam
              felis, condimentum sed faucibus vitae, sollicitudin et metus.
              Donec et bibendum enim.
              <br />
            </div>
            <div className="column is-half">
              <div>
                <figure class="image is-250x250">
                  <img
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Nie ma takiej firmy</div>
      )}
    </div>
  );
};

export default Profile;
