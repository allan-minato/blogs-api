const displayNameValidator = async (req, res, next) => {
    const { displayName } = req.body;

    if (!displayName || displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
          });
    }

    next();
};

const emailValidator = async (req, res, next) => {
    const { email } = req.body;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
  };

  const passwordValidator = async (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6) {
        res.status(400).json({
            message: '"password" length must be at least 6 characters long',
          });
    }
    next();
  };

  module.exports = {
    displayNameValidator,
    passwordValidator,
    emailValidator,
  };