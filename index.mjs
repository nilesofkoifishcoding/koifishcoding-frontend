import { handler } from './.output/server/index.mjs'

export const { statusCode, headers, body } = handler({ rawPath: '/' })