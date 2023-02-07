import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ivufsmqmoinlchpwywgg.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dWZzbXFtb2lubGNocHd5d2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNjk1ODksImV4cCI6MTk5MDc0NTU4OX0.-BGsR9WSaqmZeFiszrBP08VyXb-mj7TR1LSxFvcKmzM",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dWZzbXFtb2lubGNocHd5d2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNjk1ODksImV4cCI6MTk5MDc0NTU4OX0.-BGsR9WSaqmZeFiszrBP08VyXb-mj7TR1LSxFvcKmzM"
    }
})