import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ywmtywjdegoegqyslwow.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bXR5d2pkZWdvZWdxeXNsd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5MDM5NzIsImV4cCI6MTk5MTQ3OTk3Mn0.gCSZx7Y2oEzwJdne-5UxOHPr_ys9DdNyzjO7NJ2zl8Y"
    }
})