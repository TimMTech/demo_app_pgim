export const thumbnailSizeConversion: Function = async (src: string) => {
  await fetch(src)
    .then((response) => {
      return response.blob();
    })
    .then((image) => {
      return image.size;
    });
};
