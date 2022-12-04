import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
//-------------------------------------------------------Backend-Root-URL
// let rootUrl = "http://localhost:5000";
let rootUrl = "https://health01api.onrender.com";
//-------------------------------------------------------Main-component
export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  const [userView, setUserView] = useState(null);
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState(null);
  const [myPosts, setMyPosts] = useState([]);
  const [reversedPosts, setReversedPosts] = useState(null);
  const [lastPost, setLastPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  //-------------------------------------------------------useEffect
  useEffect(() => {
    const token = localStorage.getItem("token");
    const verifyToken = async () => {
      try {
        setLoading(true);
        const {
          data: { success },
        } = await axios.get(`${rootUrl}/auth/verify-session`, {
          headers: { Authorization: token },
        });
        if (success) {
          const { data: userInfo } = await axios.get(
            `${rootUrl}/auth/me`,
            { headers: { Authorization: token } }
          );
          // localStorage.setItem("localUser", JSON.stringify(userInfo));
          // setUser(JSON.parse(localStorage.getItem("localUser")));
          setUser(userInfo);

          setIsAuthenticated(true);
          setLoading(false);
          getPost();
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.error);
        setTimeout(() => setError(null), 3000);
      }
    };

    if (token) {
      verifyToken();
    }
  }, []);
  //-------------------------------------------------------useEffect
  useEffect(() => {
    if (localStorage.getItem("localPosts")) {
      setReversedPosts(
        JSON.parse(localStorage.getItem("localPosts")).reverse()
      );
    }
    if (isAuthenticated) {
      getMyPosts();
    }
  }, [posts]);

  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("localUser")));
  // }, [user]);

  //-------------------------------------------------------signUp
  const signUp = async (newUser) => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newUser.email)) {
      try {
        setLoading(true);
        const {
          data: { token },
        } = await axios.post(`${rootUrl}/auth/signup`, newUser);
        const { data: userInfo } = await axios.get(
          `${rootUrl}/auth/me`,
          { headers: { Authorization: token } }
        );

        localStorage.setItem("token", token);
        setUser(userInfo);
        getUser();
        getPost();
        setIsAuthenticated(true);
        setLoading(false);
        setOpen(true);
      } catch (error) {
        setLoading(false);
        setOpen(true);
        if (error.message === "Request failed with status code 403") {
          setError("This Email is already in use.");
        } else {
          setError(error.message);
        }
        // setTimeout(() => setError(null), 3000);
      }
    } else {
      setOpen(true);
      setError("Email is not correct!");
      return;
    }
  };
  //-------------------------------------------------------signIn
  const signIn = async (user) => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(user.email)) {
      try {
        setLoading(true);
        const {
          data: { token },
        } = await axios.post(`${rootUrl}/auth/signin`, user);
        const { data: userInfo } = await axios.get(
          `${rootUrl}/auth/me`,
          { headers: { Authorization: token } }
        );

        localStorage.setItem("token", token);
        setUser(userInfo);
        setIsAuthenticated(true);
        setLoading(false);
        getPost();
        getMyPosts();
        setOpen(true);
      } catch (error) {
        setLoading(false);
        // setError(error.response.data.error);
        setError(error.message);
        setTimeout(() => setError(null), 3000);
      }
    } else {
      setOpen(true);
      setError("Email is not correct!");
      return;
    }
  };
  //-------------------------------------------------------update frontend
  // const update = async (newUser) => {
  //   try {
  //     setLoading(true);
  //     const {
  //       data: { token },
  //     } = await axios.patch(
  //       `${rootUrl}/auth/update/${user._id}`,
  //       newUser
  //     ); //
  //     const { data: userInfo } = await axios.get(
  //       `${rootUrl}/auth/me`,
  //       { headers: { Authorization: token } }
  //     );

  //     localStorage.setItem("token", token);
  //     localStorage.setItem("localUser", JSON.stringify(userInfo));
  //     setUser(JSON.parse(localStorage.getItem("localUser")));
  //     //console.log(userInfo);
  //     setIsAuthenticated(true);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error.response.data.error);
  //     setTimeout(() => setError(null), 3000);
  //   }
  // };

  const update = async (editedUser) => {
    try {
      setLoading(true);
      const { data: userInfo } = await axios.patch(
        `${rootUrl}/auth/update/${user._id}`,
        editedUser,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setUser(userInfo.data);
      setLoading(false);
      getUser();
      setOpen(true);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
      setTimeout(() => setError(null), 3000);
    }
  };
  //-------------------------------------------------------getUser
  const getUser = async () => {
    try {
      const res = await axios.get(`${rootUrl}/user`);
      localStorage.setItem("UserInfo", JSON.stringify(res.data));
      setUserInfo(JSON.parse(localStorage.getItem("UserInfo")));
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser({});
  };
  //-------------------------------------------------------createPost
  const createPost = async (newUser) => {
    try {
      const res = await axios.post(
        `${rootUrl}/auth/createpost`,
        newUser,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setPost(res.data);
      getPost();
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------getPost
  const getPost = async () => {
    try {
      const res = await axios.get(`${rootUrl}/getpost`);
      localStorage.setItem("localPosts", JSON.stringify(res.data));
      setPosts(JSON.parse(localStorage.getItem("localPosts")));
      if (posts) {
        //let ReversedPosts = Object.keys(posts).reverse();
        let reversedPosts = await posts.reverse();
        // console.log("Posts" + posts);
        // console.log("reversedPosts" + reversedPosts);
        setReversedPosts(reversedPosts);
        setLastPost(posts[Object.keys(posts)[Object.keys(posts).length - 1]]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------getMyPosts
  const getMyPosts = async (id) => {
    try {
      const res = await axios.get(`${rootUrl}/auth/myposts`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("myPosts", JSON.stringify(res.data));
      setMyPosts(JSON.parse(localStorage.getItem("myPosts")));
    } catch (error) {
      setMyPosts([]);
      console.log(error);
    }
  };
  //-------------------------------------------------------likePost
  const likePost = async (id) => {
    fetch(`${rootUrl}/auth/like`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // setLike(result);
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-------------------------------------------------------unlikePost
  const unlikePost = async (id) => {
    fetch(`${rootUrl}/auth/unlike`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // setLike(result);
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-------------------------------------------------------deletePost

  // const deletePost = (id) => {
  //   fetch(`${rootUrl}/auth/deletepost/${id}`, {
  //     method: "delete",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       const newData = data.filter((item) => {
  //         return item._id !== result._id;
  //       });
  //       setData(newData);
  //     });
  // };

  //-------------------------------------------------------commentPost
  const commentPost = async (commentInfo) => {
    if (isAuthenticated && commentInfo.text) {
      try {
        const res = await axios.patch(
          `${rootUrl}/auth/comment/${commentInfo.id}`,
          commentInfo,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        getPost();
      } catch (error) {
        setError(error.message);
        setTimeout(() => setError(null), 3000);
      }
    } else {
      return;
    }
  };
  //-------------------------------------------------------deletePost
  const deletePost = async (id, postedBy, user) => {
    if (isAuthenticated && postedBy === user._id) {
      try {
        const res = await axios.delete(
          `${rootUrl}/auth/deletepost/${id}`,

          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        getPost();
      } catch (error) {
        setError(error.message);
        setTimeout(() => setError(null), 3000);
      }
    }
  };
  //-------------------------------------------------------deleteCommentPost
  const deleteCommentPost = async (id, commentId) => {
    if (isAuthenticated) {
      fetch(`${rootUrl}/auth/deletecomment`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          id: id,
          commentId: commentId,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          getPost();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //----------------------------------------------------------------------------------------------
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        userInfo,
        setUserInfo,
        userView,
        setUserView,
        post,
        posts,
        lastPost,
        reversedPosts,
        loading,
        setError,
        error,
        setOpen,
        open,
        signUp,
        signIn,
        logout,
        update,
        createPost,
        myPosts,
        likePost,
        unlikePost,
        commentPost,
        deletePost,
        deleteCommentPost,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthState;
