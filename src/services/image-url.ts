const getCroppedImageUrl = (url: string | null) => {
  if (!url) return undefined;

  const target = "media/";
  const targetIndex = url.indexOf(target);

  if (targetIndex === -1) return url;

  const index = targetIndex + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
