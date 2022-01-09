import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {stages: [
  { duration: '3s', target: 1},
  { duration: '5s', target: 2},
  { duration: '8s', target: 3},
  { duration: '13s', target: 5}]};

export default function () {
  const res = http.get('https://httpbin.org/');
  console.log(res.status)
}
