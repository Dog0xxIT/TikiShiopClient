import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/request-models/identity/login-request';
import { RegisterRequest } from '../../models/request-models/identity/register-request';

export interface UserServiceInterface {
    register(request: RegisterRequest): Observable<any>;
    login(request: LoginRequest): Observable<any>;
    externalLogin(request: any): Observable<any>;
    logout(): Observable<any>;
    refreshToken(): Observable<any>;
    manageInfo(): Observable<any>;
}
