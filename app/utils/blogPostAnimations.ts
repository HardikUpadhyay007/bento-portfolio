import { inView, animate } from "motion";

const blogPostHeaderAnimation = () => {
  const header = document.querySelectorAll(".blog-post-header");

  inView(header, () => {
    animate(
      header,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-30px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const blogPostImageAnimation = () => {
  const image = document.querySelectorAll(".blog-post-image");

  inView(image, () => {
    animate(
      image,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["scale(0.95) ", "none"],
      },
      { duration: 0.6, delay: 0.2 }
    );
  });
};

const blogPostContentAnimation = () => {
  const content = document.querySelectorAll(".blog-content");

  inView(content, () => {
    animate(
      content,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(30px) ", "none"],
      },
      { duration: 0.7, delay: 0.3 }
    );
  });
};

const mobileAnimation = () => {
  inView(".blog-post-mobile-animation", (info) => {
    animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  });
};

const blogPostAnimations = {
  blogPostHeaderAnimation,
  blogPostImageAnimation,
  blogPostContentAnimation,
  mobileAnimation
};

export default blogPostAnimations;
