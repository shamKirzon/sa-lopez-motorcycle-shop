import loginRepository from "../repository/loginRepository.js";

async function loginController(req, res) {
  const { username, password } = req.body;
  try {
    const repository = await loginRepository(username, password);

    if (repository.success) {
      res.status(200).json({
        success: repository.success,
        message: repository.message,
        fullname: repository.fullname, 
        role: repository.role
      });
        
    } else {
      res.status(200).json({
        success: false,
        message: repository.message
      });
    }

  } catch (err) {
    console.error(
      "Error from the controller: Didn't receive the information you provided",
      err
    );
  }
}

export default loginController;
