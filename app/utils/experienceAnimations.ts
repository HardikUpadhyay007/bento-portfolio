import { inView, animate } from "motion";

const experienceHeaderAnimation = () => {
  const header = document.querySelectorAll(".experience-header");

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

const experienceCardAnimation = () => {
  const cards = document.querySelectorAll(".experience-card");

  cards.forEach((card, index) => {
    inView(card, () => {
      animate(
        card,
        {
          opacity: [0, 0.2, 0.8, 1],
          transform: ["translateX(-50px) ", "none"],
        },
        { duration: 0.5, delay: 0.2 + (index * 0.1) }
      );
    });
  });
};

const experienceTimelineAnimation = () => {
  const timeline = document.querySelectorAll(".experience-timeline");

  inView(timeline, () => {
    animate(
      timeline,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["scaleY(0)", "scaleY(1)"],
        transformOrigin: "top",
      },
      { duration: 0.7, delay: 0.1 }
    );
  });
};

const experienceDetailAnimation = () => {
  const details = document.querySelectorAll(".experience-detail");

  details.forEach((detail, index) => {
    inView(detail, () => {
      animate(
        detail,
        {
          opacity: [0, 0.2, 0.8, 1],
          transform: ["translateY(20px) ", "none"],
        },
        { duration: 0.3, delay: 0.3 + (index * 0.05) }
      );
    });
  });
};

const experienceTechAnimation = () => {
  const techs = document.querySelectorAll(".experience-tech");

  inView(techs, () => {
    animate(
      techs,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(20px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const mobileAnimation = () => {
  inView(".experience-mobile-animation", (info) => {
    animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  });
};

export default {
  experienceHeaderAnimation,
  experienceCardAnimation,
  experienceTimelineAnimation,
  experienceDetailAnimation,
  experienceTechAnimation,
  mobileAnimation
};
