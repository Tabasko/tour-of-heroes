
# EC2
```
sudo yum install -y git

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

#sudo yum install -y npm
sudo npm install -g @angular/cli
```
<<<<<<< HEAD
=======
## Remote ssh config file:
```
Host ec2-3-64-215-249.eu-central-1.compute.amazonaws.com
  HostName ec2-3-64-215-249.eu-central-1.compute.amazonaws.com
  User ec2-user
  IdentityFile D:\\Development\\Repositories\\aws\\vscode-ec2.pem

```
>>>>>>> 2eb24b9 (added docu)

# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ng cli

New router module
```
ng generate module app-routing --flat --module=app
```