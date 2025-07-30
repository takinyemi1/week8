import {createClient} from "@supabase/supabase-js"

const URL = "https://ffdttmneuuphqqrasmto.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZHR0bW5ldXVwaHFxcmFzbXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDAyMzcsImV4cCI6MjA2OTM3NjIzN30.cqFq89pLDstzaD0-ljeDIad9rSlwDjpyddRZS6_8LK8";

export const supabase = createClient(URL, API_KEY);