import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 42,
  height: 42,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
        //   <SmallAvatar alt="Remy Sharp" src={ <PhotoCameraFrontOutlinedIcon color="success" />} />
        <SmallAvatar  ><PhotoCameraFrontOutlinedIcon color="success" /></SmallAvatar>
        //   <PhotoCameraFrontOutlinedIcon color="success" />
        }
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 100, height: 100 }}/>
      </Badge>
    </Stack>
  );
}