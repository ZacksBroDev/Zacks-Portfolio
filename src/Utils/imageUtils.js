export const optimizeCloudinaryImage = (url, transforms = "f_auto,q_auto") => {
  if (!url || !url.includes("res.cloudinary.com") || !transforms) {
    return url;
  }

  const transformedUrl = url.replace(
    /\/upload\/(?:[^/]+\/)*?(v\d+\/)/,
    `/upload/${transforms}/$1`
  );

  return transformedUrl === url
    ? url.replace("/upload/", `/upload/${transforms}/`)
    : transformedUrl;
};
