import axios from 'axios';

export const POST = async (request: Request) => {
    // console.log(request.json())
    const body = await request.json()
    try {
        const response = await axios.post('http://127.0.0.1:1234/v1/chat/completions', body);

        return new Response(response?.data.choices[0].message.content, {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200
            });
    } catch (error:any) {
        return new Response(error.response.data);
    }
};

