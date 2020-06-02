// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  fotoAlunoDefault: 'https://gescolar.s3-sa-east-1.amazonaws.com/39812a77-b94a-401e-8ccd-539905f3ff03_.jpg',
  fotoProfessor: 'https://gescolar.s3-sa-east-1.amazonaws.com/08860cd0-72d8-4939-8700-d6d6ca88f53d_.jpg',
  tokenWhitelistedDomains: [new RegExp('localhost:8080') ],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
