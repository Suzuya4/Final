// // pages/profile.tsx
// import React from 'react';
// import { Container, Typography, TextField, Button } from '@mui/material';
// import useSWR from 'swr';
// import axios from 'axios';
// import ProfileForm from '../components/ProfileForm';

// const fetcher = (url: string) => axios.get(url).then(res => res.data);

// const ProfilePage = () => {
//   const { data, error } = useSWR('/api/user', fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <Container>
//       <Typography variant="h4">Profile Page</Typography>
//       <ProfileForm userData={data} />
//     </Container>
//   );
// };

// export default ProfilePage;




// pages/profile.tsx
import ProfileForm from '../components/ProfileForm';

export default function Profile() {
  return <ProfileForm />;
}
