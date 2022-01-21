import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useStyles from "../Styles";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

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
  InputBase,
  Divider,
  Paper,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Favorite, Share, ExpandMore, MoreVert } from "@mui/icons-material";

//--------------------------------------------------main Function
const Post = ({ title, content, postedBy, likes, id, comments, createdAt }) => {
  const classes = useStyles();
  const {
    isAuthenticated,
    user,
    userInfo,
    likePost,
    unlikePost,
    commentPost,
    deletePost,
    deleteCommentPost,
    setUserView,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
      id: id,
    },
  });
  const onSubmit = (data) => {
    commentPost(data);
    reset();
  };

  const myPost = () => {
    try {
      const UserPhoto = userInfo.find(
        (user) => user._id.toString() === postedBy.toString()
      );
      return UserPhoto;
    } catch {
      return [];
    }
  };
  const UserPhoto = myPost();

  const [expanded, setExpanded] = useState(false);
  // const {
  //   posts: { title, content },
  // } = useContext(AuthContext);
  //--------------------------------------------------Functions

  const truncateString = (str, num) => {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  };
  const truncateTxt = truncateString(`${title}`, 60);

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

  const likeFunction = (id) => {
    if (isAuthenticated) {
      if (likes && likes.includes(user._id)) {
        unlikePost(id);
      } else {
        likePost(id);
      }
    } else {
      return <Navigate to="/signup" />;
    }
  };

  const viewFunction = () => {
    setUserView(UserPhoto);
  };
  //---------------------------------------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //--------------------------------------------------------------Main
  const PostCard = (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        sx={{ textAlign: "left" }}
        avatar={
          <Avatar
            onClick={viewFunction}
            component={Link}
            to="/UserViewProfile"
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={UserPhoto && UserPhoto.image}
          />
        }
        action={
          <div>
            <IconButton
              aria-label="settings"
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => deletePost(id, postedBy, user)}>
                Delete
              </MenuItem>
            </Menu>
          </div>
        }
        title={UserPhoto && UserPhoto.name}
        subheader={
          createdAt &&
          new Intl.DateTimeFormat("en-GB", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).format(new Date(createdAt))
        }
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
          <IconButton
            sx={{ mr: 2 }}
            aria-label="add to favorites"
            onClick={() => {
              likeFunction(id);
            }}
          >
            <Favorite
              sx={{
                color: `${
                  likes && likes.includes(user._id) ? red[500] : red[100]
                }`,
              }}
            />
          </IconButton>
          <Typography
            zeroMinWidth="false"
            width="none"
            textAlign="left"
            variant="body2"
            color="text.secondary"
          >
            {likes && likes.length + " Liked"}
          </Typography>
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
              {content}
            </Typography>
          </CardContent>
        </Collapse>
        <Typography
          zeroMinWidth="false"
          width="none"
          textAlign="left"
          variant="body2"
          color="text.secondary"
        >
          {comments &&
            comments.map((c, index) => (
              <Paper
                className={classes.hover}
                key={index}
                sx={{
                  p: "0",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  width: "98%",
                  boxShadow: 0,
                }}
              >
                <Typography
                  margin="0"
                  zeroMinWidth="false"
                  width="100%"
                  textAlign="left"
                  variant="body2"
                  color="text.secondary"
                >
                  {c.text}
                </Typography>
                {(postedBy && user && c.postedBy === user._id) ||
                postedBy === user._id ? (
                  <>
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                    <IconButton
                      sx={{ p: "10px" }}
                      aria-label="directions"
                      className={classes.button}
                      type="submit"
                      onClick={() => deleteCommentPost(id, c._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ) : null}
              </Paper>
            ))}
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 0 }}
        >
          <Paper
            sx={{
              p: "1px 5px",
              mt: 2,
              display: "flex",
              alignItems: "center",
              width: "96.5%",
              boxShadow: 0,
              border: 1,
              borderColor: "grey.400",
              borderRadius: 36,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              size="small"
              autoComplete="given-comment"
              id="text"
              name="text"
              placeholder="Comment..."
              {...register("text", { required: false })}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              sx={{ p: "5px" }}
              aria-label="directions"
              className={classes.button}
              type="submit"
            >
              <AddCircleIcon />
            </IconButton>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
  //--------------------------------------------------------return
  return <Card sx={{ width: "100%" }}>{PostCard}</Card>;
};

export default Post;
