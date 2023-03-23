import { NextPageWithLayout } from "./_app"
import { Box, Stack, Typography } from "@mui/material";
import { navLayout } from '../components/NavLayout';
import { ProfileType } from "./api/profile";

import useSWR from 'swr'

const fetcher = async <T=any>(input: RequestInfo, init?: RequestInit): Promise<T> => {
    const res = await fetch(input, init)
    return res.json()
}

// The contents of this page are put here
const ProfilePage: NextPageWithLayout = () => {
    const profile = useSWR<ProfileType>('/api/profile', fetcher);
    return (
        <Stack spacing={2}>
          <Typography variant="h3">Profile: {profile.data?.username}</Typography>
          <Typography variant="h5">Name: {profile.data?.name}</Typography>
          <Typography variant="h5">Email: {profile.data?.email}</Typography>
          <Typography variant="h5">Motto: {profile.data?.motto}</Typography>
        </Stack>
    );
}

// This will cause the MainPage to use the navLayout
ProfilePage.getLayout = navLayout;

export default ProfilePage;