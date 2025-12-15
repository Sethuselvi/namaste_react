import { TextEncoder, TextDecoder } from "util";

// Polyfill TextEncoder and TextDecoder for jsdom environment
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}