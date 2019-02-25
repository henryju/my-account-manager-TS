import path from 'path'
import Storage from '@/services/storage'
import { ConfigProps } from '@/services/config'

describe('Storage Service', () => {
  it('Load and reload info from correct files', () => {
    let config: ConfigProps = { storageFolder: pathForFile('correct') }
    let storage: Storage = new Storage(config)
    expect(storage.repo()).toEqual({ account: 'foo' })
    expect(storage.payeeFinders()).toEqual({ finder: 'bar' })
    // reload
    storage.reload((err: Error | null) => {
      expect(storage.repo()).toEqual({ account: 'foo' })
      expect(storage.payeeFinders()).toEqual({ finder: 'bar' })
    })
  })
})

function pathForFile(file: string): string {
  return path.join(process.cwd(), 'tests', 'unit', 'services', '_storage.spec', file)
}
