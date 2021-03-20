export class SignUpController {
  public handle (httpRequest: any): any {
    const {
      body: { name, email }
    } = httpRequest

    if (!name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }

    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
