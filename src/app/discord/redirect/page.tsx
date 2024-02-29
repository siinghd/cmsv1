import React, { Suspense } from 'react';
import DiscordOauthRedirect from './redirect';

const page = () => {
  return (
    <Suspense>
      <DiscordOauthRedirect />
    </Suspense>
  );
};

export default page;
