import { AuthGateway } from '@infra/geteways/AuthGateway';
import { Injectable } from '@kernel/decorators/Injectable';

@Injectable()
export class SignUpUseCase {
  constructor(private readonly authGateway: AuthGateway) {}

  async execute({ email, password }: SignUpUseCase.Input): Promise<SignUpUseCase.Output> {
    const { externalId } = await this.authGateway.signUp({ email, password });

    return {
      accessToken: 'access token gerado...',
      refreshToken: 'refresh token gerado...',
    };
  }
}

export namespace SignUpUseCase {
  export type Input = {
    email: string;
    password: string;
  };

  export type Output = {
    accessToken: string;
    refreshToken: string;
  };
}
