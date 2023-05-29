const normalizeUser = rawUser => {
  const { url, alt } = rawUser.image;
  const image = {
    url:
      url ||
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    alt: alt || "User image",
  };
  return {
    ...rawUser,
    image,
    address: {
      ...rawUser.address,
      state: rawUser.address.state || "NOT DEFINED",
    },
    isUserNormalized: true,
  };
};

module.exports = normalizeUser;
