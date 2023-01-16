import { handler } from './.output/server'

export const { statusCode, headers, body } = handler({ rawPath: '/' })