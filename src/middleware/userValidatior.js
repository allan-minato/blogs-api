const displayNameValidator = async (req, res, next) => {
    const { displayName } = req.body;
    console.log('display name validator', displayName);
    if (!displayName || displayName.length < 8) {
      return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
  };
  
  const passwordValidator = async (req, res, next) => {
    const { password } = req.body;
    console.log('password validator', password);
    if (!password || password.length < 6) {
      return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
  };
  
  const emailValidator = async (req, res, next) => {
    const { email } = req.body;
    console.log('email validator', email);
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
  };
  module.exports = {
    displayNameValidator,
    passwordValidator,
    emailValidator,
  };