import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";
import NotFoundPage from "../pages/NotFoundPage";

const withAuthentication = (Component) => {
    
    return props => {
        const { isAuthenticated } = useAuth0();
        if (isAuthenticated) {
            return (
              <Component
                {...props}
              />
            );
          } else {
            return <NotFoundPage />;
          }
    }
}

export default withAuthentication;