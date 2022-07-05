import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    userPoolId: '',
    userPoolWebClientId: '',
    region: 'eu-west-1',
    mandatorySignIn: true,
  }
})
