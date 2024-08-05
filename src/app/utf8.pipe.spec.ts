import { Utf8Pipe } from './utf8.pipe';

describe('Utf8Pipe', () => {
  it('create an instance', () => {
    const pipe = new Utf8Pipe();
    expect(pipe).toBeTruthy();
  });
});
