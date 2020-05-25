module.exports = {
    PROJECT_ROOT: __dirname,
    ENV: process.env.ENV,
    Common: require(`${this.PROJECT_ROOT}/common`)
};
