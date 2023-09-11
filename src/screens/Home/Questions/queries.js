import { gql } from "@apollo/client";

export const GET_QUESTIONS_SUBSCRIPTION = gql`
subscription{
    questions
    {
      id
      text
    }
  }
`;