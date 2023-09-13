import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const campaigns = document.querySelector(".campaigns__wrapper");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview__img");

let isInside = false;

const bgPositions = {
  c1: "0 0",
  c2: "0 50%",
  c3: "0 100%",
};

function handlePreview(e) {
  const mouseInside = isMouseInsideCointainer(e);
  if (mouseInside !== isInside) {
    isInside = mouseInside;
    if (isInside) {
      gsap.to(preview, 0.3, {
        scale: 1,
      });
    } else {
      gsap.to(preview, 0.3, {
        scale: 0,
      });
    }
  }
}

function movePreview(e) {
  const previewRect = preview.getBoundingClientRect();
  const offsetX = previewRect.width / 2;
  const offsetY = previewRect.height / 2;

  preview.style.left = e.pageX - offsetX + "px";
  preview.style.top = e.pageY - offsetY + "px";
}

function movePreviewImg(campaign) {
  const campaignId = campaign.id;
  gsap.to(previewImg, 0.4, {
    backgroundPosition: bgPositions[campaignId] || "0 0",
  });
}

function isMouseInsideCointainer(e) {
  const campaignsRect = campaigns.getBoundingClientRect();
  return e.pageX >= campaignsRect.left && e.pageX <= campaignsRect.right && e.pageY >= campaignsRect.top && e.pageY <= campaignsRect.bottom;
}

window.addEventListener("mousemove", handlePreview);
[...campaigns.children].forEach((campaign) => {
  campaign.addEventListener("mousemove", movePreview);
  campaign.addEventListener("mousemove", movePreviewImg.bind(null, campaign));
});
