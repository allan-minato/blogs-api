const loginService = require('../services/login.service');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ message: 'Some required fields are missing' });
        }
        const token = await loginService.loginService(email, password);
        return res.status(200).json({ token });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
};

module.exports = {
    loginController,
};