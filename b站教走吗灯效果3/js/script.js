// 因为9张图片，它排序上我没有看出什么规律，我就大概估计了一下，定义了一个数组

// 9张照片的初始位置，以及背景颜色
const picturePotion = [
  {
    id: 0,
    rotation: 25,
    x: 0,
    y: 0,
    skewX: 25,
    skewY: 0,
    backgroundColor: "#cdebee",
  },
  {
    id: 1,
    rotation: 10,
    x: 40,
    y: -50,
    skewX: 10,
    skewY: 0,
    backgroundColor: "#e0d0d1",
  },
  {
    id: 2,
    rotation: 5,
    x: 86,
    y: -86,
    skewX: 5,
    skewY: 0,
    backgroundColor: "#FFF",
  },
  {
    id: 3,
    rotation: 0,
    x: 124,
    y: -119,
    skewX: 0,
    skewY: 0,
    backgroundColor: "#d2c1d4",
  },
  {
    id: 4,
    rotation: -5,
    x: 120,
    y: -144,
    skewX: -5,
    skewY: 2,
    backgroundColor: "#ebdecb",
  },
  {
    id: 5,
    rotation: -10,
    x: 58,
    y: -178,
    skewX: -10,
    skewY: -2,
    backgroundColor: "#aad6f9",
  },
  {
    id: 6,
    rotation: -20,
    x: 23,
    y: -193,
    skewX: -20,
    skewY: 0,
    backgroundColor: "#121722",
  },
  {
    id: 7,
    rotation: -30,
    x: -8,
    y: -218,
    skewX: -30,
    skewY: 8,
    backgroundColor: "#4f508b",
  },
  {
    id: 8,
    rotation: -40,
    x: -50,
    y: -251,
    skewX: -39,
    skewY: 0,
    backgroundColor: "#f5fbbc",
  },
];

const imges = document.querySelectorAll(".img");

const buttonChange = document.querySelector(".buttonChange");
let i = -1; //记录点击第几次的下标
let j = 0; //循环递增数组用

document.addEventListener("DOMContentLoaded", () => {
  // 循环遍历数组，给每个图片设置初始位置
  function forEachImg() {
    imges.forEach((item, index) => {
      gsap.set(item, {
        rotation: picturePotion[index].rotation,
        x: picturePotion[index].x,
        y: picturePotion[index].y,
        skewX: picturePotion[index].skewX,
        skewY: picturePotion[index].skewY,
        backgroundColor: picturePotion[index].backgroundColor,
        opacity: 1,
        stagger: 0.1,
      });
    });
  }

  forEachImg();

  buttonChange.addEventListener("click", () => {
    // 超出范围位置全部返回初始状态
    console.log("imges.length", imges.length);
    console.log("i", i >= imges.length, i);
    if (i >= imges.length - 1) {
      console.log("i", i >= imges.length - 1, i);
      i = -1;
      j = 0;
      forEachImg();
    } else {
      i++;
      j = i;
      // 调用变换动画
      animation();
    }
  });

  // 定义变换动画

  function animation() {
    gsap.to(imges[i], {
      duration: 1,
      opacity: 0,
      y: 300,
      onComplte: () => {
        // 注意一点是小于，我写错了我写成大于，导致数组越界，导致报错，
        for (j; j < imges.length - 1; j++) {
          gsap.to(imges[j + 1], {
            duration: 1,
            rotation: picturePotion[j - i].rotation,
            x: picturePotion[j - i].x,
            y: picturePotion[j - i].y,
            skewX: picturePotion[j - i].skewX,
            skewY: picturePotion[j - i].skewY,
          });
        }
      },
    });

    // 背景颜色变换

    if (picturePotion[i + 1]) {
      gsap.to(".container", {
        backgroundColor: picturePotion[i + 1].backgroundColor,
        duration: 1,
      });
    }
  }
  //   不要像我一样粗心大意
});
