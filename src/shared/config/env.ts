import { z } from 'zod';

const schema = z.object({
  COGNITO_CLIENT_ID: z.string().min(1),
});

export const env = schema.parse(process.env);
