// eslint-disable-next-line no-unused-vars
import axios, { AxiosInstance } from 'axios'

const getPath = (id: string) => {
  return id === '1' ? '/5e5317902e000065002da998' : '/5e53216f2e00007c002da9a4'
}

class Client {
  private baseURL: string
  private client: AxiosInstance

  constructor({ baseUrl }: { baseUrl?: string }) {
    this.baseURL = baseUrl || 'http://www.mocky.io/v2'

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  public getEventsAndShowTimes = async ({ id = '1' }: { id?: string }) => {
    const { data } = await this.client.get(getPath(id))

    return data
  }
}

const client = new Client({})

export { client }
