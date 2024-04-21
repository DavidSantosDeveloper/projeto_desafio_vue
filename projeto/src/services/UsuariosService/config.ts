import axios from 'axios';
export const http=axios.create(
    {
        baseURL:'https://api-manager-test.infog2.com.br.infog2.com.br/'
    }
)