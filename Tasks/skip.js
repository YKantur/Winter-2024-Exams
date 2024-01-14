const skip = (T, ...Remove) => {
return T.filter((C) => !Remove.includes(C));
};

module.exports = skip;
