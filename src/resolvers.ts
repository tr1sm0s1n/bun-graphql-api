import { GraphQLError } from 'graphql'
import data from './data.ts'

export const resolvers = {
  Query: {
    mentors() {
      return data.mentors
    },
    mentor(_: any, args: { id: string }) {
      return data.mentors.find((mentor) => mentor.id === args.id)
    },
    pupils() {
      return data.pupils
    },
    pupil(_: any, args: { id: string }) {
      return data.pupils.find((pupil) => pupil.id === args.id)
    },
    reports() {
      return data.reports
    },
    report(_: any, args: { id: string }) {
      return data.reports.find((report) => report.id === args.id)
    },
  },
  Mentor: {
    reports(parent: { id: string }) {
      return data.reports.filter((r) => r.mentor_id === parent.id)
    },
  },
  Pupil: {
    reports(parent: { id: string }) {
      return data.reports.filter((r) => r.pupil_id === parent.id)
    },
  },
  Report: {
    mentor(parent: { mentor_id: string }) {
      return data.mentors.find((m) => m.id === parent.mentor_id)
    },
    pupil(parent: { pupil_id: string }) {
      return data.pupils.find((p) => p.id === parent.pupil_id)
    },
  },
  Mutation: {
    addMentor(_: any, args: { mentor: { name: string; branches: string[] } }) {
      let mentor = {
        ...args.mentor,
        id: Math.floor(Math.random() * 1000).toString(),
      }
      data.mentors.push(mentor)

      return mentor
    },
    updateMentor(_: any, args: any) {
      data.mentors = data.mentors.map((m) => {
        if (m.id === args.id) {
          return { ...m, ...args.edits }
        }
        return m
      })

      return data.mentors.find((m) => m.id === args.id)
    },
    addPupil(_: any, args: { pupil: { name: string } }) {
      let pupil = {
        ...args.pupil,
        id: Math.floor(Math.random() * 1000).toString(),
        passed: false,
      }
      data.pupils.push(pupil)

      return pupil
    },
    updatePupil(_: any, args: any) {
      data.pupils = data.pupils.map((p) => {
        if (p.id === args.id) {
          return { ...p, ...args.edits }
        }
        return p
      })

      return data.pupils.find((p) => p.id === args.id)
    },
    createReport(
      _: any,
      args: {
        report: {
          name: string
          grade: string
          marks: number
          mentor_id: string
          pupil_id: string
        }
      }
    ) {
      let mentor = data.mentors.find((m) => m.id === args.report.mentor_id)
      let pupil = data.pupils.find((p) => p.id === args.report.pupil_id)
      if (mentor && pupil) {
        let report = {
          ...args.report,
          id: Math.floor(Math.random() * 1000).toString(),
        }
        data.reports.push(report)

        return report
      } else {
        throw new GraphQLError('Invalid argument value', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
    },
    deleteReport(_: any, args: { id: string }) {
      data.reports = data.reports.filter((r) => r.id !== args.id)

      return data.reports
    },
  },
}
