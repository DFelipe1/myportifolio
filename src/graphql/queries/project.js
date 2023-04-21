import { gql } from 'urql';

export const Projects = gql`
  query {
    work(where: {id: "clgqvioaj0ml60am3az6ztxp3"}) {
        projects {
            deploy
            description
            details
            id
            repository
            title
            tumb {
                url
            }
            tecnologies {
                tech
            }
        }
    }
  }
`;