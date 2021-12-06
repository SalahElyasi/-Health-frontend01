import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
  CardMedia,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Collapse,
  Avatar,
  IconButton,
} from "@mui/material";
import { Favorite, Share, ExpandMore, MoreVert } from "@mui/icons-material";

//--------------------------------------------------main Function
const Post = () => {
  const [expanded, setExpanded] = useState(false);
  //--------------------------------------------------Functions

  const truncateString = (str, num) => {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  };
  const truncateTxt = truncateString(
    "A-tisket a-tasket A green and yellow basket",
    60
  );

  const ExpandMoreFunc = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const PostCard = (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        sx={{ textAlign: "left" }}
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Name"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        width="100%"
        height="500px"
        image="https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756__340.jpg"
        alt="Paella dish"
        position="relative"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        // backgroundPosition="center"
        // backgroundImage: `url(${post.image})`,
        // box-shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      />
      <CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
        <CardActions disableSpacing>
          <Typography
            zeroMinWidth="false"
            width="none"
            textAlign="left"
            variant="body2"
            color="text.secondary"
          >
            {truncateTxt}
          </Typography>
          <ExpandMoreFunc
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </ExpandMoreFunc>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography textAlign="left" paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
  //--------------------------------------------------------return
  return <Card sx={{ width: "100%" }}>{PostCard}</Card>;
};

export default Post;
