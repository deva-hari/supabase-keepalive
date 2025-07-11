# Supabase Keep-Alive

This GitHub Action keeps your Supabase project from becoming inactive by pinging it every 12 hours using the official Supabase JavaScript SDK.

## 🔧 Setup

1. Clone this repo or upload it to your GitHub.
2. Set the following secrets in **GitHub → Repo → Settings → Secrets and variables → Actions**:
   - `SUPABASE_URL`: Your project URL (e.g., `https://xyzcompany.supabase.co`)
   - `SUPABASE_ANON_KEY`: Anon or service role key

3. Edit `ping_supabase.js` and replace `your_public_table` with any public table in your DB.

## 💡 Features

- Uses `@supabase/supabase-js`
- 3 retry attempts with backoff
- GitHub Action logging for success/failure
- Schedule every 12 hours

## 📜 License

MIT License
