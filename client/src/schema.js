export const typeDefs = `
type Channel {
   id: ID!                # "!" denotes a required field
   name: String
}

type Query {
   channels: [Channel]    # "[]" means this is a list of channels
}
`;