import { inView, animate } from "motion";

const blogTitleAnimation = () => {
  const blogTitle = document.querySelectorAll(".blog-title");

  inView(blogTitle, () => {
    animate(
      blogTitle,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-30px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const blogCardsAnimation = () => {
  const blogCards = document.querySelectorAll(".blog-card");

  blogCards.forEach((card, index) => {
    inView(card, () => {
      animate(
        card,
        {
          opacity: [0, 0.2, 0.8, 1],
          transform: ["translateY(50px) ", "none"],
        },
        { duration: 0.5, delay: 0.2 + (index * 0.1) }
      );
    });
  });
};

const mobileAnimation = () => {
  inView(".blog-mobile-animation", (info) => {
    animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  });
};

export default {
  blogTitleAnimation,
  blogCardsAnimation,
  mobileAnimation
};
