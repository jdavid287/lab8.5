import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lvrsghxuslrgfnzvrceo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cnNnaHh1c2xyZ2ZuenZyY2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3ODk4MzYsImV4cCI6MjAyNjM2NTgzNn0.LRS0Pkr5eWfsL-EShTqPMdcQXDARjCsAuvX6u54tVR4'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.publisher}</td></tr>`;
}