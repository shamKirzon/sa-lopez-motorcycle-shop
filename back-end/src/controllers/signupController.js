import signupRepository from "../repository/signupRepository.js";

async function signupController(req, res) {
  try {
   
    const {
        personalDetails: {
            fullName, 
            address, 
            phoneNumber, 
            emailAddress
        }, 
        accountDetails: {
            username,
            password
        }
    } = req.body

    const userInformation = {
        fullName: fullName, 
        address: address,
        phoneNumber: phoneNumber, 
        emailAddress: emailAddress, 
        username: username,
        password: password

    }

    signupRepository(userInformation);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There is a problem in the controller." });
  }
}

export default signupController;
