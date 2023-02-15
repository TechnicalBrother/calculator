import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalculatorService {
  constructor(private http: HttpClient) { }
  calculate(data: { firstValue: number, secondValue: number, operation: string }) {
    return this.http.post<string>('http://localhost:3000/calculator/calculate', data);
  }
}