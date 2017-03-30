import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AfAuthService {
  public user: any;

  constructor(public af: AngularFire) {
    console.log('AuthService');
    this.login().then(user => {
      this.user = user;
    });
  }

  login() {
    return this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  socialLogin(loginProvider) {
    var provider;
    if (loginProvider === 'google') {
      provider = AuthProviders.Google;
    }
    else if (loginProvider === 'facebook') {
      provider = AuthProviders.Facebook;
    }
    else if (loginProvider === 'github') {
      provider = AuthProviders.Github;
    }
    else if (loginProvider === 'twitter') {
      provider = AuthProviders.Twitter;
    }

    return this.af.auth.login({
       provider: provider,
       method: AuthMethods.Popup,
    });
  }

  // Logs out the current user
  logout() {
    return this.af.auth.logout();
  }
}
