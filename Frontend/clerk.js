  // clerk.js
  import { ClerkProvider } from '@clerk/clerk-react';

  export const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

  export const ClerkWrapper = ({ children }) => (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      {children}
    </ClerkProvider>
  );
