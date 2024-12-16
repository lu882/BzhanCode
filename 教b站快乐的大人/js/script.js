document.addEventListener("DOMContentLoaded", function () {
  // 获取元素
  const imgs = document.querySelectorAll(".slider-wrapper-img");
  const sliderWrapperMask = document.querySelector(".slider-wrapper-mask");
  const slideContents = document.querySelectorAll(".slide-content");
  const sliderWrapper = document.querySelector(".slider-wrapper-white");
  // 定义数组选中旋转的角度和背景颜色

  const imgesRotation = [
    {
      rotation: 30,
      backgroundColor: "#39a3d38c",
    },
    {
      rotation: 60,
      backgroundColor: "#eff25c87",
    },
    {
      rotation: 90,
      backgroundColor: "#b0614e8c",
    },
    {
      rotation: 120,
      backgroundColor: "#61d3398c",
    },
  ];

  // 默认选中第一张图片
  const img1 = document.querySelector(".slider-wrapper-img1");
  gsap.set(img1, {
    scale: 1.5,
  });

  // 遍历每个头像img元素并添加点击事件监听
  imgs.forEach((item, index) => {
    item.addEventListener("click", () => {
      gsap.to(sliderWrapperMask, {
        duration: 1,
        rotation: imgesRotation[index].rotation,
      });

      gsap.to(sliderWrapper, {
        duration: 1,
        backgroundColor: imgesRotation[index].backgroundColor,
      });
    //   不要像我一样粗心大意哦
      gsap.to(".container", {
        duration: 1,
        backgroundColor: imgesRotation[index].backgroundColor,
      });

      gsap.to(slideContents, {
        y: () => {
          const yPotation = index * -100;
          return `${yPotation}vh`;
        },
        duration: 1,
        ease: "power2.inOut",
      });
      // 遍历所有头像img

      imgs.forEach((img) => {
    //   选中头像放大
        if (img === item) {
          gsap.to(img, {
            scale: 1.5,
            duration: 1,
            ease: "elastic",
          });
        } else {
        // 其他恢复正常大小
          gsap.to(img, {
            scale: 1,
            duration: 1,
            ease: "elastic",
          });
        }
      });
    });
  });
});
