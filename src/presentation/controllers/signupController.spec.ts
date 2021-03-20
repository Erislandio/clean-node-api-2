import { SignUpController } from "./signupController.";

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        email: "test_any",
        password: "any_pass",
        confirmPassword: "any_pass",
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
