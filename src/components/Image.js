import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Brightness1 } from "@mui/icons-material";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Image = () => {
  return (
    <ImageList
      sx={{
        maxWidth: "100%",
        height: "100%",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <Brightness1 />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default Image;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Familienberatung",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1524586338739-40d41beb27d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Persönlichkeitsstörungen",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdW5zZWxsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Depression",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1631217866870-53feedcb8b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvdW5zZWxsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Sucht",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1632053651899-3389100579fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNvdW5zZWxsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Selbstvertrauen",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bnNlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Integration",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
