export const typeDefs = `#graphql
  type Mentor {
    id: ID!
    name: String!
    branches: [String!]!
    reports: [Report!]
  }
  type Pupil {
    id: ID!
    name: String!
    passed: Boolean!
    reports: [Report!]
  }
  type Report {
    id: ID!
    grade: String!
    marks: Int!
    mentor: Mentor!
    pupil: Pupil!
  }
  type Query {
    mentors: [Mentor]
    mentor(id: ID!): Mentor
    pupils: [Pupil]
    pupil(id: ID!): Pupil
    reports: [Report]
    report(id: ID!): Report
  }
  type Mutation {
    addMentor(mentor: AddMentorInput!): Mentor
    updateMentor(id: ID!, edits: EditMentorInput): Mentor
    addPupil(pupil: AddPupilInput!): Pupil
    updatePupil(id: ID!, edits: EditPupilInput): Pupil
    createReport(report: ReportInput!): Report
    deleteReport(id: ID!): [Report]
  }
  input AddMentorInput {
    name: String!,
    branches: [String!]!
  }
  input EditMentorInput {
    name: String,
    branches: [String!]
  }
  input AddPupilInput {
    name: String!,
  }
  input EditPupilInput {
    name: String,
    passed: Boolean,
  }
  input ReportInput {
    grade: String!,
    marks: Int!,
    mentor_id: String!,
    pupil_id: String!
  }
`
