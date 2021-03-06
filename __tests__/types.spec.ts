import Path, { join } from 'path';
import Url from 'url';

import TsdModule from 'tsd';

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- @todo
const tsd = (TsdModule as { readonly default: typeof TsdModule }).default;

describe('@typeofweb/schema', () => {
  it('tsd', async () => {
    const diagnostics = await tsd({
      cwd: join(Path.dirname(Url.fileURLToPath(import.meta.url)), '..'),
      typingsFile: './dist/index.d.ts',
      testFiles: ['./__tests__/*.test-d.ts'],
    });

    if (diagnostics.length > 0) {
      const errorMessage = diagnostics.map((test) => {
        return (
          [test.fileName, test.line, test.column].filter((x) => x).join(':') +
          ` - ${test.severity} - ${test.message}`
        );
      });
      fail('\n' + errorMessage.join('\n') + '\n');
    }
  });
});
