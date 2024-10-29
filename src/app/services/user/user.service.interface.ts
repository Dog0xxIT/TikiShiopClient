import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/request-models/identity/login-request';
import { RegisterRequest } from '../../models/request-models/identity/register-request';
import {HttpResponse} from '@angular/common/http';
import {ProblemDetailsResponse} from '../../models/response-models/problem-detail-response';

export interface UserServiceInterface {
    register(request: RegisterRequest): Observable<HttpResponse<void>>;
    login(request: LoginRequest): Observable<any>;
    externalLogin(request: any): Observable<any>;
    logout(): Observable<any>;
    refreshToken(): Observable<any>;
    manageInfo(): Observable<any>;
}
